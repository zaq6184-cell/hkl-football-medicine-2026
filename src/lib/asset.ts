/** Prefix public files with Vite `base` so GitHub Pages (`/repo/…`) and `/` both work. */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL || "/"
  const clean = path.replace(/^\//, "")
  return `${base}${clean}`
}
