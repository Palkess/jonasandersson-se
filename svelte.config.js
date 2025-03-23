import IISAdapter from 'sveltekit-adapter-iis';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: IISAdapter({
            origin: 'https://jonasandersson.se',
            iisNodeOptions: {
                nodeProcessCommandLine: 'C:/Program Files/nodejs/20.11.0/node.exe'
            },
            redirectToHttps: true
        })
    }
};

export default config;
