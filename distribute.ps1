$ErrorActionPreference = "Stop"
$lines = Get-Content -Path "data.js" -Encoding UTF8

$allAffairsStartIdx = -1
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'category: "All Current Affairs"') {
        $allAffairsStartIdx = $i - 1 # include the '{' above
        break
    }
}

if ($allAffairsStartIdx -eq -1) {
    Write-Host "Error: Could not find 'All Current Affairs'"
    exit 1
}

# Find the end of 'All Current Affairs' block
$allAffairsEndIdx = -1
$openBraces = 0
for ($i = $allAffairsStartIdx; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '\{') { $openBraces += ($lines[$i].Length - ($lines[$i] -replace '\{', '').Length) }
    if ($lines[$i] -match '\}') { $openBraces -= ($lines[$i].Length - ($lines[$i] -replace '\}', '').Length) }
    
    if ($openBraces -eq 0 -and $i -gt $allAffairsStartIdx) {
        $allAffairsEndIdx = $i
        break
    }
}

# The block might be followed by a comma
if ($lines[$allAffairsEndIdx] -match '\}$') {
    # If the previous block has no comma, it's fine
}

# Extract questions
$questions = @()
$inQuestions = $false
for ($i = $allAffairsStartIdx; $i -le $allAffairsEndIdx; $i++) {
    if ($lines[$i] -match 'questions:\s*\[') {
        $inQuestions = $true
        continue
    }
    if ($inQuestions -and $lines[$i] -match '^\s*\]\s*,?\s*') {
        $inQuestions = $false
        break
    }
    if ($inQuestions -and $lines[$i] -match '\{ q: "') {
        $qLine = $lines[$i]
        $qLine = $qLine -replace '^\s+', ''
        $qLine = $qLine -replace ',$', ''
        $questions += $qLine
    }
}

Write-Host "Extracted $($questions.Count) questions."

$pakQuestions = @()
$intQuestions = @()

$pakKeywords = @("Pakistan", "Sindh", "Punjab", "Balochistan", "KPK", "Quetta", "Lahore", "Karachi", "Islamabad", "Gwadar", "CPEC", "Imran Khan", "Sharif", "Kakar", "Naqvi", "Qazi Faez Isa", "PCB", "CJP")

foreach ($q in $questions) {
    $isPak = $false
    foreach ($kw in $pakKeywords) {
        if ($q -match "(?i)\b$kw\b") {
            $isPak = $true
            break
        }
    }
    if ($isPak) {
        $pakQuestions += "                    $q,"
    }
    else {
        $intQuestions += "                    $q,"
    }
}

Write-Host "Pakistan qs: $($pakQuestions.Count), Int qs: $($intQuestions.Count)"

# Now we remove the All Current Affairs block from $lines
$part1 = $lines[0..($allAffairsStartIdx - 1)]
# Remove trailing comma from part1 if it is the last subcategory
$part2 = $lines[($allAffairsEndIdx + 1)..($lines.Count - 1)]
if ($part2[0] -match '^\s*\]') {
    if ($part1[-1] -match '^\s*\},$') {
        $part1[-1] = $part1[-1] -replace '\},$', '}'
    }
}
$linesWithoutAll = $part1 + $part2

# Now we insert $pakQuestions into "Pakistan Current Affairs"
$pakStart = -1
for ($i = 0; $i -lt $linesWithoutAll.Count; $i++) {
    if ($linesWithoutAll[$i] -match 'category: "Pakistan Current Affairs"') {
        $pakStart = $i
        break
    }
}

$pakInsert = -1
if ($pakStart -ne -1) {
    for ($i = $pakStart; $i -lt $linesWithoutAll.Count; $i++) {
        if ($linesWithoutAll[$i] -match '^\s*\]') {
            $pakInsert = $i
            break
        }
    }
}

if ($pakInsert -ne -1 -and $pakQuestions.Count -gt 0) {
    # add comma to the last existing question
    if ($linesWithoutAll[$pakInsert - 1] -match '\}$') {
        $linesWithoutAll[$pakInsert - 1] = $linesWithoutAll[$pakInsert - 1] + ','
    }
    $pakQuestions[-1] = $pakQuestions[-1] -replace ',$', ''
    $linesWithoutAll = $linesWithoutAll[0..($pakInsert - 1)] + $pakQuestions + $linesWithoutAll[$pakInsert..($linesWithoutAll.Count - 1)]
}

# Now insert Int questions into "International Affairs"
$intStart = -1
for ($i = 0; $i -lt $linesWithoutAll.Count; $i++) {
    if ($linesWithoutAll[$i] -match 'category: "International Affairs"') {
        $intStart = $i
        break
    }
}

$intInsert = -1
if ($intStart -ne -1) {
    for ($i = $intStart; $i -lt $linesWithoutAll.Count; $i++) {
        if ($linesWithoutAll[$i] -match '^\s*\]') {
            $intInsert = $i
            break
        }
    }
}

if ($intInsert -ne -1 -and $intQuestions.Count -gt 0) {
    # add comma to the last existing question
    if ($linesWithoutAll[$intInsert - 1] -match '\}$') {
        $linesWithoutAll[$intInsert - 1] = $linesWithoutAll[$intInsert - 1] + ','
    }
    $intQuestions[-1] = $intQuestions[-1] -replace ',$', ''
    $linesWithoutAll = $linesWithoutAll[0..($intInsert - 1)] + $intQuestions + $linesWithoutAll[$intInsert..($linesWithoutAll.Count - 1)]
}

$linesWithoutAll | Set-Content -Path "data.js" -Encoding UTF8
Write-Host "Done!"
