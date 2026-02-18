# Helios Knowledge Base

This repository contains the source content for the Venture Home Helios Knowledge Base, which will be available publicly at `help.venturehome.com` and internally through Forge.

## Content Organization

To ensure a clear separation between public and private information, all content is organized into two top-level directories:

### `/public`

All articles and assets in this directory are considered public and will be published to the customer-facing website. **Do not place any sensitive or internal-only information here.**

### `/internal`

This directory is for documentation intended for Venture Home employees only. The content here will be accessible via a secure, authenticated session in Forge and **will not** be published on the public website.

## Article Format

All articles are to be written in Markdown (`.md`). Each article must begin with a YAML frontmatter block for metadata.

**Example:**
```yaml
---
title: "Troubleshooting the Tesla Powerwall 3"
product: "Tesla Powerwall 3"
category: "Troubleshooting"
tags: ["inverter", "powerwall", "error codes"]
last_updated: "2026-02-18"
---

## Issue: The Powerwall is not charging

First, check the...
```

## Contribution Workflow

1.  Create a new branch for your changes.
2.  Add your new or updated articles to the appropriate directory (`/public` or `/internal`).
3.  Submit a pull request for review.

For team members without GitHub access (like Taylor), please email your Markdown files to Rex, who will commit them on your behalf.
