<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import '../app.css';
    import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
    import { afterNavigate, goto, onNavigate } from '$app/navigation';
    import { page } from '$app/state';
    let { children } = $props();
    import FlagSwedenIcon from '$lib/components/foundation/icons/FlagSwedenIcon.svelte';
    import FlagBritainIcon from '$lib/components/foundation/icons/FlagBritainIcon.svelte';
    import { languageTag } from '$lib/paraglide/runtime.js';

    let activeLanguage = $state(languageTag());

    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route(page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
    }

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    afterNavigate(() => {
        activeLanguage = languageTag();
    });
</script>

<div class="view-transition-topMenu container mx-auto mt-2 flex items-center justify-end gap-4">
    <button
        class="{activeLanguage === 'en' ? 'border-b-2' : 'mb-0.5'} flex gap-2 rounded pb-2"
        onclick={() => switchToLanguage('en')}>
        <FlagBritainIcon />en
    </button>
    <button
        class="{activeLanguage === 'sv' ? 'border-b-2' : 'mb-0.5'} flex gap-2 rounded pb-2"
        onclick={() => switchToLanguage('sv')}>
        <FlagSwedenIcon /> sv
    </button>
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
