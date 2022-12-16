"use client";

import { Meta } from "../types/typings";

let defaultMeta: Meta = {
  title: "Thuta Sann - Thoughts & Blogs",
    description: `Thuta's Personal Blog website where he would share his thoughts and blogs about latest Tech Stack, Software Development, Debugging Methods & more... `,
    image: "/thutasann-blog.jpeg",
    ogimage: "/thutasann-blog.jpeg",
    type: "website",
};

export default function Head({ meta = defaultMeta  }) {

  return (
    <>
      <title>{meta.title}</title>
        <link rel="icon" type="image/x-icon" href={meta.image}></link>
        <meta name="robots" content="index" />
        <meta name="google-site-verification" content="lt2KD97W6zCJHumr4ckLHj-3cMOvWcJl30mKEJiglz8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="Thuta Sann, Thuta Sann Blogs, Thuta Sann Thoughts & Blogs, thutasannblogs, Web Developer, IOS Developer, Thuta Developer, Thuta Sann Software Development" />
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
        <meta property="og:image" content={meta.ogimage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thutasann3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogimage} />
    </>
  )
}