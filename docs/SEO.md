# Search maintenance

Canonical website: <https://antonkuehr.github.io/akrobotics/>.

## Files to preserve

- Each content page has its own title, description, absolute canonical URL and social preview metadata.
- The homepage contains `ProfilePage` and `Person` structured data. Project pages contain `WebPage` and `BreadcrumbList` data.
- `sitemap.xml` lists the seven public content pages. Update `lastmod` only when the corresponding page materially changes.
- `404.html` uses `noindex, follow` and is excluded from the sitemap.
- `googlebdaa3890157682d4.html` is the existing Google ownership-verification file. Keep its filename and contents unchanged.

Metadata is delivered in HTML and does not depend on JavaScript.

## Search Console

Use the URL-prefix property `https://antonkuehr.github.io/akrobotics/` in [Google Search Console](https://search.google.com/search-console). Submit `sitemap.xml` under that property, then use URL inspection to check live page accessibility and indexing status.

The existing verification file and sitemap submission do not guarantee indexing or ranking. Keep the canonical URL consistent across the site, GitHub repository website field and public profiles.

## robots.txt scope

Crawlers read `robots.txt` at the host root. This repository serves a project site under `/akrobotics/`, so its `robots.txt` is not the host-wide crawler configuration. Preserve its sitemap reference, and submit the sitemap directly through Search Console. Changes to the host-root file belong in the separate `antonkuehr.github.io` repository.

## References

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [robots.txt scope](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [URL inspection](https://support.google.com/webmasters/answer/9012289)
