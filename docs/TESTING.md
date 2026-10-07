# Local verification record

Date: 7 October 2026. Tested the existing static site through a loopback-only preview in native Safari on macOS. No deployment, framework migration, build system or package installation was performed.

## Checks completed

| Check | Method | Result |
|---|---|---|
| JavaScript syntax | `node --check assets/js/site.js` | Passed. |
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


## Safari/mobile follow-up and cleanup — 7 October 2026

After the requested presentation changes and folder cleanup:

- Safari checked all eight HTML entry points at 1440, 390 and 320 CSS pixels, with disclosures closed and open: **48/48 layout checks passed**. No horizontal page overflow, broken images or background grid remained.
- Verified equal 24px top/bottom padding for visible Education, Jobs and Volunteering entries. All eight volunteering entries are visible without disclosure controls; certificate links remain inline.
- Confirmed real opening animation, closing from the final-entry button, and focus returning to the summary. Native Safari Enter opened the summary; clicking the bottom Show less button closed it and restored focus.
- Reduced-motion preference was emulated inside the disposable test frame: opening and closing were immediate with no running animation. No OS/browser preference was changed.
- At 320px with JavaScript disabled, navigation and volunteering remain visible; native details still open.
- Checked **244 local URLs and fragment targets**, all valid. `node --check assets/js/site.js` and `git diff --check` passed.
- These are desktop Safari checks at mobile viewport widths, not tests on physical iPhone/iPad hardware. Earlier source-review and third-party playback limitations still apply.

Removed the disposable browser test fixture after verification. Kept root HTML URLs and GitHub Pages hosting files stable; grouped styles/scripts under `assets`, project media by project and development records under `docs`. Removed unreferenced media, unused Python/editor configuration, Finder metadata, unused CSS selectors/variables, and obsolete query-string/hash redirects. The website needs no Python virtual environment or package installation. Requirements/source documents are retained as development records, not loaded by the website; figure candidates removed during cleanup may still be mentioned in the archived brief for provenance.

The election-board/poll-worker entry (three service occasions in Cologne, municipal elections 2020 and state election 2022) is based directly on the user's follow-up instruction.


## Restored volunteering fold — 7 October 2026

The subsequent user correction supersedes the fully visible volunteering layout above: the first two entries remain visible and the other six, including election service, sit in a closed “More volunteering (6)” list. Per the prior implementation, the opener disappears while expanded, and the up-chevron close control appears after the final entry. Education, Jobs and Volunteering share this list behaviour; individual CV entry disclosures retain their own summaries. Opening focuses the revealed list; closing restores focus to its opener. All CV rows retain identical 24px vertical padding.

Safari passed nine complete list open/close checks (three lists at 1440, 390 and 320px), including hidden opener, bottom close target, focus restoration, equal padding and no overflow. JavaScript syntax and whitespace checks passed. The temporary fixture was removed.


## Shared project image grid — 7 October 2026

Replaced mixed side-by-side support images, miniature overview images and unrestricted image pairs with shared `case-media-grid` rows below the associated text. Groups have two equal columns on desktop and one below 580px; single figures span the grid. Frames share 320px height (260px on phones), padding, background and border, with `object-fit: contain` to preserve technical evidence. Consecutive service diagrams now share a single two-column grid. The homepage project-card image treatments are unchanged.

Safari checked all six project pages at 1440, 768, 390 and 320 CSS pixels with technical disclosures open: **24/24 layouts passed**. Confirmed shared frame heights, grid containment, image decoding, no page overflow, no image/text overlap and uncropped fitting. Visually inspected the Furpack prototype pair. All local URLs resolve and `git diff --check` passed. Removed the disposable test fixture after verification.


## Larger green image frames and centred Short — 7 October 2026

Changed project-image backgrounds to the homepage's shared sage `#B8CBBD`. Increased media frames from 320 to 440px on desktop and from 260 to 340px on phones, with less padding. Detailed ROS service diagrams now span both grid columns. Increased the portrait video to 360px maximum width and centred it with automatic inline margins.

Safari checked all six project pages at 1440, 390 and 320px: **18/18 passed**, checking green frame backgrounds, shared enlarged heights, loaded images, no page overflow and the Short's centre against its containing section. Visually checked the larger Furpack portrait pair. JavaScript syntax and whitespace checks passed; removed the temporary fixture.


## Native body-control diagram — 7 October 2026

Replaced the Furhat 360 control-flow image with an HTML ordered list of four states, CSS connectors and a decorative SVG return loop. The cards use the shared sage background. Below 800px the diagram becomes a vertical sequence; a text description preserves the return to camera input. The source's unspecified recentering trigger remains explicit. The original source image is retained as supporting material for the archived brief.

