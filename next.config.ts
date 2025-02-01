import type { NextConfig } from 'next';

import { validateEnv } from '@/lib/env';

validateEnv();

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
