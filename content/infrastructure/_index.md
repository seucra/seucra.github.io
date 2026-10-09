---
title: Infrastructure & Subdomains
description: Serverless edge workers, object storage, Matrix Synapse, and subdomain architecture powering the Seucra ecosystem.
---

# Infrastructure Architecture

This section documents the live server topology, edge routing, storage tiers, and self-hosted services operated under `seucra.tech`.

The infrastructure is designed around a hybrid model: global edge delivery (Cloudflare Workers & R2, GitHub Pages) coupled with dedicated self-hosted backend services and cloud APIs.

---

## Subdomain Routing Map

| Domain / Subdomain | Target / Platform | Architectural Purpose | Status |
| :--- | :--- | :--- | :--- |
| **`seucra.tech`** | GitHub Pages (Hugo) | Central engineering web, flagship documentation, and verified evidence | Active |
| **`journal.seucra.tech`** | GitHub Pages (Jekyll) | Chronological development journal, research writeups, and technical logs | Active |
| **`bot.seucra.tech`** | Cloudflare Workers | Edge webhook listener and automation bot gateway with Cloudflare WAF protection | Active |
| **`cdn.seucra.tech`** | Cloudflare R2 | Global asset delivery, build distribution, and artifact hosting | Active |
| **`api.seucra.tech`** | Cloudflare Workers + D1 | Edge API gateway with relational SQLite persistence at the edge | Active |
| **`sih-render.seucra.tech`** | Render Cloud Container | Live REST inference service for the CyberShield cash-out forecasting model | Active |

---

## Service Specifications

### 1. Edge Webhooks & Automation (`bot.seucra.tech`)
- **Engine**: Cloudflare Workers (`seucra-bots`)
- **Runtime**: V8 Edge isolate with D1 database and R2 storage bindings
- **Security**: Bound custom subdomain with Cloudflare WAF restrictions limiting webhook requests to verified Telegram IP ranges.

### 2. High-Performance Object Delivery (`cdn.seucra.tech`)
- **Engine**: Cloudflare R2 Object Storage
- **Capability**: S3-compatible zero-egress fee storage with global CDN caching for fast artifact and image distribution.

### 3. Communication Backbone (Matrix Synapse)
- **Engine**: Self-hosted Matrix Synapse instance with PostgreSQL
- **Usage**: Serves as the federated protocol backbone for [Vigilant](/projects/vigilant/) and [@seucra/matrix-sdk-bridge](/projects/matrix-sdk-bridge/).
- → [View Detailed Synapse Specification](/infrastructure/matrix-synapse/)