Safari passed layout checks at 1440, 768, 390 and 320 CSS pixels: four readable states, no text or page overflow, correct background and responsive direction. Visually verified desktop connectors and the return loop. Removed the disposable fixture and stopped the local preview after verification. `git diff --check` passed.


## English project diagrams and new camera screenshot — 7 October 2026

Moved the newly supplied camera screenshot to `assets/projects/harvesting-robot/autonomous-harvesting-robot-camera-target-detections.png` and placed it left of the rover in the overview. Removed the old detection example from the implementation section. Rebuilt the sensing comparison and vision architecture as full-width responsive HTML diagrams with English labels and shared sage panels. Replaced the Cobot IK raster with two scalable, English-labelled geometry sketches and explanatory text. The IK redraw is schematic rather than a reproduction of the source's equation sheet.

Rebuilt the retrieval comparison as two accessible HTML heatmap tables, retaining all 36 timing cells, 12 rounded distance means and both overall means from the source. English labels and decimal points replace German notation; mobile tables stack. Original source figures remain supporting documentation assets.

Safari passed eight layout checks (both pages at 1440, 768, 390 and 320px): images loaded, no page/diagram overflow. Visual checks confirmed the screenshot's left-hand position, full-width architecture, and readable mobile IK and timing tables. Corrected wrapped mobile table labels/numbers and the inherited last-row text colour during visual review. All local references in both pages resolve; `git diff --check` passed. Removed the temporary fixture and stopped the preview server.


## Public media filenames and refreshed CV — 7 October 2026

Confirmed that the user-replaced CV differs from the checked-in version. Linked that existing replacement as `anton-kuehr-cv-and-portfolio-2026.pdf` with a content-based URL version (`13226aff5355`), replacing the old `cv-portfolio.pdf` URL. Renamed 33 public media files to descriptive person/project-and-subject filenames, including all PDF documents, the profile/work photos, generic project images and ROS service diagrams. Existing descriptive filenames remain. Updated HTML, social-preview image URL and documentation references.

Verified byte-for-byte preservation of all renamed files, including the new CV. All 207 local file references across the eight HTML pages resolve. JavaScript syntax and `git diff --check` passed.

## Source-preserving engineering figures — 7 October 2026

Supersedes the simplified redraws documented above. Replaced the Cobot geometry with articulated top/side SVG views and six source equations in MathML. Rebuilt harvesting sensing as one comparative schematic and hardware as connected information/control, 12 V and 5 V networks with encoder feedback. Both schematics have phone-specific layouts. The timing tables retain all source values and means, use one continuous shared scale, thin separators and English labels, and align on desktop / stack on phones. Removed the unused simplified-diagram CSS.

Rendered and reviewed COBOT Figure 18 (p. 31) and HARVEST Figures 1–3 (pp. 3, 5, 7), then compared all replacements beside their originals in Safari. Checked desktop and 320px phone visuals, including power/feedback routes, geometry, MathML and timing cells. Adjusted a mobile wrist/height label overlap and routed the rover/ball line away from desktop labels. Source equations, including the unusual printed b expression, remain literal.

Safari responsive checks passed **10/10**: both pages at 1440, 1024, 768, 390 and 320 CSS pixels. No page, figure heading, equation or timing-table overflow; all images decoded. All six equations remained present at each width. A local audit verified all 36 timing cells, 12 row means and two overall means against the source, parsed all eight SVGs, and resolved all 217 local HTML file references. `git diff --check` passed. Removed the disposable review fixture and stopped the owned preview server after verification. No deployment performed.


## ROS translations and portfolio layout refinements — 07/10/2026

Translated all four source ROS 2 service diagrams to inline English SVG, preserving source process/decision/join counts and control paths. Desktop and phone variants retain every branch, assignment and loop. Safari checks at 1440, 1024, 768, 390 and 320 pixels found four visible diagrams at each width, no horizontal page overflow and no process text outside its node or SVG viewBox.

Added the About me portfolio anchor and card hover/focus text colours; removed the bottom Demonstration resource links. Shared project facts now use a quiet background panel without horizontal rules. Harvesting camera and rover share a sage frame, with a smaller rounded screenshot and larger robot; the homepage uses the same screenshot. Furpack starts with the final design PDF preview, retaining the old supplier sample in Additional prototype evidence. Audio and 360 hero images use their homepage assets; the built 360 mechanism sits beside exploded CAD. BSc course context and contributions were updated as requested. Election months verified against Cologne’s official results publication.

Safari responsive audit: 28/28 page-width combinations passed (seven pages at 1440, 768, 390 and 320 pixels), with no horizontal page overflow or failed image decodes. Visually reviewed desktop and phone harvesting layouts, Furpack final PDF preview and the homepage camera thumbnail. All local HTML media/link references resolve, and `git diff --check` passes. Phone checks use Safari at phone CSS widths rather than a physical iPhone. Disposable review fixtures removed after checks. No deployment performed.


