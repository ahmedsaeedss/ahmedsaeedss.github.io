import re
import sys

def check_js(filepath):
    try:
        with open(filepath, 'rb') as f:
            content_bytes = f.read()
            
        print(f"File size: {len(content_bytes)}")
        if content_bytes.startswith(b'\xef\xbb\xbf'):
            print("UTF-8 BOM found at start.")
            content_bytes = content_bytes[3:]
        
        # Check for BOMs in the middle of the file
        bom_count = content_bytes.count(b'\xef\xbb\xbf')
        if bom_count > 0:
            print(f"Warning: {bom_count} extra UTF-8 BOMs found in the middle of the file!")
            
        content = content_bytes.decode('utf-8', errors='replace')
        
        # Check brackets
        brackets = {'{': '}', '[': ']', '(': ')'}
        stack = []
        for i, char in enumerate(content):
            if char in brackets.keys():
                stack.append((char, i))
            elif char in brackets.values():
                if not stack:
                    print(f"Syntax Error: Unmatched closing bracket '{char}' at index {i}")
                    return
                top_char, top_index = stack.pop()
                if brackets[top_char] != char:
                    print(f"Syntax Error: Mismatched bracket. '{top_char}' at {top_index} closed by '{char}' at {i}")
                    return
        
        if stack:
            print(f"Syntax Error: {len(stack)} unclosed brackets. First unclosed is '{stack[0][0]}' at index {stack[0][1]}")
        else:
            print("Bracket matching passed.")
            
    except Exception as e:
        print(f"Python error: {e}")

check_js("data.js")
