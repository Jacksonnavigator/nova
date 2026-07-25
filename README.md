# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The dev server runs at **http://127.0.0.1:5173** locally. (Lovable's cloud editor still uses port 8080 in its sandbox.)

Images uploaded in Lovable are stored in the cloud. For local dev, copies are kept in `public/assets/` and resolved via `src/lib/resolve-asset.ts`. If you add new images in Lovable, download them into `public/assets/` with the same filename.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
