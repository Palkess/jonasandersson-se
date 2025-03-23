<script lang="ts">
    import Button from '$lib/components/base/button/button.svelte';
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import Paper from '$lib/components/base/paper/paper.svelte';
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import ExternalLinkIcon from '$lib/components/foundation/icons/ExternalLinkIcon.svelte';
    import GithubIcon from '$lib/components/foundation/icons/GithubIcon.svelte';
    import * as m from '$lib/paraglide/messages.js';
    import { languageTag } from '$lib/paraglide/runtime';

    let { data } = $props();

    let { project } = data;
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>
            {#if languageTag() === 'sv'}
                {project.title}
            {:else}
                {project.translations.en.title}
            {/if}
        </PageTitle>

        <SubPage class="relative mb-8 aspect-video w-full" backUrl="/portfolio">
            <img
                class="absolute top-0 left-0 aspect-video w-full rounded-2xl object-cover object-top"
                style="view-transition-name: project-image-{project.slug};"
                src={project.image}
                alt={project.title} />
        </SubPage>

        <Paper>
            <div class="mb-4 flex flex-col gap-4">
                <h2>
                    {#if languageTag() === 'sv'}
                        {project.descriptionTitle}
                    {:else}
                        {project.translations.en.descriptionTitle}
                    {/if}
                </h2>
                <p>Release: {project.releaseDate}</p>
                <p>
                    {#if languageTag() === 'sv'}
                        {project.description}
                    {:else}
                        {project.translations.en.description}
                    {/if}
                </p>
                <h3 class="text-lg font-medium">{m.portfolio_used_tech()}</h3>
                <SkillsList
                    skills={project.technologies}
                    style="view-transition-name: project-skills-{project.slug};" />
            </div>

            <div class="flex justify-end gap-4">
                {#if project.status === 'public' && project.githubUrl}
                    <Button
                        type="link"
                        theme="secondary"
                        size="lg"
                        href={project.githubUrl}
                        target="_blank">
                        <GithubIcon />
                        Github
                        <ExternalLinkIcon />
                    </Button>
                {/if}
                <Button type="link" theme="primary" size="lg" href={project.url} target="_blank">
                    {m.portfolio_goto_webpage()}
                    <ExternalLinkIcon />
                </Button>
            </div>
        </Paper>
    </div>
</main>
