import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


export default defineConfig({
  plugins: [react()],
  base: "/omega-care-coimbatore/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});