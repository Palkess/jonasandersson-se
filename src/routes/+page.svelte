<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
    import profileImg from '$lib/assets/images/profile_pic.jpg';
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';
    import SocialLinks from '$lib/components/base/social-links/social-links.svelte';

    const skills: string[] = ['Svelte', 'Typescript', 'Angular', 'Vue', 'Node', '.NET'];
</script>

<svelte:head>
    <title>
        Jonas Andersson - Fullstack webbutvecklare | Svelte, Angular, Vue | Tillgänglighet i
        benmärgen
    </title>
    <meta
        name="description"
        content="Välkommen in och lär känna mig, Jonas Andersson! Jag är en fullstack webbutvecklare från Öland/Kalmar som hjälper mina kunder att nå ut till sina besökare med smidiga och snygga webbsidor!" />
</svelte:head>

<main class="flex h-full flex-col items-center justify-center">
    <h1 class="view-transition-pageTitle mb-3">Jonas Andersson</h1>
    <span class="mb-3 text-xl">{m.page_sub_title()}</span>
    <SkillsList {skills} style="view-transition-name: expertise-list;" />

    <div class="mt-8">
        <img
            class="view-transition-profileImg aspect-square w-52 rounded-full border-2 object-cover p-2"
            src={profileImg}
            alt={m.profile_img_alt()}
            draggable="false" />
    </div>

    <nav class="mt-8 mb-8">
        <ul class="flex flex-wrap items-center justify-center gap-8 text-xl font-medium">
            <li>
                <a class="link" href="/about">{m.navigation_about()}</a>
            </li>
            <li>
                <a class="link" href="/portfolio">{m.navigation_portfolio()}</a>
            </li>
        </ul>
    </nav>

    <div class="flex gap-4">
        <SocialLinks />
    </div>
</main>
