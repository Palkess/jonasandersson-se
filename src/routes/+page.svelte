<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
    import profileImg from '$lib/assets/images/profile_pic.jpg';

    let showMenu = $state(false);
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <h1 class="view-transition-pageTitle mb-3">Jonas Andersson</h1>
    <span class="text-xl">{m.page_sub_title()}</span>

    <div class="mt-8">
        <button aria-label="Visa menyn" onclick={() => (showMenu = !showMenu)}>
            <img
                class="view-transition-profileImg aspect-square w-52 rounded-full border-2 object-cover p-2"
                src={profileImg}
                alt={m.profile_img_alt()} />
        </button>
    </div>

    {#if !showMenu}
        <nav>
            <ul class="mt-8 flex items-center justify-center gap-8">
                <li>
                    <a href="/">{m.navigation_home()}</a>
                </li>
                <li>
                    <a href="/about">{m.navigation_about()}</a>
                </li>
                <li>
                    <a href="/portfolio">{m.navigation_portfolio()}</a>
                </li>
            </ul>
        </nav>
    {/if}
</main>
