<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import '../app.css';
    import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    let { children } = $props();
    import FlagSwedenIcon from '$lib/components/foundation/icons/FlagSwedenIcon.svelte';
    import FlagBritainIcon from '$lib/components/foundation/icons/FlagBritainIcon.svelte';

    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route(page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
    }
</script>

<div class="container mx-auto mt-2 flex items-center justify-end gap-4">
    <button class="flex gap-2" onclick={() => switchToLanguage('en')}><FlagBritainIcon />en</button>
    <button class="flex gap-2" onclick={() => switchToLanguage('sv')}><FlagSwedenIcon /> sv</button>
</div>

<ParaglideJS {i18n}>
    {@render children()}
</ParaglideJS>

<footer>
    <div class="container mx-auto mt-8">
        <p class="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Jonas Andersson
        </p>
    </div>
</footer>