## Open project details and unified imagery — 07/10/2026

Replaced the four-column project facts panel with an unboxed vertical definition list: aligned labels and values on desktop, stacked labels on phones, no horizontal rules or tinted panel. Unified the harvesting overview into one figure and one full-size PDF, reused on the homepage. Replaced the Furpack opaque preview with original transparent artwork extracted from the new four-page PDF; changed all final-design links to the new file with a cache hash. Added all four new photos to Prototype iteration photos; HEIC sources were converted to browser-compatible JPEGs.

Safari audit passed 28/28 combinations (seven pages at 1440, 768, 390 and 320 CSS pixels), including the expanded Furpack gallery: no horizontal page overflow and every image decoded. Visually inspected the transparent Furpack hero, open project details layout, phone gallery and combined harvesting figure on both home and project pages. Rendered and reviewed the combined PDF; all local HTML references resolve and `git diff --check` passes. The owned preview tab/server and disposable fixture were removed afterward. No deployment performed.


## Matching audio hero, enlarged harvesting unit and project voice — 07/10/2026

Audio now pairs the same Furhat and CAD images as the homepage, with a compact 200 px phone frame. Enlarged the camera screenshot by 18% and rover by 21% within the unchanged shared harvesting document frame, refreshed the rendered preview, and added cache hashes to both asset links. Verified the seven Furpack gallery figures follow the requested prior-index order 4, 5, 6, 2, 7, 1, 3.

Rewrote paper/report attribution as direct descriptions of the author's work across all six project pages, removed visible paper-source paragraphs while retaining full-size figure downloads, and preserved all quantitative data and experimental limitations.

Safari audit passed 12/12 checks for home, audio, Furpack and harvesting at 1440, 390 and 320 CSS pixels: no horizontal page overflow and all images decoded. Visually inspected the enlarged PDF render, matching audio composition on desktop and phone, and the homepage harvesting unit. Verified gallery order and all local links; `git diff --check` passed. Removed the owned preview fixture and stopped the preview server. No deployment.


## Technical figure refinement — 07/10/2026

- Safari SVG geometry checks passed for labels within all diagram canvases and all eight ROS 2 activity/decision layouts, including individual text lines within diamonds.
- Cobot and harvesting pages passed overflow checks at CSS viewport widths 1440, 768, 390 and 320 px with disclosures opened. Phone checks use Safari iframes, not physical iOS devices.
- Visually reviewed desktop sensing/hardware layouts and actual 390 px project-page layouts for sensing and IK.
- Exact pre/post comparison preserved all MathML equations, UML process/decision text, connections, merges, loops and terminals, and the harvesting result figure/data.
- Hardware supply paths are separated from signal lanes; camera target fields and ribbon-cable detail remain in adjacent page text.


## Portfolio follow-ups — 07/10/2026

- Safari layout checks passed for index, cobot, harvesting and Furpack at 1440, 390 and 320 CSS px, with disclosures opened (12/12).
- Restored organisation images decode successfully. All technical SVG labels fit their canvases; reviewed compact logo placement and the coloured IK coordinate inset on the actual 390 px page layout.
- Furpack bottom navigation is outside all disclosures; HTML disclosure nesting is balanced.
- Hardware signal and power figures now have separate desktop/mobile SVG assets. Component pictograms follow the original camera, boards, rover, arm, motor, encoder, fan and battery illustrations.
- Missing saved organisation logos: Gymnasium Kreuzgasse, Lern-Fair, Enactus Köln, Dachzeltnomaden, Senioren Herz Jesu and City of Cologne.


07/10/2026 logo and IK layout follow-up: Safari checks passed for index, cobot, harvesting robot and Furpack at 1440, 390 and 320 CSS px, with disclosures expanded. All organisation logos decoded; SVG text remained within each canvas. IK views use separate sage frames; side-view axes moved to the top right without reversing the coordinate convention. Phone checks use Safari iframe widths, not physical iOS hardware.


07/10/2026 copy refinement: all seven content pages passed Safari layout checks at 1440, 390 and 320 CSS px (21 combinations), including expanded disclosures. Verified local resource destinations, uniform project fact labels, date separators and MathML parsing. Visually reviewed the implementation-verified IK equations in the phone layout. Source checks used the local arm service, Cobot report Figure 18, harvesting methodology/results and audio thesis schedule. Existing structure and media retained; tutor disclosure removed because it repeated the summary.


Typography review (08/10/2026): consolidated the site into supporting text (14 px), body/navigation (16 px), item headings/wordmark (20 px), section headings (24 px), and responsive page titles (32–48 px). Space Grotesk is reserved for headings/identity; Inter for reading and controls. CSS parsing, local asset references and whitespace checks passed. Safari visual review was interrupted by concurrent browser use and was not completed.
