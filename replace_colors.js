const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { search: /#FFC837/g, replace: '#38BDF8' },
  { search: /#ffc837/g, replace: '#38bdf8' },
  { search: /#FFD74B/g, replace: '#7DD3FC' },
  { search: /#ffd74b/g, replace: '#7dd3fc' },
  { search: /#ffd54f/g, replace: '#7dd3fc' },
  { search: /#E5B531/g, replace: '#0EA5E9' },
  { search: /#e5b531/g, replace: '#0ea5e9' },
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      replacements.forEach(rep => {
        if (content.match(rep.search)) {
          content = content.replace(rep.search, rep.replace);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in: ${fullPath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log("Color replacement complete.");
