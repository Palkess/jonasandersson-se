<script lang="ts">
    import PageTitle from '$lib/components/base/page-title/page-title.svelte';
    import SubPage from '$lib/components/composites/sub-page/sub-page.svelte';
    import * as m from '$lib/paraglide/messages.js';
    import profileImg from '$lib/assets/images/profile_pic.jpg';
    import Paper from '$lib/components/base/paper/paper.svelte';
</script>

<main class="flex h-full flex-col items-center justify-center p-2">
    <div class="container">
        <PageTitle>
            {m.navigation_about()}
        </PageTitle>
        <SubPage class="mb-8">
            <div class="flex items-start gap-4">
                <img
                    class="aspect-square w-52 shrink-0 rounded-full border-2 object-cover p-2"
                    src={profileImg}
                    alt={m.profile_img_alt()} />
                <div>
                    <p class="bg-navy-100 mb-4 rounded-2xl p-4 text-lg text-white">
                        Hej, mitt namn är Jonas 👋 Jag är en fullstack webbutvecklare från
                        Öland/Kalmar som har en passion för att ta fram smarta, smidiga och snygga
                        webblösningar. Efter många år inom IT-branschen och med en bred kompetens
                        inom hela utvecklingsprocessen från design till produktion, har jag en
                        gedigen erfarenhet av att skapa webbplatser och applikationer som är
                        användarvänliga, tilltalande och effektiva.
                    </p>
                    <span class="text-lg font-medium">Huvudkunskaper:</span>
                    <ul class="inline-flex flex-wrap gap-2 *:rounded *:px-3 *:py-1 *:font-medium">
                        <li class="bg-[#dd3700] text-white">Svelte</li>
                        <li class="bg-[#3178c6] text-white">Typescript</li>
                        <li class="bg-angular text-white">Angular</li>
                        <li class="bg-[#42b883]">Vue</li>
                        <li class="bg-[#417e38] text-white">Node</li>
                        <li class="bg-[#512bd4] text-white">.NET</li>
                    </ul>
                </div>
            </div>
        </SubPage>

        <div class="mb-8 grid grid-cols-[1fr_3fr] gap-8">
            <div class="rounded-2xl border-2">
                <p>TBA</p>
            </div>
            <Paper class="*:not-last:mb-4">
                <h2>Bakgrund</h2>
                <p>
                    Jag är uppvuxen i den lilla byn Löt på Öland, där större delen av min närmaste
                    familj fortfarande bor. Under gymnasiet flyttade jag till Kalmar för att studera
                    Teknik med inriktning på IT vid John Bauergymnasiet.
                </p>
                <p>
                    Det var där jag först blev introducerad till programmering genom C++ och Java,
                    samt grundläggande webbutveckling med HTML, CSS och PHP. Jag fastnade snabbt för
                    utveckling och valde därför att fortsätta mina studier på Blekinge Tekniska
                    Högskola, där jag läste Webbprogrammering.
                </p>
                <p>
                    Sedan dess har jag ständigt utvecklats i mina roller och drivs av att lära mig
                    nya saker. Med erfarenhet som SEO-tekniker, webbsupport, projektledare,
                    frontend-utvecklare och fullstack-utvecklare har jag fått en bred förståelse för
                    hela utvecklingsprocessen. Jag brinner för att omvandla kunders behov till
                    smarta, användarvänliga lösningar som gör deras vardag enklare.
                </p>
                <p>
                    När jag inte kodar så utforskar jag gärna digitala världar inom RPG- och
                    MMORPG-spel samt läser på om nya tekniker. Sedan 2024 har jag även skaffat ett
                    nytt intresse i att cykla och utforska den riktiga världen med! Långsamt men
                    säkert framåt - 🚴‍♂️
                </p>
            </Paper>
        </div>

        <div class="grid grid-cols-[3fr_1fr] gap-8">
            <Paper class="*:mb-4">
                <h2>Mål & framtid</h2>
                <p>TBA</p>
            </Paper>
        </div>
    </div>
</main>
