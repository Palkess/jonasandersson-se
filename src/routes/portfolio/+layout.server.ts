import type { Project } from '$lib/types/project';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const projects: Project[] = [
        {
            slug: 'olandsstuguthyrning-com',
            title: 'Olandsstuguthyrning.com',
            descriptionTitle: 'Landningssida för uthyrning av stugor på Öland',
            description:
                'Helen och Lars hyr ut sina stugor året runt på Öland och behövde en egen sida för att visa upp sina stugor och kunna dirigera hyrgästerna till sin bokningspartner för att skicka en bokningsförfrågan. Samt kunna erbjuda sina hyrgäster lite nyttig information kring området, som fågelskådning.',
            image: '/images/olandsstuguthyrning.jpg',
            technologies: ['TypeScript', 'SvelteKit', 'Tailwind', 'MySQL', 'IIS'],
            status: 'private',
            url: 'https://olandsstuguthyrning.com',
            releaseDate: '2025-03-18',
            translations: {
                en: {
                    title: 'Olandsstuguthyrning.com',
                    descriptionTitle: 'Landing page for cottage rental on Öland',
                    description:
                        'Helen and Lars rent out their cottages all year round on Öland and needed their own page to showcase their cottages and be able to direct the tenants to their booking partner to send a booking request. And be able to offer their tenants some useful information about the area, such as bird watching.'
                }
            }
        }
    ];

    return {
        projects
    };
};
