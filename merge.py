import sys

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# We know exact lines, but let's just do it securely using splitlines
lines = text.splitlines()

# Extract the duplicate questions
ca_questions = lines[2792:2842]  # indices 2792 to 2841 (50 questions)
wh_questions = lines[2848:2898]  # indices 2848 to 2897 (50 questions)

# Current Affairs Original block ends exactly where?
# We need to find the element before 'category: "World History"' (original one around line 2569)
# The line `category: "World History"` original is index 2568 (line 2569).
# The ending bracket `]` of Current Affairs is at index 2565 (line 2566).
# The last question's line is index 2564 (line 2565).
ca_last_q_idx = 2564
# Append a comma to it
lines[ca_last_q_idx] = lines[ca_last_q_idx] + ","

# Insert ca_questions right after the last question (at index 2565)
# So indices 2565 to 2565+50 will be the new questions
lines = lines[:ca_last_q_idx+1] + ca_questions + lines[ca_last_q_idx+1:]

# Now all lines are shifted by +50.
# Famous Personalities original start line: originally 2655 (index 2654).
# Now it's 2654 + 50 = 2704.
# The `category: "Famous Personalities"` is at index 2704.
# The ending bracket `]` of World History is at index 2701.
# The last question's line of World History is index 2700.
wh_last_q_idx = 2700
# Append a comma
lines[wh_last_q_idx] = lines[wh_last_q_idx] + ","

# Insert wh_questions
lines = lines[:wh_last_q_idx+1] + wh_questions + lines[wh_last_q_idx+1:]

# Now both sets are inserted. Total shift = +100 lines.
# The duplicate sections were from index 2788 (originally 2788) to index 2901.
# But shifted by +100, they are from index 2888 to 3001.

# Wait, let's find the duplicate section dynamically to be extremely safe.
# It starts with `            },` immediately preceding `category: "Current Affairs"` (the duplicate one)
dup_start = -1
for i, l in enumerate(lines):
    if 'category: "Current Affairs"' in l and i > 2800: # The second one
        dup_start = i - 1 # This is the line with `            },`
        break

if dup_start != -1:
    # We want to remove from dup_start until we hit the end brackets.
    # We'll just keep everything before dup_start, and manually append the closing brackets.
    lines = lines[:dup_start]
    # Append the closing brackets
    lines.append('            }')
    lines.append('        ]')
    lines.append('    }')
    lines.append('];')
    lines.append('')

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("MERGE DONE")
