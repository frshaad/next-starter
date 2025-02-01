import type { NextConfig } from 'next';

import { validateEnv } from '@/lib/env';

validateEnv();

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
