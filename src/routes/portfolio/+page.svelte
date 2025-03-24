<script lang="ts">
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import ProjectTeaser from '$lib/components/composites/project-teaser/project-teaser.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import * as m from '$lib/paraglide/messages.js';
    import { languageTag } from '$lib/paraglide/runtime.js';

    let { data } = $props();

    const pageTitle =
        languageTag() === 'sv'
            ? 'Portfolio | Jonas Andersson - Fullstack webbutvecklare | Svelte, Angular, Vue | Tillgänglighet i benmärgen'
            : 'Portfolio | Jonas Andersson - Fullstack web developer | Svelte, Angular, Vue | Accessibility through and through';

    const pageDescription =
        languageTag() === 'sv'
            ? 'Här kan ni läsa om några av dom projekt som jag har varit med och utvecklat. | Jonas Andersson - Fullstack webbutvecklare | Svelte, Angular, Vue | Tillgänglighet i benmärgen'
            : 'Here you can read about some of the projects that I have been involved in developing. | Jonas Andersson - Fullstack web developer | Svelte, Angular, Vue | Accessibility through and through';
</script>

<svelte:head>
    <title>
        {pageTitle}
    </title>
    <meta name="description" content={pageDescription} />
</svelte:head>

<main class="flex flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>
            {m.navigation_portfolio()}
        </PageTitle>

        <SubPage class=" mb-8">
            <p class="text-lg">
                {m.portfolio_read_about()}
            </p>
        </SubPage>

        <ul class="grid grid-cols-1 lg:grid-cols-2">
            {#each data.projects as project}
                <ProjectTeaser {project} />
            {/each}
        </ul>
    </div>
</main>
