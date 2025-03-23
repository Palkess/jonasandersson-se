# Jonasandersson.se Web

This is the website for [https://jonasandersson.se](https://jonasandersson.se).

## Quick links

[💾 Github](https://github.com/Palkess/jonasandersson-se)

## Prerequisites

- Node 20.11.0+
- For deployment on IIS
    - IIS Node
    - URL Rewrite

## Built with

- Svelte + SvelteKit
- TailwindCSS
- Typescript

⚠️ The sveltekit adapter used to enable IIS hosting can be found here: https://github.com/abaga129/sveltekit-adapter-iis

## Folder structure

```
root
└─ messages                                | Contains all translations used by inlang
└─ project.inlang                          | Contains all configs used by inlang
└─ src                                     | App root
│   └─ lib                                 |
│   |   └─ assets                          | Predetermined static files that are used in the app. Ex. logo.
│   |   └─ components                      |
│   |   |   └─ base                        | Smallest component which have none or very few dependancies to other components. Ex. buttons, lists...
│   |   |   └─ composites                  | Composites of multiple components to create a combined context. Ex. teaser, page-section
│   |   |   └─ foundation                  | Similar to base-components, but with foundational responsibility in the app as a whole. Changes here impact a large area.
│   |   └─ types                           |
│   |   └─ utils                           | Utility functionality. Ex. helper functions.
│   └─ routes                              |
└─ static                                  | Public folder with images, svgs, fonts, static content
```

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production files:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Manual deploy

In case of a manual deploy, do the following:

1. Open command line in /frontend.
2. If not already done, run `npm install`
3. Run `npm run build` to build production files.
4. When the build is completed, cd into `/.svelte-kit`. There should be a folder named `adapter-iis`.
5. Backup server-files and replace every file with all files from the local `adapter-iis` folder to the server. The website in IIS should restart automatically.

## TODO

- Do something cool in the background, maybe a spaceship flying around?
- Expand of the usage of the Navigation API, explore more options that makes the user experience responsive.

## Relevant links

- https://svelte.dev/
- https://tailwindcss.com/
- https://github.com/abaga129/sveltekit-adapter-iis
