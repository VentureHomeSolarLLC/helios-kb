# Helios Customer Support Knowledge Base

Purpose-built knowledge base for AI-powered customer support at Venture Home Solar.

## Why This Structure?

Unlike traditional documentation platforms (GitBook, Confluence, etc.), this KB is **designed for AI retrieval and chat integration**:

- **Semantic chunking** — Content split into 500-1000 token segments for precise RAG retrieval
- **Question aliases** — Multiple ways customers ask the same question, mapped to articles
- **Visibility control** — Customer, internal, or both audiences with simple filtering
- **Structured metadata** — Tags, categories, related articles for intelligent routing
- **Embeddings-ready** — Optimized for OpenAI vector search and similarity matching

This approach delivers better answers in a chat interface than traditional full-page documentation.

## Repository Structure

```
helios-kb/
├── content/
│   └── articles.json      # Canonical source (30 articles, 6 categories)
├── scripts/
│   └── filter.js          # Audience filtering utility
└── README.md
```

## Content Format

Each article includes:

```json
{
  "id": "unique-slug",
  "title": "Article Title",
  "category_id": "finance-providers",
  "visibility": "customer",           // "customer" | "internal" | "both"
  "tags": ["billing", "sungage", "refinance"],
  "question_aliases": [               // How customers actually ask
    "Why is my bill high?",
    "How do I contact my lender?",
    "Can I transfer my loan?"
  ],
  "content_chunks": [                 // Semantic chunks for RAG
    {"chunk_index": 0, "content": "...", "tokens": 89}
  ],
  "related_article_ids": ["related-1", "related-2"],
  "is_published": true,
  "created_at": "2026-02-23T00:00:00Z",
  "updated_at": "2026-02-23T00:00:00Z"
}
```

## Visibility Levels

| Level | Use Case | Example |
|-------|----------|---------|
| `customer` | Customer-facing only | Finance provider contacts, troubleshooting |
| `internal` | Agent/employee only | Internal escalation procedures |
| `both` | Shared content | Basic system info, warranty coverage |

## Usage

### Filter for Chat Widget (Customers)

```bash
node scripts/filter.js customer
```

Returns articles where `visibility === 'customer' || visibility === 'both'`

### Filter for Agent Portal

```bash
node scripts/filter.js internal
```

Returns articles where `visibility === 'internal' || visibility === 'both'`

### Programmatic Access

```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('content/articles.json', 'utf8'));

// Chat widget articles
const chatArticles = data.articles.filter(
  a => a.visibility === 'customer' || a.visibility === 'both'
);

// Generate embeddings for vector search
const chunks = chatArticles.flatMap(a => 
  a.content_chunks.map(c => ({
    article_id: a.id,
    chunk_index: c.chunk_index,
    content: c.content
  }))
);
```

## Content Categories

1. **Finance Providers** (12 articles)
   - Sungage, Mosaic, Dividend, Service Finance
   - Credit Human, Flic, Participate Energy
   - SunStrong, Palmetto LightReach, IGS, Enfin

2. **System Monitoring** (4 articles)
   - Enphase App guide
   - SolarEdge mySolarEdge
   - Tesla App + Powerwall
   - SunPower monitoring

3. **Troubleshooting** (2 articles)
   - System errors and connectivity
   - Low production diagnosis

4. **Customer Journey** (3 articles)
   - Pre-install process
   - Installation day expectations
   - Permission to Operate (PTO) explained

5. **Billing & Production** (4 articles)
   - Net metering explained
   - Seasonal bill variations
   - REC registration
   - Missing credits troubleshooting

6. **Warranty & Service** (5 articles)
   - What's covered
   - Storm damage procedures
   - Equipment failure process
   - Contact information

## Contributing

1. Edit `content/articles.json`
2. Validate JSON structure: `node scripts/validate.js` (if available)
3. Test with filter script: `node scripts/filter.js customer`
4. Submit PR with description of changes

### Content Guidelines

- **Chunks**: Keep under 1000 tokens for optimal retrieval
- **Aliases**: Include 3-5 question variations customers actually use
- **Tags**: Use consistent terminology (check existing articles)
- **Related**: Link to 2-4 logically connected articles

## Integration

This KB feeds into the Helios chat widget via:

1. **Vector search** — Article chunks embedded and stored in vector DB
2. **RAG pipeline** — Customer question → semantic search → relevant chunks → GPT-4 response
3. **Source attribution** — Responses include links to full articles

See the main Forge repo for chat widget implementation.

## License

© 2026 Venture Home Solar, LLC. Internal use only.