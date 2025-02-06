import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/", // Đảm bảo base đúng
  optimizeDeps: {
    include: ["@babel/runtime/helpers/createSuper"],
  },
});
