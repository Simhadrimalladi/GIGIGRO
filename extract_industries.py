import re

with open("/Users/hemakomarina/.gemini/antigravity-ide/brain/3b8a5a47-e2f6-4187-bb58-276880c2937a/.system_generated/steps/414/content.md", "r") as f:
    content = f.read()

start_idx = content.find("<div class='bm-industry-grid'>")
end_idx = content.find("</div></div>", start_idx)
grid_content = content[start_idx:]

items = []
pattern = re.compile(r"<a class='bm-industry-grid-item'[^>]*>\s*<div class='bm-industry-grid-item'>(.*?)\s*<h3>.*?</span>([^<]+)<span.*?</h3>\s*</div>\s*</a>", re.DOTALL)
for match in pattern.finditer(grid_content):
    icon_content = match.group(1).strip()
    title = match.group(2).strip().replace("&amp;", "&")
    
    icon_content = icon_content.replace('`', '\\`').replace('${', '\\${')
    
    items.append(f"""
  {{
    name: "{title}",
    icon: `{icon_content}`
  }}""")

if not items:
    print("No items found.")
else:
    output = "export const INDUSTRIES_DATA = [\n" + ",\n".join(items) + "\n];\n"
    with open("src/lib/industries.ts", "w") as f:
        f.write(output)
    print(f"Successfully extracted {len(items)} industries.")
