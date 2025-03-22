<script lang="ts">
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import ProjectTeaser from '$lib/components/composites/project-teaser/project-teaser.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import * as m from '$lib/paraglide/messages.js';

    let { data } = $props();
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>
            {m.navigation_portfolio()}
        </PageTitle>

        <SubPage class=" mb-8">
            <p>wdaawd</p>
        </SubPage>

        <ul class="grid grid-cols-2">
            {#each data.projects as project}
                <ProjectTeaser {project} />
            {/each}
        </ul>
    </div>
</main>
