# Local verification record

Date: 7 October 2026. Tested the existing static site through a loopback-only preview in native Safari on macOS. No deployment, framework migration, build system or package installation was performed.

## Checks completed

| Check | Method | Result |
|---|---|---|
| JavaScript syntax | `node --check site.js` | Passed. |
| Patch whitespace | `git diff --check` | Passed. |
| HTML structure | Parsed all eight site HTML files; checked balanced tags, duplicate IDs, image alt text and one main heading | Passed. No unbalanced tags or duplicate IDs. |
| Disclosures | Checked summary markup and details hierarchy | No links inside summary triggers; no nested details. Earlier roles and additional volunteering reveal readable entries directly. |
| Local links and assets | Resolved every local anchor, image, stylesheet, script, document and iframe path, including URL-decoded filenames | All targets exist; all local section fragments resolve. |
| Existing destinations | Compared each page's unique anchor destinations against the actual starting working copy | Every existing destination retained, including certificates, programmes, scholarship/interview, collaborators and project navigation. |
| Protected homepage areas | Compared header, hero, About, Skills and Contact markup against the starting working copy | Unchanged. Home section order/IDs and every portfolio-card image wrapper are unchanged. The five narrow summary corrections are documented in CONTENT_SOURCES.md. |
| CV content retention | Compared the featured and earlier entries with the original working copy and inspected expanded accessibility content | MSc/BSc descriptions and evidence, scholarship/interview, Abitur/grade, both Furhat phases, tutor/Scrum role, three earlier jobs and seven volunteer entries retained. |
| Responsive layout | Browser-rendered local test fixture: seven pages × 1440/1024/768/390/320 CSS-pixel frame widths × all details closed/open × JavaScript enabled/disabled | **140 checks passed.** Checked document/visible overflow, local image decoding, technical-image aspect ratios, video ratios, minimum disclosure/link target heights and narrow-screen stacking. Intentional clipped homepage image treatments were excluded from false overflow reports. |
| 200% zoom | Selected Safari's explicit 200% page zoom; verified viewport changed from 2560 to 1280 CSS px and device pixel ratio from 1 to 2; ran the final 140-check matrix at this zoom | **140 checks passed at 200%.** Audio and cobot mobile results inspected visually at 320 CSS px. |
| Visual review | Desktop CV and 1440 px Furpack header; 1024 px skin support figures; 768 px rotation concepts; narrow CV/table/result layouts; source-image contact sheets; technical CAD and IK originals | Verified readable date/title/control alignment and intact source labels/aspect ratios. Removed a repeated skin photograph. Corrected focus-ring/paragraph overlap and cramped mobile result columns. |
| Keyboard disclosure behaviour | Focused native MSc summary, used Enter to open and Space to close | Focus stayed on the opener; measured scroll change was zero in both states. Visible mint focus outline measured 3 px. Several details can remain open. |
| Mobile menu | Opened the 768 px navigation control, then pressed Escape | Navigation closed and focus returned to Menu. |
| JavaScript disabled | Same-origin sandboxed frame without script permission, with native details states tested and absence of the `.js` class verified | Main content and links remain in HTML; all details states render. Also opened and closed the native MSc disclosure with Enter/Space in the no-script frame. Mobile navigation remains available without the script. |
| Reduced motion | Checked the existing shared `prefers-reduced-motion: reduce` block; applied that block as active CSS in the local test frame | One preference block detected; zero active CSS animations/transitions in the inspected frame. Native disclosure enhancement no longer animates, scrolls or shifts focus. |
| Touch-sized controls | Browser bounding-box checks | Featured/more/technical disclosures, menu button, CV evidence links, collaborator links, full-size links, resources and onward navigation have at least 44 px CSS height when visible. |
| Media and fallback content | Checked local decoding, intrinsic proportions, lazy secondary media and iframe markup | No distorted technical images or broken local images. Landscape video 16:9 and 360 Short 9:16; no autoplay. Captions, demonstrated results and direct YouTube links remain available if embeds fail. |
| Source-specific claims | Reviewed SKIN/AUDIO/COBOT and Furpack/360 evidence alongside the implemented pages | Checked the matrix/threshold distinction, audio means/counts/p-values/channel size, separate cobot workflows and subsystem scopes, prototype endpoints, cable/perception limits and team attribution. Traceability and unresolved conflicts are in the two content documents. |

The responsive fixture was temporary and is removed from the delivered site. It used actual CSS-pixel iframe widths; Safari's scrollbar may reduce the available content area slightly. Geometry checks complement visual inspection and are not a claim of a full accessibility audit.

## Public-link checks and limits

Read-only HTTP HEAD requests followed redirects for all 19 external anchor destinations in the edited pages. Ten returned HTTP 200: the Deutschlandfunk interview, Furhat, Project Echo Instagram, two TH Köln pages, two TU Delft pages and three YouTube destinations. Nine LinkedIn destinations returned HTTP **999**, so automated checking could not establish whether those profiles are still available. All original names and exact link destinations remain preserved.

An HTTP 200 response is a reachability check, not proof of page content, identity or successful video playback. Embedded YouTube playback was not confirmed; the JavaScript-disabled view displayed YouTube's fallback/error message. Direct viewing links and the essential case-study content remain available.

## Checks not performed

- Physical mobile touch hardware, other browsers, VoiceOver/screen-reader traversal and a full accessibility audit.
- Changing the OS reduced-motion preference. The shared CSS rule was emulated locally instead.
- Independent verification of every older CV/harvesting claim or current Echo status; those retained facts have an explicit source/gap record.
- Public permission review of newly proposed source excerpts, internal photographs or supplier images. These remain local author-review assets.
- Deployment or live production smoke tests.

Before any later publication, resolve the material content/publication questions in CONTENT_GAPS.md and manually confirm LinkedIn profiles and YouTube playback.
