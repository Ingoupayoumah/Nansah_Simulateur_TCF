import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // firebase-admin embarque des dépendances natives (gRPC) qui cassent si
  // Next.js essaie de les regrouper dans la fonction serverless — on les
  // laisse en modules externes, chargés normalement via node_modules.
  serverExternalPackages: ["firebase-admin"],
};

export default nextConfig;
