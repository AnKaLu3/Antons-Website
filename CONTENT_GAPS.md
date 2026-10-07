# Content questions for author review

Reviewed 7 October 2026. These notes accompany the local working copy; they are not website content. The pages use the documented evidence and preserve uncertain existing dates rather than inventing answers. Source identifiers are defined in [CONTENT_SOURCES.md](CONTENT_SOURCES.md).

## Personal contributions and current status

| Project / section | Exact question | Current treatment |
|---|---|---|
| Robotic skin, context and metadata | Which design, fabrication, electronics, programming and evaluation tasks did Anton and Fabio each own? | The BSc prototype and results are credited to the team. The author list does not establish a subsystem allocation. |
| Project Echo, separate section | As of what date, what has the skin team built, tested or decided? Is the BSc matrix being reused or only informing the investigation? | Preserves the existing Sep 2026–present period, Skin Team Lead role and stated goals. BSc evidence is not used to claim Echo performance. |
| Cobot, context and metadata | Who owned speech, vision/data, manager/integration, IK/arm control, physical setup and evaluation? The previous working copy said Anton derived the IK. Can that specific contribution be confirmed? | Uses team wording for system work, including IK. Anton remains a named team member; the individual claim is held for review here. |
| Furpack, context and metadata | Which tasks did Anton, Jonathan and the other credited colleague own? What happened after the documented handover, and when? | Preserves Jonathan Majberger Lutz and Lucas Gustavsson and their links. Describes joint development from scratch. Supplier samples and revision documentation are the documented endpoint, with the manufacturer decision pending at handover. |
| Furhat 360, context and metadata | Which mechanical, electrical, software, assembly and test tasks did each teammate own? | Describes joint prototype work rather than allocating ownership from the team list. |
| Harvesting robot, context | Can the report or development record confirm Anton's detector training, the 2,445 self-collected images and Raspberry Pi 5 deployment? | These are preserved from the existing working copy and labelled as its evidence basis in the source record; the three supplied papers do not verify them. |

## Dates and named contributors

| Location | Discrepancy | Question / treatment |
|---|---|---|
| Furhat 360 header and home card | Existing site: June–July 2025. ROT-DECK: 23 May 2025. ROT-REPORT: 27 May 2025 and a two-week development effort. | Confirm Anton's actual project dates and whether later work explains the site period. The existing period is retained; the May development record is explicitly labelled in the case study. |
| Furhat 360 collaborators | Existing site: **Qing Gu**, with the existing LinkedIn destination. ROT-REPORT: **Lesley Gu**. | Confirm whether these identify the same person and the preferred public name. The existing name and link are preserved. |
| Audio / employment dates | Project page: Nov 2025–Mar 2026. Furhat employment thesis phase: Oct 2025–Apr 2026. AUDIO describes nine weeks of thesis work and submission on 27 March 2026. | Confirm whether these denote project, employment and thesis periods respectively. All existing periods are retained with distinct labels; no preparation-period explanation is invented. |
| MSc evidence link | Existing link label says programme structure **2026–2028**, but the retained asset filename is `Program MSc Robotics 2025-2026.png`. | Confirm which cohort the document describes and supply the intended version if different. The original label and destination are preserved. |

## Metrics, methods and engineering limits

| Project / section | Missing evidence or conflict | Current treatment |
|---|---|---|
| Cobot detector | Previous site: approximately 81% **mAP50–95**. COBOT §6.6 p. 28: **81.4% mAP**, without a clear IoU aggregation or evaluation split. | Request the training/evaluation output, dataset split and metric definition. Public copy gives the report's label with its uncertainty, outside the overview, without reconciling the two metrics. |
| Cobot speech feedback | COBOT component description p. 14 differs from the explicit implementation in §6.4 pp. 26–27. | Uses the implementation's prerecorded feedback. Does not claim Whisper synthesised responses. This source inconsistency is recorded, not silently merged. |
| Cobot camera-to-arm conversion | The report supports centre-pixel depth and camera/arm X alignment, but not the full calibration or transform implementation. | Request code/calibration details only for a deeper account. The main page explains the documented high-level conversion. |
| Furpack final dimensions | PACK-TECH1: first sewn prototype 420 × 300 × 265 mm; paper/design stage 460 × 310 × 250 mm. PACK-PRODUCTION repeats the latter rough size. | Keep the stages separate. Confirm final supplier-sample dimensions before adding a final specification. |
| Furpack carry-on envelope | PACK-CONCEPT slide 5: 56 × 36 × 23 cm; PACK-NEEDS / PACK-TECH1: targets around 55 × 40 × 25 cm. | Confirm the intended requirement. No airline approval or single final envelope is claimed. |
| Furpack mass / load | PACK-NEEDS: “total mass” below 3 kg, ideally below 2 kg. PACK-CONCEPT: 5–8 kg goal. PACK-TECH1: 4–10 kg load and 3.5 kg robot. | Clarify empty bag mass versus carried load and stage. No headline mass is published. |
| Furpack protection and packing | Proposed drop/water tests and packing-time targets are not reproducible completed tests in the reviewed records. Qualitative water-resistance observations lack protocol, exposure, count or rating. | Request methods/results if such tests were later completed. No waterproof, drop-protection or timed-packing claim is made. Qualitative pros/cons percentages are not treated as performance scores. |
| Furhat 360 rotation and camera | No validated safe rotation range, cable-management procedure, camera sensing coverage or person-reacquisition result was located. | Confirm what was actually demonstrated. No unlimited rotation or omnidirectional perception is claimed. Recentring's trigger and cable effect remain unspecified. |
| Furhat 360 software and tests | The referenced `face_tracker3` program was not located in the focused folder search. The supplied ServoCore branch selects motor-family registers and gains; this does not establish tracker integration. Cooling, tracking accuracy, latency and durability measurements are absent. | Request later integration code and measurements if available. Public behaviour is sourced to ROT-REPORT/ROT-DECK; wobble causes remain suspected rather than isolated. |
| Harvesting comparison | Existing record gives 18 target positions, 50.9 versus 2.8 s/m and 40% versus 0% failures. Full repetitions per position, failure definition, distance normalisation and statistical outputs were not supplied. | Request the relevant report and underlying data. Retains the existing results as a reported indoor comparison; approximately 18× refers to retrieval time per metre, not physical driving speed. No new p-values or broader zero-failure claim. |
| Optional skin/audio detail | Skin raw threshold data, update rate, exact outer dimensions and audio raw runs are unavailable here. | Needed only for extra quantitative claims or new analyses. No frame rate, uncertainty intervals or new plotted data are invented. |

## Publication decisions before a later deployment

- Confirm which supplied Furpack/360 photographs, supplier sample images and internal excerpts may be public. Inclusion beside the brief authorises local review, not publication.
- Confirm public-use permission for the four extracted AUDIO/COBOT figures listed in the source record. They are proposed excerpts in the local copy, with no entire report added.
- If a thesis/report download is desired later, use an authorised reviewed public version. Check student identifiers, addresses, appendices and correspondence before adding a download.
- Keep supplier contacts, commercial terms, prices, invoices, minimum order quantities, internal Drive recordings and copied codebases out of the website. None were added by this implementation.

These questions do not block the local redesign. They identify what must be resolved before stronger attribution, specifications, updated status or publication of new source material.
