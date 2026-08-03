import { Project } from "@/types/Project";

const vigilant: Project = {
  slug: "vigilant",

  title: "Vigilant",

  tagline: "Secure messaging built on Matrix.",

  summary:
    "A Matrix-based secure messaging platform with a Rust → WASM backend bridge.",

  status: "active",

  category: "product",

  role: "Backend Engineering",

  technologies: [
    "Rust",
    "Matrix",
    "WASM",
    "Docker"
  ],

  repository:
    "https://github.com/seucra/Vigilant",

  started: "Semester 1",

  updated: "Semester 5"
};

export default vigilant;
