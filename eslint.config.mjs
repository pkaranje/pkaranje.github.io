import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
  { ignores: ["node_modules/**", "dist/**", ".astro/**", ".wrangler/**"] },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
];
