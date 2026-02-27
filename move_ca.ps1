$ErrorActionPreference = "Stop"

$lines = Get-Content -Path "data.js" -Encoding UTF8
if ($lines.Count -lt 3000) {
    Write-Host "File seems too short or failed to load properly."
    exit 1
}

$startIdx = 2481  # 0-indexed for line 2482
$endIdx = 2616

if ($lines[$startIdx+1] -notmatch 'category: "Current Affairs"') {
    Write-Host "Error: Unexpected content at start_idx"
    Write-Host $lines[$startIdx+1]
    exit 1
}

$part1 = $lines[0..($startIdx-1)]
$part2 = $lines[$startIdx..$endIdx]
$part3 = $lines[($endIdx+1)..($lines.Count - 1)]

# Rename category in part2
for ($i=0; $i -lt $part2.Count; $i++) {
    if ($part2[$i] -match 'category: "Current Affairs"') {
        $part2[$i] = $part2[$i] -replace '"Current Affairs"', '"All Current Affairs"'
    }
}

# Remove trailing comma on last line of part2
if ($part2[-1] -match '^\s*\},$') {
    $part2[-1] = $part2[-1] -replace '\},$', '}'
}

# Find insertion point in the combined part1 + part3
$combinedRest = $part1 + $part3

$targetIdx = -1
for ($i=0; $i -lt $combinedRest.Count; $i++) {
    if ($combinedRest[$i] -match 'name: "Current Affairs"') {
        $targetIdx = $i
        break
    }
}

if ($targetIdx -eq -1) {
    Write-Host "Error: Could not find target section"
    exit 1
}

$insertIdx = -1
for ($i=$targetIdx; $i -lt $combinedRest.Count; $i++) {
    if ($combinedRest[$i] -match '^        \]') {
        $insertIdx = $i
        break
    }
}

if ($insertIdx -eq -1) {
    Write-Host "Error: Could not find insertion point"
    exit 1
}

# Ensure the line before insertion point has a comma
$prevLine = $combinedRest[$insertIdx-1]
if ($prevLine -match '\}$') {
    $combinedRest[$insertIdx-1] = $prevLine + ','
}

# Build the final array
$finalLines = $combinedRest[0..($insertIdx-1)] + $part2 + $combinedRest[$insertIdx..($combinedRest.Count - 1)]

# Write back
$finalLines | Set-Content -Path "data.js" -Encoding UTF8

Write-Host "Moved successfully."
