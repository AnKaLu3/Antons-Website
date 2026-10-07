# Anton Kühr — Portfolio

Buildless static website, published with GitHub Pages from the repository root.

- Root HTML files: public entry points and project pages; keep their URLs stable.
- `assets/css/` and `assets/js/`: shared styling and navigation/disclosure behaviour.
- `assets/projects/`: portfolio media and retained source figures, grouped by project.
- `assets/site/`: portrait, icons and linked certificates.
- `docs/`: source records, unresolved content questions and compatibility checks.
- `docs/briefs/`: the redesign brief retained as the requirements record.

Preview from this folder with `python3 -m http.server 8765 --bind 127.0.0.1`, then open http://127.0.0.1:8765/.
No installation or build step is required.

Website: https://antonkuehr.github.io/akrobotics/

Public media use descriptive filenames identifying the person or project and the document or image subject. Update every reference when renaming an asset.

The current CV is `assets/site/certificates/anton-kuehr-cv-and-portfolio-2026.pdf`. The homepage link includes a `?v=` value based on the PDF content to avoid serving a cached earlier version. When replacing the PDF, update this value in `index.html` (a new revision value is sufficient).
