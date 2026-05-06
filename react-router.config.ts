import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode: outputs static files to build/client/ for Netlify deployment
  ssr: false,
} satisfies Config;
