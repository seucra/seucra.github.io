---
title: "Matrix Synapse"

description: "Self-hosted Matrix homeserver used by Vigilant."

date: 2026-07-18

service: Matrix Synapse

used_by:
  - Vigilant

tags:
  - infrastructure
  - matrix
  - docker

draft: false
---

# Purpose

Matrix Synapse provides the communication backbone for Vigilant.

Rather than implementing a custom messaging server, Vigilant builds on the Matrix ecosystem and focuses engineering effort on client functionality and infrastructure.

# Stack

- Matrix Synapse
- PostgreSQL
- Docker
- MinIO
- Nginx

# Responsibilities

- Deployment
- Configuration
- Storage
- Reverse proxy
- Maintenance

# Future Work

- Federation
- Monitoring
- Automated deployment
