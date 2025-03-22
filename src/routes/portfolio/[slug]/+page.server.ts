import type { Project } from '$lib/types/project';
import type { PageServerLoad } from './$types';
import { languageTag } from '$lib/paraglide/runtime.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, parent }) => {
    const { projects } = await parent();

    const project = projects.find((project: Project) => project.slug === params.slug);

    if (!project) {
        error(404, 'Project not found');
    }

    return {
        project
    };
};
