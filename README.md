# tech
- Vue.js
- Tailwind
- Express.js
- Typescript

# folder tree
```
└── src/
    ├── App.vue
    ├── index.ts (backend)
    ├── main.ts
    ├── style.css
    ├── worker-configuration.d.ts
    ├── data/
    │   └── testimonials.json
    └── .wrangler/
        └── cache/
            └── cf.json
```

# note  
uploading to cloudflare worker.
installing wrangler for cloudflare worker

index.ts has original local express so it can be used to change to traditional backend in comment


## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```
