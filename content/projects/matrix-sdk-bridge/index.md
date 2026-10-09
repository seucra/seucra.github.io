---
title: Matrix SDK Bridge
description: A Rust-to-WebAssembly bridge that exposes selected Matrix SDK functionality to JavaScript-facing applications.
date: 2026-08-06
lastmod: 2026-08-06
status: active
visibility: public
featured: true
priority: library
ownership: personal
github: https://github.com/seucra/matrix-sdk-bridge
tags: [rust, webassembly, matrix, library, backend]
draft: false
---

![Diagram showing JavaScript applications using a Rust WebAssembly bridge to access Matrix SDK.](/images/matrix-sdk-bridge-flow.svg)

# Overview

> [!TIP]
> **Library Links & References:**  
> • **GitHub Repository:** [github.com/seucra/matrix-sdk-bridge ↗](https://github.com/seucra/matrix-sdk-bridge)  
> • **npm Registry:** [@seucra/matrix-sdk-bridge on npmjs.com ↗](https://www.npmjs.com/package/@seucra/matrix-sdk-bridge)  
> • **Parent System:** [Vigilant (Secure Matrix Client)](/projects/vigilant/)  
> • **Related Journal Articles:**  
> &nbsp;&nbsp;– [Extracting Matrix SDK into a Rust WASM Library ↗](https://journal.seucra.tech/posts/extracting-matrix-sdk-into-a-rust-wasm-library/)  
> &nbsp;&nbsp;– [Publishing My First Rust npm Package ↗](https://journal.seucra.tech/posts/publishing-my-first-rust-npm-package/)

Matrix SDK Bridge is a Rust-to-WebAssembly library that provides a JavaScript-friendly interface around selected Matrix SDK functionality. It began as the integration layer for Vigilant and is being maintained as an independent library so the boundary between application code and Matrix integration remains clear.

The published package is [`@seucra/matrix-sdk-bridge`](https://www.npmjs.com/package/@seucra/matrix-sdk-bridge). Its API is still evolving and should not yet be treated as stable.

# Why extract a bridge?

Vigilant’s frontend needs browser-friendly access to Matrix functionality, while much of the client integration work is written in Rust. WebAssembly provides a deliberate boundary: JavaScript can use a focused interface while the Matrix SDK integration remains in Rust.

Extracting that layer also made the architecture more modular. The bridge can be documented, tested, and evolved independently rather than remaining hidden inside the product repository.

# Current scope

The bridge currently covers work around:

- authentication and sessions;
- rooms and messaging;
- direct-message room discovery and creation;
- timelines and message history;
- history loading/pagination; and
- notification and event surfaces.

It is primarily developed for Vigilant. External consumers should expect changes until the API, examples, and release process mature.

# Architecture

The library sits between a JavaScript/TypeScript-facing application and the Matrix SDK. It is not a replacement for Matrix, Synapse, or Matrix cryptography; it is an integration layer that exposes selected client functionality to the frontend.

# What I learned

This work made Rust’s async model, trait imports, lifetimes, WebAssembly packaging, and upstream SDK documentation practical rather than abstract. Timeline ordering and pagination in particular required making explicit API decisions instead of exposing an unclear wrapper.

# Next work

- Stabilize and document the public API.
- Add examples for browser consumers.
- Preserve release and test evidence.
- Continue integration with Vigilant while keeping the library reusable.

## Related

- [Vigilant](/projects/vigilant/)
- [Matrix Synapse infrastructure](/infrastructure/matrix-synapse/)
- [Rust learning record](/skills/rust/)
