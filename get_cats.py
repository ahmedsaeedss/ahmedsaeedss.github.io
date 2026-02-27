import json, re
data = open('data.js', encoding='utf-8').read()
categories = re.findall(r'category:\s*["\']([^"\']+)["\']', data)
print(categories)
