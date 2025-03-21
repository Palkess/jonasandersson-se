<script lang="ts">
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import * as m from '$lib/paraglide/messages.js';
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <SubPage>
        <h1>{m.navigation_about()}</h1>
    </SubPage>
</main>
