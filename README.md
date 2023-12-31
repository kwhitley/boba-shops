# Boba Shop Finder

### Requirements:
- [Node v20](https://nodejs.org/en)

### Setup:
1. Clone this repo
2. Install dependencies: from the installed directory, run `npm install`
3. Add a `YELP_API_TOKEN` environment variable.  This may be accomplished via one of the following paths:
    - ### (option 1) add an .env file
     1. Rename `.env.example` file to `.env`
     2. Edit the `.env` to include your own Yelp API token
        ```bash
        YELP_API_TOKEN="Tcz4HNPYCOyTTpjyDTzqVPibRoCQMkMdH" # your token here
        PORT=3001
        ```
    - ### (option 2) export via command line
      ```bash
      export YELP_API_TOKEN=Tcz4HNPYCOyTTpjyDTzqVPibRoCQMkMdH # your token here
      ```
5. Build & run in preview mode: `npm run preview`
6. Open http://localhost:3001 in your browser (or your own specified port if overwritten in .env).

### Commands:
- `npm run dev` - runs the server and client in dev mode
- `npm run build` - builds the client (required for preview or running in production mode)
- `npm start` - starts the server
- `npm run preview` - builds and starts the server

### UX Decisions
  - I opted for a simple table view for display, as it would be more intuitive during sorting
  - Given the very few controls needed for search criteria, I created a responsive "controls" component that doubles as a description for what the user is seeing.  As complexity grows, that would easily be split to a more traditional filter bar.
  - A results refresh is automatic, whenever search criteria changes - so no need for a specific "load" UI element

### Design Decisions
Due to the time constraints, I opted to focus on the following areas:
  - Vite + Node server & client dev server setup
    - in dev mode, Vite server proxies requests to `/api` through to the underlying Node server.  In prod mode, the Node handles all routing and statically serves from the `/dist` folder.  
  - a single search context within the React app, complete with controls for downstream manipulation
  - implementation of [shadcn UI components](https://ui.shadcn.com/) - this was a first-time use for me, as I've been looking for a new component library and this seemed like a good time to try out some of the simple components (specifically the select box)
  - I included a mix of styled-components and raw SCSS (app.scss) in some places, as I'm more comfortable with these and time was too short to dig through extensive docs on shadcn

### Things I Skipped (due to time constraints)
  - URL/search-driven state flow.  A search app is a prime example of when to have state flow derived by the query string, but it takes time to set up properly.
  - Testing.  If this were a real app (and with time to achieve it), tests would be added.
  - Accessibility across the inputs/controls.
  - Clint-side caching to prevent duplicate requests and speed up browsing.  Usually I'd use an off-the shelf lib that included caching, loading states, etc.
  - Performance tuning (e.g. component memoization)
  - Data validation and error-handling throughout the app (e.g. if API fails to respond)
  - Typical loading spinners or offline messaging
  - TypeScript on the server: These days, I've been using the [Bun](https://bun.sh) runtime, which spoils me with out-of-the-box TypeScript, ESM+CJS, web standards routing, etc.  As Node is a bit of a pain to get strapped with TS, I just skipped this.  In a production environment, this would certainly be TS, and tests would be added.
  - Compression (arguably better done at a proxy layer anyway) or logging on the server
  - A hover state/card for detailed individual business entries (e.g. phone number)
    
