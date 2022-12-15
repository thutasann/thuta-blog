"use client";

export default function Head() {

  const meta = {
    title: "Thuta Sann - Thoughts & Blogs",
    description: `I'm a developer that loves building NEXTJS, ANGULAR & SpringBoot and IOS Mobile apps. `,
    image: "/thutasann-blog.jpeg",
    type: "website",
  };
  

  return (
    <>
      <title>{meta.title}</title>
        <link rel="icon" type="image/x-icon" href={meta.image}></link>
        <meta name="robots" content="index" />
        <meta name="google-site-verification" content="lt2KD97W6zCJHumr4ckLHj-3cMOvWcJl30mKEJiglz8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="Thuta Sann, Thuta Blogs, thutablog, Web Developer, BlockChain Developer, UI/UX Designer, Song Composer, FullStack Developer, Content Manager" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://thutablog.vercel.app/`}
        />
        <link
          rel="canonical"
          href={`https://thutablog.vercel.app/`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Thuta Sann" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thutasann3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
    </>
  )
}