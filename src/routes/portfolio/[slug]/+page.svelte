<script lang="ts">
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import Paper from '$lib/components/base/paper/paper.svelte';
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';

    let { data } = $props();

    let { project } = data;
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>{project.title}</PageTitle>

        <SubPage class="relative mb-8 aspect-video w-full" backUrl="/portfolio">
            <img
                class="absolute top-0 left-0 aspect-video w-full rounded-2xl object-cover object-top"
                style="view-transition-name: project-image-{project.slug};"
                src={project.image}
                alt={project.title} />
        </SubPage>

        <Paper>
            <div class="flex items-center justify-between gap-4">
                <div>
                    <h2>Kort beskrivning</h2>
                    <p>{project.description}</p>
                    <SkillsList skills={project.technologies} />
                </div>

                <a href={project.url} target="_blank">Gå till webbplatsen</a>
            </div>
        </Paper>
    </div>
</main>
