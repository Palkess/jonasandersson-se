<script lang="ts">
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';
    import AppWindowIcon from '$lib/components/foundation/icons/AppWindowIcon.svelte';
    import type { Project } from '$lib/types/project';

    interface Props {
        project: Project;
        class?: string;
    }

    let { project, class: className = '' }: Props = $props();
</script>

<a class="group" href={`/portfolio/${project.slug}`}>
    <div
        class="relative top-0 flex flex-col overflow-hidden rounded-2xl bg-white text-black shadow-lg transition-all group-hover:-top-4">
        <img
            src={project.image}
            alt={project.title}
            class="aspect-video w-full object-cover object-top"
            style="view-transition-name: project-image-{project.slug};"
            draggable="false" />
        <div class="relative border-t-2 border-gray-500 px-3 pt-10 pb-3">
            <div
                class="absolute -top-8 left-1/2 flex aspect-square w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-black text-white">
                <AppWindowIcon class=" h-8 w-8" />
            </div>
            <div class="bg-navy-100 rounded-2xl p-4 text-white">
                <h2
                    class="relative mb-10 after:absolute after:-bottom-5 after:block after:h-2 after:w-3/4 after:rounded after:bg-white after:content-['']">
                    {project.title}
                </h2>
                <SkillsList skills={project.technologies} />
            </div>
        </div>
    </div>
</a>
