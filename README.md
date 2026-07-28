# Let’s Read — beginner guide

This is a fast, search-friendly author and book blog designed for **free Netlify hosting**. It uses Eleventy (a static-site generator) and Decap CMS (a browser-based editor). Your content is published as ordinary web pages, so Google and AI search tools can read it without needing JavaScript.

## Before you publish (important)

Use your editor to replace these placeholders:

1. Open `src/_data/site.json` and replace `Your Name`, the email, website URL, and social links.
2. Replace `https://your-site-name.netlify.app` in `src/robots.txt` and `src/sitemap.xml` with your final domain. Also change `url` in `src/_data/site.json`.
3. Replace the sample book covers, author illustration, descriptions, and Amazon links.
4. Replace the Privacy Policy and Terms placeholders before collecting subscribers or using analytics.

## Publish on Netlify — no coding needed

1. Put this folder in a new GitHub repository. In GitHub, choose **New repository**, name it `lets-read`, then upload all the files from this folder.
2. Create a free account at [Netlify](https://www.netlify.com/). Choose **Add new site → Import an existing project → GitHub** and select your repository.
3. Netlify reads `netlify.toml` automatically. The build command is `npm run build` and publish directory is `_site`. Click **Deploy site**.
4. After the first deployment, open **Site configuration → Identity** and enable Identity. Under **Identity → Services**, enable **Git Gateway**. Invite yourself by email, accept the invitation, then visit `https://your-site-name.netlify.app/admin/` to log in to the editing dashboard.

## Use the editor dashboard

Visit `/admin/` on your live website and log in. The dashboard has three clear sections: **Blog posts**, **My books**, and **Book recommendations**.

### Add a blog post

Click **Blog posts → New Blog posts**. Write a useful title, select a category, add descriptive alt text for the featured image, and write a short SEO description (roughly 140–160 characters). Publish. Netlify rebuilds the website automatically in a minute or two.

### Add a book or change an Amazon link

Open **My books**. Select an existing book to edit it or click **New My books**. Upload a cover, add ages and themes, then paste the full Amazon product URL in **Amazon URL**. Use the same approach in **Book recommendations** for suggested books.

### Change images and author details

The editor uploads new content images. For your author photo, replace `src/assets/author.svg` with an image of the same name, or update the `/assets/author.svg` link in `src/about.njk`. Site-wide name, email, social links, and domain are in `src/_data/site.json`.

## Newsletter and comments

For a free newsletter, create an account with [Buttondown](https://buttondown.email/), [Beehiiv](https://www.beehiiv.com/), or Mailchimp. Copy the provider’s form action URL into the newsletter form in `src/index.njk` (replace `action="#"`).

For comments/reviews, [Giscus](https://giscus.app/) is free and moderated through GitHub Discussions. Create a free GitHub repository, enable Discussions, follow Giscus’s setup page, and paste its supplied `<script>` into `src/_includes/base.njk` just before `</body>`. In Giscus settings, choose a discussion category you moderate. Comments are then available on every blog and book page.

## Search visibility checklist

- Write one clear H1 title per post; the website does this automatically.
- Give every image meaningful alt text—describe the image, not just “book cover.”
- Link naturally to older relevant posts and your book pages in new articles.
- Keep the short SEO description unique for every post.
- Submit `https://yourdomain.com/sitemap.xml` to Google Search Console after your domain is connected.
- Do not remove the canonical links or structured data in the templates; they provide Book, Article, author, and breadcrumb-friendly signals.

## Connect a custom domain or subdomain

In Netlify, open **Domain management → Add a domain**. For a subdomain such as `reads.yourdomain.com`, add the CNAME record Netlify shows at your domain registrar. When it is working, update the three website URLs listed under **Before you publish** and deploy once more.

## Local preview (optional)

If someone technical is helping you, they can run `npm install` once and then `npm start` to see the site at a local address. You do not need this for Netlify publishing or dashboard editing.
