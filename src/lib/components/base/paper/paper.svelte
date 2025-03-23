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
        'relative w-full rounded-2xl border bg-white p-4 text-black shadow sm:p-8',
        className
    )}>
    {@render children()}
</div>
