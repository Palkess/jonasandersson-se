<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
    import type { Snippet } from 'svelte';
    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="relative container rounded border bg-white px-8 py-8 text-black shadow">
    <button
        class="absolute -top-8 -left-8 aspect-square w-16 rounded-full border bg-black text-white"
        onclick={() => history.back()}>
        Back
    </button>
    {@render children()}
</div>
