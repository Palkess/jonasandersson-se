<script lang="ts">
    import Paper from '$lib/components/base/paper/paper.svelte';
    import MoveLeftIcon from '$lib/components/foundation/icons/MoveLeftIcon.svelte';
    import * as m from '$lib/paraglide/messages.js';
    import type { Snippet } from 'svelte';

    interface Props {
        class?: string;
        children: Snippet;
    }

    let { class: className = '', children }: Props = $props();
</script>

<Paper class={className}>
    <a
        class="absolute -top-8 -left-8 flex aspect-square w-16 items-center justify-center rounded-full border-2 bg-black p-3 text-white"
        href="/"
        aria-label={m.navigation_back()}>
        <MoveLeftIcon class="m-auto h-8 w-8" />
    </a>
    {@render children()}
</Paper>
