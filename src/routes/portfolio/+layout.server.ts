import { languageTag } from '$lib/paraglide/runtime';
import type { Project } from '$lib/types/project';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const projects: Project[] = [
        {
            slug: 'olandsstuguthyrning-com',
            title: 'Olandsstuguthyrning.com',
            description: languageTag() === 'sv' ? 'Project 1 description' : 'Project 1 description',
            image: '/images/olandsstuguthyrning.jpg',
            technologies: ['TypeScript', 'SvelteKit', 'Tailwind', 'MySQL', 'IIS'],
            status: 'private',
            url: 'https://olandsstuguthyrning.com',
            releaseDate: new Date()
        }
    ];

    return {
        projects
    };
};
