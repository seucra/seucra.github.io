---
title: "Vigilant"
description: "A secure messaging platform built on the Matrix ecosystem."
date: 2026-07-20

draft: false

tags:
  - flagship
  - rust
  - matrix
  - cybersecurity
  - webassembly

categories:
  - Product

summary: >
  Vigilant is a secure messaging platform that explores modern communication
  infrastructure through Matrix, Rust, and WebAssembly.

heroStyle: basic
---

Vigilant is my flagship engineering project.

It began as an attempt to build a secure messaging application from scratch.
As my understanding of distributed systems and secure messaging improved, the
project evolved toward using the Matrix ecosystem instead of reinventing
complex communication infrastructure. The current implementation focuses on
building reliable client-side capabilities while leveraging established Matrix
protocols and services rather than attempting to replace them. :contentReference[oaicite:0]{index=0}

## Overview

The project explores how a modern messaging platform can be built using
existing open protocols together with Rust-based backend components.

Current work primarily focuses on:

- authentication
- session management
- rooms
- messaging
- timelines
- direct messaging
- notifications
- Matrix integration

Rather than implementing custom cryptographic protocols, Vigilant builds on
the Matrix ecosystem and its existing capabilities. :contentReference[oaicite:1]{index=1}

## Architecture

```
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
```

The frontend communicates with a Rust bridge compiled to WebAssembly, which
provides a JavaScript-friendly interface over the Matrix SDK. The bridge
handles authentication, messaging, rooms, timelines, and session management,
while Matrix Synapse provides the homeserver infrastructure. :contentReference[oaicite:2]{index=2}

## Current Status

Backend Cycle 1 is complete.

Implemented functionality includes:

- User registration
- Login and logout
- Session handling
- Room management
- Messaging
- Chat history
- Direct messaging
- Timeline pagination
- Notification events

The Rust bridge has also been compiled to WebAssembly and packaged for frontend
consumption as an npm package. :contentReference[oaicite:3]{index=3}

## Technologies

- Rust
- WebAssembly
- Matrix SDK
- matrix-sdk-ui
- Synapse
- Docker
- PostgreSQL
- MinIO
- Nginx

:contentReference[oaicite:4]{index=4}

## Project Goals

The long-term objective is not simply to create another messaging application,
but to better understand distributed systems, modern backend architecture,
protocol-driven software, and secure communication infrastructure.

Vigilant serves as the primary engineering project through which I continue to
learn backend development, Rust, Linux, networking, and systems programming.
:contentReference[oaicite:5]{index=5}

## Current Scope

Current development is focused on the backend while frontend work continues in
parallel with another collaborator. The project is active and continues to
evolve incrementally. :contentReference[oaicite:6]{index=6}

## Related Projects

- matrix-sdk-bridge
- Matrix Synapse infrastructure
- seucra.tech

## Repository

Development is ongoing and additional documentation, releases, and repository
restructuring are planned as the project matures. :contentReference[oaicite:7]{index=7}
