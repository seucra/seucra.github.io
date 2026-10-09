---
title: CyberShield (SIH 2026)
description: Predictive analytics framework for financial cyber fraud interception and terminal cash-out forecasting (Problem Statement SIH26184).

date: 2026-10-03
lastmod: 2026-10-03

status: active
visibility: public
featured: true
priority: flagship

ownership: team
collaboration: team lead / backend architecture

github: https://github.com/harshada2576/SIH2026
website: https://harshada2576.github.io/SIH2026/
demo: https://sih-render.seucra.tech/

tags:
  - cybersecurity
  - distributed-systems
  - backend
  - architecture
  - machine-learning
  - python

aliases:
  - /projects/cybershield/

draft: false
---

# Overview

CyberShield was built for **Smart India Hackathon 2026** (Problem Statement ID: **26184**), sponsored by the **Ministry of Home Affairs (MHA)** and the **Indian Cyber Crime Coordination Centre (I4C)** under the CIS Division.

The objective: close India's critical 15-minute window in financial cyber fraud. When fraudsters execute unauthorized UPI, IMPS, or AEPS debits, stolen funds are rapidly layered across multiple intermediate mule accounts and withdrawn as physical paper cash at ATMs or AEPS micro-terminals within 15–30 minutes—hours before victims report to the 1930 helpline or the National Cybercrime Reporting Portal (NCRP).

CyberShield is a predictive analytics framework that forecasts cash-out terminal destinations in real time, places surgical differential liens on contaminated funds, and generates tamper-evident cryptographic audit certificates admissible under **Section 63 of the Bharatiya Sakshya Adhiniyam (BSA) 2023**.

---

# Architecture & Engineering

The platform was built around three non-negotiable engineering requirements:

1. **Pre-Egress Terminal Forecasting**: Rather than waiting for victim complaints, the backend intercepts transaction telemetry streams, traces mule fan-out trees across multiple banking tiers, and predicts the high-probability candidate ATMs / micro-ATMs before runners physically dispense cash.
2. **Differential Holds (Anti-Paralysis)**: Traditional blanket bank account freezes (Section 102 CrPC / BNSS) paralyze innocent businesses and individuals whose accounts received tainted funds. CyberShield calculates and applies liens strictly on the contaminated delta, protecting clean balances from being locked.
3. **Statutory Cryptographic Admissibility**: Every transaction hop, algorithmic risk score, and officer triage action is hashed into an Ed25519-signed Sparse Merkle Tree (SMT), producing tamper-evident audit dossiers adhering to statutory evidentiary standards.

---

# Technology Stack

- **Backend & Analytics**: Python 3.10+, FastAPI, SQLite / PostgreSQL, NetworkX, NumPy, Pandas
- **Mobile Client**: Kotlin, Android SDK (API 29–34), Jetpack Compose
- **Cryptographic Verification**: Ed25519 digital signatures, Sparse Merkle Tree (SMT), SHA-256 DAGs
- **Infrastructure & Scale**: Cloud deployment on Render (`sih-render.seucra.tech`), synthetic data generator scaling beyond 1 Crore (>10M) transactions with 177 automated tests.

---

# What I Learned

Serving as team lead and primary backend engineer reinforced key engineering principles:
- **Mechanical Reality Over Hackathon Theater**: Hackathon prototypes often crumble under edge cases. Building a system that processes live streams, enforces rate limits, handles pagination, and executes graph queries in under 200ms required disciplined systems design.
- **Payload Hygiene**: Optimizing spatial terminal queries by clipping markers to bounding boxes dropped API payloads from 13.5 MB down to 115 KB, preventing client crashes.
- **Legal & Systems Intersections**: Systems engineering in security cannot exist in a vacuum; understanding legal mandates (BSA 2023, BNSS) directly shaped the cryptographic architecture.

---

# Links & Documentation

- **In-Depth Journal Article:** [The Architecture of Interception: Solving India's 15-Minute Financial Cybercrime Gap (SIH26184)](https://journal.seucra.tech/posts/the-architecture-of-interception-sih26184/)
- **GitHub Repository:** [harshada2576/SIH2026](https://github.com/harshada2576/SIH2026)
- **Interactive Evaluation Portal:** [harshada2576.github.io/SIH2026](https://harshada2576.github.io/SIH2026/)
- **Live Cloud API:** [sih-render.seucra.tech](https://sih-render.seucra.tech/)
- **Release APK:** [CyberShield v1.0.0 APK](https://github.com/harshada2576/SIH2026/releases/download/v0.0.1/CyberShield-v1.0.0-release.apk)

---

# Related

- [Vigilant](/projects/vigilant/)
- [Vulnerability Prioritization](/research/vulnerability-prioritization/)
- [Skill → Cybersecurity](/skills/cybersecurity/)
- [Skill → Backend Engineering](/skills/backend/)
- [Skill → Systems Programming](/skills/systems-programming/)
