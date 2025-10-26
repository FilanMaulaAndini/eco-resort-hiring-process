This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

<!-- This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. -->


## Additional Questions

**Front End Implementation**

1.  Component Structure: How do you design component hierarchy to ensure reusability and maintainability?

    I prefer organizing components by feature instead of type. For example, I group everything related to the footer, header, about section, etc., into their own folders. Inside each folder, I keep the component file `(.js)` and its corresponding CSS module `(.module.css)` together.

    I usually think about components in three levels of reusability:
    - Layout components 
    - Section components 
    - UI components 

    If a component is used in more than two places, I move it to a shared folder. If it’s only used once, it stays in its feature folder. 

1.  Component Structure: How do you design component hierarchy to ensure reusability and maintainability?

    I prefer organizing components by feature instead of type. For example, I group everything related to the footer, header, about section, etc., into their own folders. Inside each folder, I keep the component file `(.js)` and its corresponding CSS module `(.module.css)` together.

    I usually think about components in three levels of reusability:
    - Layout components 
    - Section components 
    - UI components 

    If a component is used in more than two places, I move it to a shared folder. If it’s only used once, it stays in its feature folder. 

2.  State Management: What approach do you use for state management (global vs local) and how do you decide between them?

    I try to keep state as close as possible to where it’s needed. For example, if only the Footer cares about booking dates, the state lives in Footer.js. But if the Header also needs that info, I lift it up to a parent component or use Context.

3.  Responsive Strategy: What techniques do you implement to ensure consistency across different screen sizes?

    I stick with CSS Modules and media queries. I usually write desktop styles first, then add for tablets, and for mobile.
    For tricky layouts, I use CSS Grid for the main structure and Flexbox for smaller pieces. And I always test on actual devices, cause resizing a browser isn’t enough because things can look different on a phone or tablet.

4.  Performance Optimization: What methods do you use to optimize bundle size and loading time in Nuxt.js/Next.js?

    For Next.js specifically:

    - Use dynamic imports for heavy sections that aren't immediately visible
    - Enable image optimization in `next.config.js`
    - Check bundle size with `npm run build`
    - Lazy load images below the fold

    I also avoid importing huge libraries just for one function. Better to write it myself or find a smaller alternative.

**Data Management**

5.  Data Fetching: If using local JSON, how do you structure data to be scalable for supporting multiple page types?
    For static content, I usually create a `/data` or `/content` folder at the root of the project (outside `src`). Each JSON file represents a type of content. This keeps things organized and easy to fetch without hardcoding content in components.

6.  API Integration: If creating custom API, what design patterns do you use for handling loading states, error handling, and       caching?

    I create custom hooks to handle API calls that take care of:

    - Loading state — so I can show a spinner while data is being fetched.
    - Error state — to display an error message if something goes wrong.
    - Success state — to handle and provide the fetched data.
    - Simple caching — for example, saving data to `localStorage` for a few minutes to reduce repeated requests.

    I also make sure all API calls are wrapped in try-catch blocks to safely handle errors.

7.  Content Structure: How do you organize content types (rooms, facilities, gallery) in a flexible data structure?
    
    I organize content by what it represents - rooms, facilities, gallery, etc. Each type gets its own structure with the fields it needs.

    For example:
    - Rooms have name, photos, description, and price
    - Facilities have name, icon, and description
    - Gallery has images with captions
    
    I keep these in separate JSON files or objects so they're easy to find and update. When I need to show rooms on a page, I just loop through the rooms data. Same component works everywhere.

**Deployment & Infrastructure**

8.	Vercel Deployment: What configurations are needed for optimal performance on Vercel?
    
    To deploy project on Vercel, just connect with GitHub repo and configure a few key settings:
    - Build command: `npm run build`
    - Output directory: `.next`
    - Environment variables: Add them directly in the Vercel dashboard
    - Automatic deployments: Enable so every push to the `main` branch triggers a new deployment

9.	Environment Setup: How do you set up environment variables for development vs production?

    I use three files: 
    - `.env.local` - local development (not in git) 
    - `.env.development` - shared dev config (in git) - `.env.production` 
    - production config (set in Vercel) 

    All public variables start with `NEXT_PUBLIC_`. Private variables (API keys) don't have this prefix and only work server-side.

10.	Asset Optimization: What is your strategy for optimally handling images, fonts, and static assets?
    
    Images go in `/public/images` folder. I compress them before adding to the project using tools like TinyPNG. In the code, I use Next.js Image component which automatically optimizes further. 
    For fonts, I use `next/font` to self-host them instead of loading from Google.


<!-- ## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome! -->

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


