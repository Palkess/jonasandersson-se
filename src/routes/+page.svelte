<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
    import profileImg from '$lib/assets/images/profile_pic.jpg';
    import SkillsList from '$lib/components/base/skills-list/skills-list.svelte';

    const skills: string[] = ['Svelte', 'Typescript', 'Angular', 'Vue', 'Node', '.NET'];
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <h1 class="view-transition-pageTitle mb-3">Jonas Andersson</h1>
    <span class="mb-3 text-xl">{m.page_sub_title()}</span>
    <SkillsList {skills} />

    <div class="mt-8">
        <img
            class="view-transition-profileImg aspect-square w-52 rounded-full border-2 object-cover p-2"
            src={profileImg}
            alt={m.profile_img_alt()}
            draggable="false" />
    </div>

    <nav>
        <ul class="mt-8 flex items-center justify-center gap-8 text-xl font-medium">
            <li>
                <a href="/about">{m.navigation_about()}</a>
            </li>
            <li>
                <a href="/portfolio">{m.navigation_portfolio()}</a>
            </li>
        </ul>
    </nav>
</main>
