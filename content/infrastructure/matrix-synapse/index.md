---
title: Matrix Synapse
description: Self-hosted Matrix homeserver powering the communication infrastructure behind Vigilant.

date: 2026-08-06
lastmod: 2026-08-06

service: Matrix Synapse

used_by:
  - Vigilant

tags:
  - infrastructure
  - matrix
  - synapse
  - docker
  - backend

draft: false
---

# Overview

Matrix Synapse is the core communication infrastructure behind Vigilant.

Rather than developing a custom messaging server, Vigilant builds on the Matrix protocol and Synapse homeserver implementation. This allows development effort to focus on application architecture, backend engineering and client functionality while relying on a mature, well-established communication platform.

---

# Why Matrix?

One of the biggest architectural decisions in Vigilant was deciding **not** to build another messaging protocol.

Modern secure messaging requires years of engineering, protocol design and security review. Instead of reinventing that foundation, the project adopts Matrix and builds upon it.

This decision dramatically reduced unnecessary complexity while improving interoperability and long-term maintainability.

---

# Responsibilities

Within the Vigilant ecosystem, Synapse is responsible for:

- User authentication
- Account management
- Room management
- Event storage
- Timeline synchronization
- Message federation support
- Media integration
- Client synchronization

The application layer focuses on providing a better client experience rather than replacing these responsibilities.

---

# Deployment Stack

![Matrix Synapse containerized deployment stack showing Nginx reverse proxy, Synapse engine, PostgreSQL, and MinIO.](/images/matrix-synapse-deployment.svg)

The current deployment consists of:

- Matrix Synapse
- PostgreSQL
- MinIO
- Docker
- Nginx

Each component has a dedicated responsibility, making the deployment modular and easier to maintain.

---

# Storage

Persistent data is separated according to responsibility.

## PostgreSQL

Stores:

- User information
- Rooms
- Events
- Sessions
- Metadata

## MinIO

Stores:

- Images
- Documents
- Uploaded media

Separating structured data from object storage keeps the deployment cleaner and allows each service to specialize in its intended purpose.

---

# Reverse Proxy

Nginx sits in front of Synapse and provides:

- Reverse proxying
- HTTPS termination
- Request routing
- Public endpoint exposure

This keeps the homeserver isolated while exposing only the required interfaces.

---

# Containerization

The complete infrastructure is managed using Docker.

Containerization provides:

- Reproducible deployments
- Simplified configuration
- Service isolation
- Easier maintenance
- Portable development environments

---

# Why Self-Hosting?

Running the infrastructure locally provides valuable experience beyond application development.

It requires understanding:

- Service orchestration
- Configuration management
- Networking
- Reverse proxies
- Storage
- Deployment workflows

These operational aspects are an important part of backend engineering and complement application development.

---

# Current Status

The infrastructure successfully supports backend development for Vigilant.

Authentication, messaging, room management and timeline functionality operate through the deployed Matrix stack while frontend integration continues alongside backend development.

---

# Future Work

Planned improvements include:

- Monitoring
- Automated deployment
- Health checks
- Backup strategy
- Logging improvements
- Metrics collection
- Federation testing
- Production deployment

---

# Related

Projects

- Vigilant

Skills

- Backend Engineering
- Docker
- Linux

Technologies

- Matrix
- Rust
- PostgreSQL
- MinIO
- Nginx
