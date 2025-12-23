import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base =
  process.env.NODE_ENV === "production"
    ? "/Yuliya-React-Portfolio/"
    : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
