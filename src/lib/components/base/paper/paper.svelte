<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface Props {
        class?: string;
        children: Snippet;
    }

    let { class: className = '', children }: Props = $props();
</script>

<div
    class={twMerge(
        'relative w-full rounded-2xl border bg-white px-8 py-8 text-black shadow',
        className
    )}>
    {@render children()}
</div>
