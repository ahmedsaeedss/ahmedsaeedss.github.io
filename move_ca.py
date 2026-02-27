import sys
import os

filepath = 'data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = 2481
end_idx = 2616

if 'category: "Current Affairs"' not in lines[start_idx+1]:
    print(f"Error: Start index doesn't match expected content, got: {lines[start_idx+1].strip()}")
    sys.exit(1)

cut_lines = lines[start_idx:end_idx+1]
del lines[start_idx:end_idx+1]

# Rename the subcategory to avoid duplicate names
for i in range(len(cut_lines)):
    if 'category: "Current Affairs"' in cut_lines[i]:
        cut_lines[i] = cut_lines[i].replace('"Current Affairs"', '"Miscellaneous Current Affairs"')

target_idx = -1
for i, line in enumerate(lines):
    if 'name: "Current Affairs"' in line:
        target_idx = i
        break

if target_idx == -1:
    print("Error: Could not find target section")
    sys.exit(1)

insert_idx = -1
for i in range(target_idx, len(lines)):
    if lines[i].startswith('        ]'):
        insert_idx = i
        break

if insert_idx == -1:
    print("Error: Could not find insertion point")
    sys.exit(1)

# Ensure the subcategory before the new insertion ends with a comma
prev_line = lines[insert_idx-1].rstrip('\n\r')
if prev_line.endswith('}'):
    lines[insert_idx-1] = prev_line + ',\n'

# Ensure the last line of cut_lines DOES NOT end with a comma, since it'll be at the end of the array
last_cut_line = cut_lines[-1].rstrip('\n\r')
if last_cut_line.endswith('},'):
    cut_lines[-1] = last_cut_line[:-1] + '\n'

lines = lines[:insert_idx] + cut_lines + lines[insert_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Moved Current Affairs subcategory successfully.")
