This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Demo goodies

The goal of this demo is to showcase workflows on approaching atomic concepts and development patterns.

When we look at a design, what are we building?

What we are buildings are building blocks that can be reused across multiple screens regardless of where the data comes from. 
Moreover, these blocks can be tested in isolation allowing us to confidently build user interfaces and experiences that meet the expectations and make our jobs easier.

To get started I decided to look into building a page that loads a bunch of sneakers in a grid system. 
Sneakers will be placed in a "sneaker box" to which on hover, the content will move up a bit.

As part of the second part, we would like to expand to allow for the sneaker boxes to have different variations; The variations will be allowing for types that show case different colors:
Default: white background / black text
Off-white: orange 200 background / stone 800 text

Lastly, let's create a shoe box preview. This box will blur its content and only showcase while on hover.