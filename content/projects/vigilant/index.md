---
title: Vigilant
description: Secure communication platform built on the Matrix ecosystem.

date: 2026-07-20
lastmod: 2026-08-04

status: active
visibility: public
featured: true
priority: flagship

ownership: personal
collaboration: frontend/backend collaboration

github:
website:
demo:
paper:

tags:
  - rust
  - matrix
  - cybersecurity
  - webassembly
  - backend
  - distributed-systems

draft: false
---

# Overview

Vigilant is my flagship engineering project.

It explores how a modern secure communication platform can be built by combining Rust, WebAssembly and the Matrix ecosystem instead of attempting to reinvent mature messaging infrastructure.

The project serves as the primary platform through which I study backend engineering, distributed systems, secure communication, infrastructure and modern software architecture.

---

# Motivation

The original idea began as an attempt to build a secure messaging application from the ground up.

As the project matured, I realized that rebuilding established protocols and cryptographic infrastructure would provide little engineering value compared to understanding and integrating existing open standards.

That realization shifted the project toward Matrix, allowing development effort to focus on client architecture, backend engineering and infrastructure rather than protocol reinvention.

---

# Objectives

- Learn backend engineering through a long-term product.
- Build practical experience with Rust.
- Explore distributed communication systems.
- Understand Matrix architecture.
- Design maintainable software rather than one-off prototypes.
- Create a realistic foundation for future expansion.

---

# Architecture

Current architecture consists of:

```text
Frontend
        │
        ▼
Rust → WebAssembly Bridge
        │
        ▼
matrix-sdk
matrix-sdk-ui
        │
        ▼
Matrix Synapse
        │
        ▼
PostgreSQL
```

Supporting infrastructure includes Docker, MinIO and Nginx for deployment and storage.

---

# Backend

Backend development is the primary focus of the project.

Implemented functionality includes:

- User registration
- Authentication
- Session persistence
- Room management
- Direct messaging
- Timeline loading
- Chat history
- Notification events
- Matrix integration

The backend is written in Rust and exposes a WebAssembly interface suitable for frontend applications.

---

# Matrix SDK Bridge

One major outcome of Vigilant is the extraction of a reusable Rust → WebAssembly bridge around Matrix SDK.

Originally developed specifically for Vigilant, the bridge is now intended to become an independent library that can be reused by other Matrix-based applications.

Long-term plans include API documentation, examples, releases and a stable public interface.

---

# Infrastructure

The project currently relies on a self-hosted Matrix stack consisting of:

- Matrix Synapse
- PostgreSQL
- MinIO
- Nginx
- Docker

Using established infrastructure allows development effort to focus on engineering problems specific to the application rather than rebuilding existing systems.

---

# Technologies

- Rust
- WebAssembly
- Matrix SDK
- matrix-sdk-ui
- Matrix Synapse
- Docker
- PostgreSQL
- MinIO
- Nginx
- Git
- Linux

---

# What I Learned

Working on Vigilant has significantly changed how I approach software engineering.

Major lessons include:

- Build on existing standards when appropriate.
- Long-term architecture matters more than early features.
- Documentation should evolve alongside implementation.
- Backend systems require deliberate design rather than incremental patches.
- Reading upstream source code is often necessary when documentation is insufficient.

---

# Current Status

Backend Cycle 1 has been completed.

The Rust bridge successfully compiles to WebAssembly and has been published as an npm package.

Current work focuses on frontend integration, continued backend improvements and documentation.

---

# Future Work

- Continue frontend integration.
- Expand project documentation.
- Improve deployment workflow.
- Extract reusable components.
- Publish stable releases.
- Complete repository split for the Matrix SDK bridge.

---

# Related

- Research → Vulnerability Prioritization
- Infrastructure → Matrix Synapse
- Skill → Rust
- Skill → Backend Engineering
- Skill → Cybersecurity
