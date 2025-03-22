<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    interface Props {
        class?: string;
        children: Snippet;
    }

    let { class: className = '', children }: Props = $props();
</script>

<h1
    class={twMerge(
        "relative mb-24 inline-block after:absolute after:-bottom-9 after:block after:h-4 after:w-3/4 after:rounded after:bg-white after:content-['']",
        className
    )}>
    {@render children()}
</h1>
