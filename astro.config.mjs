// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	output: 'server',

	adapter: node({
		mode: 'standalone',
  }),
  
	server: {
		host: true,
		port: process.env.PORT ? Number(process.env.PORT) : 4321,
	},
});