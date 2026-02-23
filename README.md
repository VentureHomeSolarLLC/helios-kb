# Helios Customer Support Knowledge Base

Customer-facing knowledge base for Venture Home Solar, structured for AI-powered chat and search.

## Overview

This repository contains structured content for the Helios customer support system, including:
- 30 help articles across 6 categories
- Question aliases for semantic matching
- Content chunks optimized for RAG retrieval
- Cross-linking between related articles

## Structure

```
content/
└── articles.json          # All KB articles in structured format

scripts/
└── (import/export utilities)

.github/workflows/
└── validate.yml           # Content validation on PR
```

## Categories

1. **Finance Providers** (12 articles) — Sungage, Mosaic, Dividend, Service Finance, Credit Human, Flic, Participate, SunStrong, Palmetto LightReach, IGS, Enfin
2. **System Monitoring** (4 articles) — Enphase, SolarEdge, Tesla, SunPower
3. **Troubleshooting** (2 articles) — System errors, low production
4. **Customer Journey** (3 articles) — Pre-install, installation day, PTO
5. **Billing & Production** (4 articles) — Net metering, utility bills, RECs
6. **Warranty & Service** (5 articles) — Coverage, damage, repairs, contact

## Article Format

Each article includes:
- `id`, `slug`, `title`, `category_id`
- `tags[]` — searchable keywords
- `visibility` — customer/internal/both
- `question_aliases[]` — alternate phrasings for AI matching
- `content_chunks[]` — 500-1000 token segments
- `related_article_ids[]` — cross-reference links

## Usage

### Load into Database

```bash
node scripts/import-to-forge.js
```

### Generate Embeddings

```bash
node scripts/generate-embeddings.js
```

### Validate Content

```bash
npm run validate
```

## Contributing

1. Edit `content/articles.json`
2. Run validation: `npm run validate`
3. Submit PR with description of changes
4. GitHub Actions will validate JSON structure

## License

© 2026 Venture Home Solar, LLC. Internal use only.