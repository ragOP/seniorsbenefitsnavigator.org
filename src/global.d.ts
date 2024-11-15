// src/global.d.ts
export {}; // This ensures the file is treated as a module.

declare global {
  interface Window {
    _rgba_tags: { ab: string }[];
  }
}
