import type { NextConfig } from 'next';
import { validateEnvironment } from '@/lib/env';

validateEnvironment();

const nextConfig: NextConfig = {};

export default nextConfig;
