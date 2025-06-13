const nunjucks = require('nunjucks');
const fs = require('fs');
const products = require('./data/products.json');

nunjucks.configure('templates', { autoescape: true });

const html = nunjucks.render('index.njk', { products });
fs.writeFileSync('index.html', html);
console.log('✅ Fichier index.html généré !');
