<script lang="ts">
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import { languageTag } from '$lib/paraglide/runtime.js';
    import * as m from '$lib/paraglide/messages.js';
    import profileImg from '$lib/assets/images/profile_pic.jpg';
    import Paper from '$lib/components/base/paper/paper.svelte';
    import SwedishHistory from './swedish-history.svelte';
    import EnglishHistory from './english-history.svelte';
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';
    import SwedishExperience from './swedish-experience.svelte';
    import EnglishExperience from './english-experience.svelte';

    const skills: string[] = ['Svelte', 'Typescript', 'Angular', 'Vue', 'Node', '.NET'];
</script>

<main class="flex flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>
            {m.navigation_about()}
        </PageTitle>
        <SubPage class=" mb-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-[13rem_1fr]">
                <img
                    class="view-transition-profileImg mx-auto aspect-square w-52 shrink-0 rounded-full border-2 object-cover p-2"
                    src={profileImg}
                    alt={m.profile_img_alt()} />
                <div class="view-transition-pageSummary grow-1 basis-[600px]">
                    <p class="bg-navy-100 mb-4 rounded-2xl p-4 text-lg text-white">
                        {m.about_summary()}
                    </p>
                    <span class="text-lg font-medium">{m.about_skills()}:</span>
                    <SkillsList {skills} style="view-transition-name: expertise-list;" />
                </div>
            </div>
        </SubPage>

        <div class="view-transition-pageContent mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_3fr]">
            <div class="rounded-2xl border-2 p-4">
                {#if languageTag() === 'sv'}
                    <SwedishExperience />
                {:else}
                    <EnglishExperience />
                {/if}
            </div>
            <Paper class="*:not-last:mb-4">
                {#if languageTag() === 'sv'}
                    <SwedishHistory />
                {:else}
                    <EnglishHistory />
                {/if}
            </Paper>
        </div>
    </div>
</main>
