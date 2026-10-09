---
title: Projects & Experiments
description: Practical projects, experiments, and software tools built by Shams Tabrez Ahmed to understand systems from first principles.

cascade:
  showReadingTime: false
---

# Projects & Experiments

This catalog gathers the software projects I've worked on across backend systems, Rust, WebAssembly, and cybersecurity.

Rather than just assembling features for resume bullet points, I use these projects to explore real engineering trade-offs: dealing with distributed protocols, structuring clean boundaries, and understanding how memory, networks, and operating systems behave underneath.

---

### Systems & Projects Directory

#### 1. [Vigilant (Secure Matrix Client)](/projects/vigilant/)
An ongoing project exploring secure communication using the Matrix ecosystem, Rust, WebAssembly, and a self-hosted Synapse homeserver.
* **Code:** [github.com/seucra/Vigilant ↗](https://github.com/seucra/Vigilant)
* **Journal Notes:** [Building Vigilant — Cycle 1 Complete ↗](https://journal.seucra.tech/posts/building-vigilant-cycle-1-complete/) · [Architecture Behind Vigilant ↗](https://journal.seucra.tech/posts/architecture-behind-vigilant/)
* **Infrastructure:** [Matrix Synapse Specification](/infrastructure/matrix-synapse/)

#### 2. [Matrix SDK Bridge](/projects/matrix-sdk-bridge/)
A modular Rust-to-WebAssembly integration layer extracted from Vigilant to expose Matrix client capabilities to JavaScript and the browser.
* **Code:** [github.com/seucra/matrix-sdk-bridge ↗](https://github.com/seucra/matrix-sdk-bridge)
* **npm Package:** [@seucra/matrix-sdk-bridge on npm ↗](https://www.npmjs.com/package/@seucra/matrix-sdk-bridge)
* **Journal Notes:** [Publishing My First Rust npm Package ↗](https://journal.seucra.tech/posts/publishing-my-first-rust-npm-package/)

#### 3. [Triton Filesystem Intelligence](/projects/triton/)
A multi-crate Rust CLI utility experimenting with multi-threaded directory walks (Rayon), project root detection, and caching build artifacts with SQLite and BLAKE3.
* **Workspace:** `triton-core` · `triton-engine` · `triton-cli`
* **Related Skills:** [Rust](/skills/rust/) · [Systems Programming](/skills/systems-programming/)

#### 4. [CyberShield (SIH26184)](/projects/sih2026/)
Our team’s submission for Smart India Hackathon 2026 (Problem Statement SIH26184), designing a pipeline to forecast cash-out destinations and apply partial account liens in cyber fraud cases.
* **Code:** [github.com/harshada2576/SIH2026 ↗](https://github.com/harshada2576/SIH2026)
* **Journal Notes:** [The Architecture of Interception (SIH26184) ↗](https://journal.seucra.tech/posts/the-architecture-of-interception-sih26184/)
* **Live API Demo:** [sih-render.seucra.tech ↗](https://sih-render.seucra.tech/)

#### 5. [CipherLink](/projects/cipherlink/)
An earlier personal attempt to build a secure messaging platform from scratch. It taught me how difficult protocol engineering is and prompted the pivot to the open Matrix standard.
* **Successor Project:** [Vigilant](/projects/vigilant/)
