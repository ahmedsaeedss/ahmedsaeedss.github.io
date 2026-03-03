import os

filename = 'data.js'
with open(filename, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if '"category":' in line:
            print(f"{i}: {line.strip()}")
        if '"name":' in line:
            print(f"{i}: {line.strip()}")
        if i > 10000:  # Limit to first 10k lines
            break
