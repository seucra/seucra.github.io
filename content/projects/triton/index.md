---
title: Triton
description: High-performance filesystem intelligence engine and project artifact classifier implemented in modular Rust workspace crates.

date: 2026-09-13
lastmod: 2026-09-13

status: active
visibility: private-development
featured: true
priority: systems

ownership: personal
collaboration: personal systems research

tags:
  - rust
  - systems-programming
  - concurrency
  - blake3
  - sqlite
  - performance

draft: false
---

# Overview

> [!NOTE]
> **Project Context & Architecture:**  
> • **Status:** Active local systems development (`product/Triton` Cargo workspace)  
> • **Language & Stack:** Rust (Edition 2021) · Rayon concurrency · Bundled SQLite · BLAKE3 · xxHash · Clap v4  
> • **Workspace Crates:** `triton-core` · `triton-engine` · `triton-cli`  
> • **Related Journal Article:** [Triton: Building a Deterministic Project Analyzer in Rust ↗](https://journal.seucra.tech/posts/triton-deterministic-project-analyzer-rust/)  
> • **Related Skills:** [Rust](/skills/rust/) · [Systems Programming](/skills/systems-programming/)


**Triton** is a systems-level filesystem intelligence engine built in Rust. It provides deterministic, marker-based detection of software project roots, establishes hierarchical ownership of filesystem entities via nearest-ancestor semantics, and classifies generated build artifacts (`target/`, `node_modules/`, `venv/`, `dist/`, `build/`) with verifiable evidence.

Designed around performance and correctness, Triton processes large filesystem trees using multi-threaded concurrent traversal, incremental scanning, content-addressed hashing (BLAKE3 and xxHash), and persistent SQLite indexing.

---

# Architecture & Workspace Layout

Triton is engineered as a decoupled Cargo workspace separating fundamental data structures, execution pipelines, and user interfaces:

```text
Triton/
├── crates/
│   ├── triton-core/     # Fundamental models, hash primitives, traits & errors
│   ├── triton-engine/   # Parallel scanner (Rayon), SQLite cache, marker inference
│   └── triton-cli/      # Command-line binary interface (Clap v4)
└── benches/             # Criterion benchmarks for scanner, identity, and duplicate passes
```

### Component Roles

1. **`triton-core`**:
   - Zero-overhead core abstractions.
   - Cryptographic (`BLAKE3`) and ultra-fast non-cryptographic (`xxHash64`) digest calculations.
   - Strongly-typed error hierarchies using `thiserror`.

2. **`triton-engine`**:
   - **Parallel Scanning**: Uses `rayon` and `ignore` for multi-threaded traversal respecting ignore rules.
   - **Marker Registry & Precedence**: Evaluates root manifests (`Cargo.toml`, `package.json`, `pyproject.toml`, `go.mod`, etc.) to classify project types and root boundaries deterministically.
   - **Incremental State Store**: Backed by bundled `rusqlite` to track version states and skip unchanged directories across runs.
   - **Benchmark Suite**: Criterion benchmarks covering full scans, incremental passes, query throughput, and similarity checks.

3. **`triton-cli`**:
   - High-speed CLI binary for invoking scans, querying project ownership, and exporting JSON reports.

---

# Key Engineering Decisions

* **Deterministic Marker Precedence**: Avoids ambiguous classification when projects contain multiple build descriptors. Precedence resolves top-level orchestration deterministically.
* **Content Hashing Hierarchy**: Light fast checks via metadata and `xxHash` precede heavy deep hashing with `BLAKE3`, optimizing I/O bandwidth during large disk traverses.
* **Zero-Global State**: All engine components maintain clean lifecycle state passed via structs, ensuring safety across Rayon threads.

---

# Specifications

* **Language**: Rust (Edition 2021)
* **Storage**: Bundled SQLite (`rusqlite`)
* **Concurrency**: `rayon` parallel pipelines
* **Hashing**: `blake3` & `xxhash-rust`
* **CLI**: `clap` v4 with derive macros
* **Benchmarking**: `criterion`
