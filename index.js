const nunjucks = require('nunjucks');
const fs = require('fs');
const jobs = require('./data/products.json');

// Configure Nunjucks
nunjucks.configure('templates', { autoescape: true });

// Rendu du template
const result = nunjucks.render('index.njk', { jobs });

// Écriture dans un fichier
fs.writeFileSync('index.html', result);
console.log('Fichier index.html généré');
