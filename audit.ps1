
$content = Get-Content "data.js" -Raw
$matches = [regex]::Matches($content, '"category":\s*"([^"]+)"', [System.Text.RegularExpressions.RegexOptions]::Singleline)
$qStarts = [regex]::Matches($content, '"questions":\s*\[', [System.Text.RegularExpressions.RegexOptions]::Singleline)

for ($i = 0; $i -lt $matches.Count; $i++) {
    $catName = $matches[$i].Groups[1].Value
    $currentStart = $qStarts[$i].Index
    if ($i -lt ($qStarts.Count - 1)) {
        $nextStart = $qStarts[$i + 1].Index
        $block = $content.Substring($currentStart, $nextStart - $currentStart)
    }
    else {
        $block = $content.Substring($currentStart)
    }
    $qCount = [regex]::Matches($block, '"q":').Count
    Write-Host "${catName}: $qCount"
}
