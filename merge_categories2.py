import json

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I will extract the sections.
lines = content.split('\n')

ca_questions = lines[2792:2842]
wh_questions = lines[2848:2898]

# Ensure we end ca_questions and wh_questions with a comma on the last original item
# Wait, the last item of the original CA array is on line 2565.
# Let's just insert strings at specific index.

# Line 2565: { q: "In which year will the United ... election?", ... }
# To append new items, we must add a comma to line 2565!
lines[2565] += ","
lines.insert(2566, '\n'.join(ca_questions))

# Now line numbers shift! So let's re-split or compute the shift.
content_new = '\n'.join(lines)
lines = content_new.split('\n')

# Find the start of Famous Personalities to safely locate World History end
# World history ended originally around:
# { q: "Who was the leader of the Civil Rights Movement in the United States?", ... }
# Let's search for "Civil Rights Movement"
c_idx = -1
for i, l in enumerate(lines):
    if "Civil Rights Movement" in l:
        c_idx = i
        break

if c_idx != -1:
    lines[c_idx] += ","
    lines.insert(c_idx + 1, '\n'.join(wh_questions))

content_new = '\n'.join(lines)
lines = content_new.split('\n')

# Now find where the duplicate "Current Affairs" starts
dup_ca_idx = -1
for i, l in enumerate(lines):
    if "category: \"Current Affairs\"" in l and i > c_idx:
        dup_ca_idx = i - 1  # Including the `            },` before it
        break

if dup_ca_idx != -1:
    # Delete from dup_ca_idx up to the end but keep the closing brackets!
    # The file should end with:
    #             }
    #         ]
    #     }
    # ];
    
    lines = lines[:dup_ca_idx]
    lines.append('            }')
    lines.append('        ]')
    lines.append('    }')
    lines.append('];')
    lines.append('')
    
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("SUCCESS")
