# Search visibility — Anton Kühr

Updated 8 October 2026. Canonical public site: https://antonkuehr.github.io/akrobotics/

## Changes in this checkout

- The homepage title and description identify Anton Kühr, robotics, mechanical engineering and TU Delft.
- All seven public content pages have distinct descriptions, absolute canonical URLs, consistent Open Graph/Twitter metadata and relevant image previews.
- The homepage includes JSON-LD `ProfilePage` and `Person` data with Anton Kühr, the transliteration Anton Kuehr, the public LinkedIn profile and education. Project pages include `WebPage` and `BreadcrumbList` data. These describe the portfolio pages; they do not assert sole authorship of team-built hardware.
- The sitemap lists the seven canonical content URLs with their actual modification date. Update a page’s `lastmod` only when that page materially changes; avoid automatically setting every date on unrelated releases.
- The error page explicitly requests `noindex, follow` and is excluded from the sitemap. The public `/404.html` URL returned HTTP 200 in the live audit, so this prevents indexing the direct error-page URL after publication.
- Search metadata is present in the original HTML and needs no JavaScript. Existing headings, crawlable project links, descriptive media names, alt text, lazy loading and mobile navigation are retained.

Search metadata takes effect after the normal GitHub Pages publication. Search visibility cannot be established or guaranteed by changing metadata alone.

## Search Console actions — 8 October 2026

The existing URL-prefix property is `https://antonkuehr.github.io/akrobotics/`. Inspected the failed sitemap entry in the browser: it already points to the correct `/akrobotics/sitemap.xml` URL. The report's shortened `/sitemap.xml` label is relative to this property, so it was not evidence of a domain-root submission.

Google's live URL test successfully fetched the sitemap using its smartphone inspection tool, with **Crawling allowed: Yes** and **Page fetch: Successful**. Resubmitted `sitemap.xml`; Search Console confirmed **Sitemap submitted**. The report still displayed **Couldn't fetch** when checked afterward; successful sitemap processing is pending and has not been confirmed.

The homepage inspection reported **URL is unknown to Google**, explaining its absence from search at that point. Requested homepage indexing. Search Console confirmed **Indexing requested** and that the URL was added to a priority crawling queue. This is an accepted request, not confirmation that the page has been indexed. Repeated requests do not increase priority. The existing property and submission access were already available; no ownership or account permissions were changed.

## Owner setup after publication

The supplied HTML-file verification is prepared as `googlebdaa3890157682d4.html` beside `index.html`, containing exactly `google-site-verification: googlebdaa3890157682d4.html`. Keep it published at `https://antonkuehr.github.io/akrobotics/googlebdaa3890157682d4.html`. This replaces the need to add a meta tag for this verification method. The Search Console property is now available; the verification action itself was performed outside this agent's browser session.

1. Open [Google Search Console](https://search.google.com/search-console) with the Google account that should own the website. Add a **URL-prefix** property with the exact value `https://antonkuehr.github.io/akrobotics/`. Domain verification is unsuitable for a shared `github.io` hostname whose DNS you do not control.
2. Choose **HTML tag** verification, then copy the complete `google-site-verification` meta tag. Add that exact tag inside the homepage’s `<head>`, publish, and select **Verify**. Keep the tag after verification. Alternatively, place Google's provided verification HTML file at this repository's root, publish it at the URL Google requests, then verify. Do not invent a verification token.
3. In **Sitemaps**, submit `sitemap.xml` for this property. Its absolute URL is `https://antonkuehr.github.io/akrobotics/sitemap.xml`.
4. Inspect `https://antonkuehr.github.io/akrobotics/` using **URL inspection**. Run **Test live URL** and check whether Google can crawl the page. If it passes, select **Request indexing**. Submit the sitemap for discovery of the other pages rather than repeatedly requesting every URL.
5. Check **Page indexing** for the actual reason if a URL is excluded: crawl errors, a different selected canonical, `noindex`, or discovered/crawled but currently not indexed. Public `site:` searches alone do not reliably diagnose indexing.
6. Add the canonical website URL to your public LinkedIn website/Featured section and GitHub profile/repository About website field. These relevant public links help people and crawlers discover the portfolio; obtain other links naturally from profiles or organisations you are affiliated with.
7. Monitor **Performance** for queries such as `Anton Kühr` and `Anton Kuehr` after indexing. Requests and metadata changes do not guarantee indexing, a ranking, or a deadline. Google says crawling can take days to weeks; inspect the actual property rather than repeatedly submitting requests.

## GitHub Pages robots.txt placement

The live audit returned:

| URL | Response |
| --- | --- |
| `https://antonkuehr.github.io/akrobotics/` | 200, no `X-Robots-Tag` header |
| `https://antonkuehr.github.io/akrobotics/sitemap.xml` | 200, lists all seven pages |
| `https://antonkuehr.github.io/akrobotics/robots.txt` | 200, allows crawling and names the sitemap |
| `https://antonkuehr.github.io/robots.txt` | 404 |

Crawlers look for robots.txt at the **host root**, not inside a project directory. A missing host-root robots.txt does not itself block crawling. Direct Search Console sitemap submission is appropriate for this project repository.

If you manage the separate `antonkuehr.github.io` user-site repository, its root robots.txt can advertise this sitemap. Preserve any existing rules and other sitemap entries in that repository; this checkout cannot modify it. A suitable addition is:

```text
Sitemap: https://antonkuehr.github.io/akrobotics/sitemap.xml
```

Do not add artificial keywords, ratings, backlinks, repeated name text or unsupported project claims. A custom domain is optional and would require coordinated canonical, sitemap and redirect changes; it is not necessary for indexing this site.

## Official references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Robots.txt scope and behaviour](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [URL inspection](https://support.google.com/webmasters/answer/9012289)
- [Ask Google to recrawl URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
