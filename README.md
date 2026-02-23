# Helios Customer Support Knowledge Base

Structured knowledge base for Venture Home Solar's customer-facing support system.

## Structure

```
content/
└── articles.json          # All KB articles (canonical source)

scripts/
└── filter.js              # Filter articles by visibility

README.md
```

## Content Format

Articles are stored in JSON with the following structure:

```json
{
  "id": "article-slug",
  "title": "Article Title",
  "category_id": "category-name",
  "visibility": "customer",     // "customer" | "internal" | "both"
  "tags": ["tag1", "tag2"],
  "question_aliases": ["How do I...?", "What if...?"],
  "content_chunks": [
    {"chunk_index": 0, "content": "...", "tokens": 100}
  ],
  "related_article_ids": ["related-1", "related-2"],
  "is_published": true
}
```

## Visibility

- **`customer`** — Customer-facing only (shown in chat widget)
- **`internal`** — Agent/employee only (shown in agent portal)
- **`both`** — Available to both audiences

## Usage

### Load Customer-Facing Articles

```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('content/articles.json', 'utf8'));

// Filter for chat widget (customers)
const customerArticles = data.articles.filter(
  a => a.visibility === 'customer' || a.visibility === 'both'
);
```

### Using the Filter Script

```bash
node scripts/filter.js customer    # Output customer-facing articles
node scripts/filter.js internal    # Output internal articles
node scripts/filter.js both        # Output articles visible to both
```

## Categories

1. **Finance Providers** — Sungage, Mosaic, Dividend, SunStrong, Palmetto, etc.
2. **System Monitoring** — Enphase, SolarEdge, Tesla, SunPower guides
3. **Troubleshooting** — Errors, connectivity, production issues
4. **Customer Journey** — Pre-install, installation, PTO
5. **Billing & Production** — Net metering, utility bills, savings
6. **Warranty & Service** — Coverage, damage, repairs

## Contributing

1. Edit `content/articles.json`
2. Validate JSON structure
3. Submit PR with description of changes

## License

© 2026 Venture Home Solar, LLC. Internal use only.