import json
import sys

def add_questions(category_index, json_file):
    # Read the existing data.js
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # The file starts with 'const quizData = ' and ends with ';'
    # Let's extract the JSON part
    prefix = 'const quizData = '
    start_idx = content.find(prefix) + len(prefix)
    end_idx = content.rfind(';')
    
    json_str = content[start_idx:end_idx].strip()
    
    try:
        data = json.loads(json_str)
    except Exception as e:
        print("Error parsing data.js JSON:", e)
        return

    # Read the new questions
    with open(json_file, 'r', encoding='utf-8') as f:
        new_questions = json.load(f)

    # Append questions to the specified category
    data[category_index]['questions'].extend(new_questions)

    # Write back to data.js
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('const quizData = [\n')
        # We'll format it nicely
        for i, cat in enumerate(data):
            f.write('    {\n')
            f.write(f'        "category": "{cat["category"]}",\n')
            f.write(f'        "icon": "{cat["icon"]}",\n')
            f.write('        "questions": [\n')
            
            for j, q in enumerate(cat['questions']):
                f.write('            {\n')
                f.write(f'                "q": {json.dumps(q["q"])},\n')
                f.write(f'                "options": {json.dumps(q["options"])},\n')
                f.write(f'                "answer": {q["answer"]},\n')
                f.write(f'                "explanation": {json.dumps(q["explanation"])}\n')
                if j < len(cat['questions']) - 1:
                    f.write('            },\n')
                else:
                    f.write('            }\n')
            f.write('        ]\n')
            if i < len(data) - 1:
                f.write('    },\n')
            else:
                f.write('    }\n')
        f.write('];\n')

    print(f"Successfully added {len(new_questions)} questions to category {data[category_index]['category']}. Total is now {len(data[category_index]['questions'])}.")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python update_data.py <cat_index> <json_file>")
        sys.exit(1)
    
    cat_idx = int(sys.argv[1])
    j_file = sys.argv[2]
    add_questions(cat_idx, j_file)
