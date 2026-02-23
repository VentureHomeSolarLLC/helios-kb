const fs = require('fs');
const path = require('path');

// Get visibility filter from command line
const visibility = process.argv[2];

if (!visibility || !['customer', 'internal', 'both'].includes(visibility)) {
  console.error('Usage: node filter.js <customer|internal|both>');
  process.exit(1);
}

// Load articles
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/articles.json'), 'utf8'));

// Filter based on visibility
let filtered;
if (visibility === 'customer') {
  // Chat widget: show customer and both
  filtered = data.articles.filter(a => a.visibility === 'customer' || a.visibility === 'both');
} else if (visibility === 'internal') {
  // Agent portal: show internal and both
  filtered = data.articles.filter(a => a.visibility === 'internal' || a.visibility === 'both');
} else {
  // Both: show only articles marked as both
  filtered = data.articles.filter(a => a.visibility === 'both');
}

// Output as JSON
const output = {
  metadata: data.metadata,
  categories: data.categories,
  articles: filtered,
  count: filtered.length
};

console.log(JSON.stringify(output, null, 2));

// Summary
console.error(`\nFiltered ${filtered.length} of ${data.articles.length} articles`);
console.error(`Visibility: ${visibility}`);