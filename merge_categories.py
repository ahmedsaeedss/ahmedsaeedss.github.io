import sys

with open('data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Extract duplicates
# NOTE: array lines are 0-indexed, so line 2793 is index 2792
current_affairs_new = lines[2792:2842]  # lines 2793 to 2842
world_history_new = lines[2848:2898]    # lines 2849 to 2898

# Original insert points
# Current affairs original ends where World History starts.
# World history original ends where Famous Personalities starts.
insert_ca_idx = 2566  # line 2567 is "            }," after "Current Affairs"
insert_wh_idx = 2652  # line 2653 is "            }," after "World History"

# We must add them from bottom to top so indices don't shift!
new_lines = lines[:insert_wh_idx] + world_history_new + lines[insert_wh_idx:2787] # 2787 is index 2786, removing duplicate blocks
new_lines = new_lines[:insert_ca_idx] + current_affairs_new + new_lines[insert_ca_idx:]

# The remainder of the file after removing duplicates is from 2901 to end
new_lines = new_lines + lines[2900:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Merged successfully!")
