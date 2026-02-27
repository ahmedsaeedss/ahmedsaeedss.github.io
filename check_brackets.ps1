$content = Get-Content "data.js" -Raw -Encoding UTF8

$stack = New-Object System.Collections.Generic.Stack[char]
$indexStack = New-Object System.Collections.Generic.Stack[int]

$brackets = @{ '}' = '{'; ']' = '['; ')' = '(' }

for ($i = 0; $i -lt $content.Length; $i++) {
    $char = $content[$i]
    if ($char -eq '{' -or $char -eq '[' -or $char -eq '(') {
        $stack.Push($char)
        $indexStack.Push($i)
    }
    elseif ($char -eq '}' -or $char -eq ']' -or $char -eq ')') {
        if ($stack.Count -eq 0) {
            Write-Host "Unmatched closing bracket '$char' at index $i"
            exit
        }
        $top = $stack.Pop()
        $topIndex = $indexStack.Pop()
        if ($brackets[$char] -ne $top) {
            Write-Host "Mismatched bracket. '$top' at $topIndex closed by '$char' at $i"
            exit
        }
    }
}

if ($stack.Count -gt 0) {
    Write-Host "$($stack.Count) unclosed brackets. First unclosed is $($stack.Peek()) at index $($indexStack.Peek())"
}
else {
    Write-Host "Bracket matching passed."
}
