const nunjucks = require('nunjucks');
const fs = require('fs');

const articles = [
  { title: 'Introduction à Nunjucks', date: '2025-06-01' },
  { title: 'Templates dynamiques', date: '2025-06-05' },
  { title: 'Syntaxe de base', date: '2025-06-10' },
];

// Configure Nunjucks
nunjucks.configure('templates', { autoescape: true });

// Rendu
const result = nunjucks.render('index.njk', { articles });

// Écriture dans un fichier
fs.writeFileSync('output.html', result);
console.log('Fichier output.html généré');
