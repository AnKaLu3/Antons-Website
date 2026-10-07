# Source-to-claim record

Reviewed 7 October 2026 against the repository's existing working copy and the supplied local sources. This is an editorial handover document, not text for the public pages. The existing uncommitted changes were used as the baseline; cached public site text was not substituted for them.

## Source register

| ID | Local source | Locations reviewed |
|---|---|---|
| SKIN | `Paper_Taktile_Sensorik_für_kollaborative_Robotik.pdf`, Fabio Elias Jain and Anton Kuehr, *Machbarkeitsstudie zur grossflaechigen taktilen Wahrnehmung in Robotersystemen* | Eight-page paper; mechanism, construction, evaluation and limitations. Printed page = PDF page. Figures on pp. 2, 6 and 8 visually inspected. |
| AUDIO | `Bachelor's Thesis Anton Kuehr (print).pdf`, Anton Karl Ludwig Kuehr, *Investigation of the Influence of Mechanical Microphone Implementation on ASR Performance*, submitted 27 March 2026 | Chapters 5–10 and evaluation tables; original/final implementation and test figures visually inspected. Main-text PDF page = printed page + 10. |
| COBOT | `SIR Abschlussbericht 2025 - Jain, Kühr, Lübken, Sondenheimer, Tolkovets.pdf`, *Kollaboratives Arbeiten - Greifarm und Mensch*, submitted 26 February 2025 | Chapters 4–8, especially implementation, subsystem tests and conclusion. Workflow and IK figures on pp. 27, 29 and 31 visually inspected. Printed page = PDF page. |
| EXISTING | HTML, CSS, JavaScript and media in the current repository at the start of this task | Dates, CV entries and evidence destinations, collaborator names/links, Project Echo role/goals, harvesting claims, authorised existing demo entry points and image treatments. Retention is not independent factual verification. |

FURPACK root: `/Users/antonkuhr/Documents/Arbeit/Furhat/Furpack/`.

| ID | Path relative to FURPACK root | Locations reviewed |
|---|---|---|
| PACK-NEEDS | `Internal docs/Docs 1st iteration/Furpack - A Furhat Backpack.docx`; `Furpack - Needs.xlsx` in that folder | Mission, three colleague interviews, interpreted needs and specifications; workbook Sheet1 C4:D31 and H4:L12. |
| PACK-CONCEPT | `Internal docs/Presentations/Furpack presentation.pptx` | Concept deck, particularly slides 1–5 and 7–13. |
| PACK-TECH1 | `Internal docs/Techpacks/09_16_25_Furpack_techpack.pdf` | Requirements and sewn prototype pp. 1–2; paper design p. 4; external sewn version p. 5; modified bag p. 6. Prototype figures visually inspected. |
| PACK-ITER2 | `Internal docs/Docs 2nd iteration/Furpack 2.docx`; `Techpack 2.xlsx` | Functional improvements; Sheet1 C6:D55, especially loading/support, straps, base/back and zippers. Supplied second-iteration sketch inspected. |
| PACK-COMPARE | `Internal docs/Final selection/Comparisons.xlsx` | Sheet1 B6:D24 and F6:H24, qualitative findings. No pros/cons percentages used as performance data. |
| PACK-HANDOVER | `Internal docs/Final selection/Handover info.docx`; `Techpack GF Bags.xlsx`; `Techpack IdeaLabGZ.xlsx` | Feasible changes, next steps and supplier-specific technical revisions. Commercial/contact information omitted from the repository notes and public copy. |
| PACK-PRODUCTION | `Internal docs/Furpack Production.xlsx` | Requirements B2:B6 only for stage/specification distinctions. The filename is not evidence of a production order. |

ROTATION root: `/Users/antonkuhr/Documents/Arbeit/Furhat/360 Rotation/`.

| ID | Path relative to ROTATION root | Locations reviewed |
|---|---|---|
| ROT-REPORT | `360 Furhat - Report.docx`, 27 May 2025 | Introduction, process, concepts/prototypes, mechanical/electrical/software architecture, demo, challenges and conclusion. Supplied original diagrams and photographs inspected. |
| ROT-DECK | `360 Furhat.pptx`, 23 May 2025 | Slides 6–17 for alternatives, final prototype, electronics, state diagram and limits. |
| ROT-CODE | `furhat-servocore-DynamixelXCMotorAddition-src/src/ServoController.cpp`; `XCMotorConstants.h` | Spot-check of constructor around lines 99–170 and XC constants. XC/MX register, protocol and gain selection does not demonstrate body-tracker integration. No code executed or copied. |

## Robotic skin: `robotic-skin.html`

| Public claim / section | Basis and scope |
|---|---|
| Electrical contact matrix; perforated elastic separator; sequential sender/receiver scanning; two active thresholds plus no contact | SKIN §§2.1–2.3 p. 2 and §§3.3.1–3.3.3 pp. 3–5. Not continuously measured force or conductive pressure-sensitive foam. |
| 8 × 8 / 64 locations, 8 mm pitch, 5 mm tracks, denim, Madeira HC-12 and EVA | SKIN construction §§3.2–3.3 pp. 3–5. Pitch is not a validated localisation error. |
| Arduino, shift registers, pull-downs and protection diodes | SKIN §3.3.3 pp. 4–5. Optional construction notes; no invented scan rate or ghost-free multi-touch claim. |
| Five repeated threshold tests per configuration, rounded 16 mm cube, 2–3 mm separator comparison, 100 mm cylinder test | SKIN §4 pp. 5–7. Results remain feasibility observations under those tests. |
| Thickness above 1 cm, scaling/wiring burden, deformation errors up to 10%, uncertain triggering accuracy; material costs below €10 and approximate 10–100 Pa range in notes | SKIN evaluation/conclusion pp. 6–8. Costs are prototype material costs; thresholds are uncertain and rounded. Maximum bending, durability and whole-body coverage are untested. |
| Third active level reserved only in protocol | SKIN construction/protocol versus completed implementation, pp. 4–5. Not described as a built level. |
| Separate BSc and Echo periods; Skin Team Lead and RoboCup Rescue 2028 goals | EXISTING. The BSc paper does not establish current Echo achievements or adoption of its sensor. |

## Audio: `furhat-audio.html`

| Public claim / section | Basis and scope |
|---|---|
| Nine-week individual thesis; mechanical design, review, consultation, prototyping and automated/statistical evaluation | AUDIO introduction and Chapters 5–10. Existing project and employment periods retained separately. |
| Existing shell/ports/PCB/connection retained; mono interface led to one-side development | AUDIO §5.1 printed pp. 28–30 / PDF pp. 38–40. |
| Original cavity/obstruction and speaker-housing support; shell mounting and defined acoustic path | AUDIO §§5.2–5.3 printed pp. 31–32 / PDF pp. 41–42; §7.1 printed pp. 37–42 / PDF pp. 47–52. |
| Mount A's thin silicone seal; Mount B's compressed foam, PCB enclosure, plug and cable routing; adhesive final mounting; abandoned casting | AUDIO §§7.1.2, 7.2.2–7.2.3 printed pp. 38–45 / PDF pp. 48–55. Not a successfully cast mount or complete mechanical decoupling. |
| Resin/FDM constraints, CAD compensation, PCB orientation, final 1.6 mm diameter × 3.1 mm channel | AUDIO §§7.1.1–7.1.4 printed pp. 37–41 / PDF pp. 47–51. Earlier approximately 0.65 mm pre-study channel was not the final diameter. |
| One male British Harvard List 1 recording / ten sentences; fixed babble noise at 15/10/5 dB; 20 dB no-added-noise baseline; automated Google STT via WebSocket | AUDIO §§8.1.3, 8.2 printed pp. 50–55 / PDF pp. 60–65. 120 simultaneous paired A/B repetitions per condition; 480 paired observations overall, not participants. |
| A/B WER table, overall 18.3% → 16.6%, 1.7 percentage points and reported 9.3% relative reduction | AUDIO §9.1 and Tables 9.1–9.2 printed pp. 59–60 / PDF pp. 69–70. Rounded thesis means; no reanalysis or fabricated error bars. |
| One-sided paired p-values <.001, <.001, .036, .004 and overall <.001 | AUDIO Table 9.2. Main text says p < .05 in every condition; exact values are optional notes. |
| R: 9.5% WER at SNR 5, 60 usable runs only; matching subset for tests; approximately 30 cm closer and different signal chain | AUDIO Tables 9.1, 9.3–9.4 and §9.2 printed pp. 59–61 / PDF pp. 69–71; discussion §§10.1–10.3 printed pp. 63–68 / PDF pp. 73–78. No invented data at other SNRs or microphone-only causal conclusion. |
| Combined design changes, limited room/stimulus/conditions, model-estimated resonance, qualitative isolation, suspected transcript boundaries and muted robot speech | AUDIO §§5.1–5.2, 7.1.5, 10.1–10.3. Not a measured frequency-response shift, isolated cause, quantified isolation gain, echo-cancellation validation or shipped design. |

## Furpack: `furpack.html`

| Public claim / section | Basis and scope |
|---|---|
| Development from scratch, existing colleague credits and period | EXISTING, supplemented by PACK-CONCEPT joint credit. Personal allocation remains unresolved. |
| Three interviews; carry setup alone, lower bulk, protect fragile face and retain robot/accessories; full demonstration load | PACK-NEEDS mission/needs; PACK-CONCEPT slides 1–5. Router/battery provision is a requirement, not built-in power/connectivity. |
| Paper, modified off-the-shelf and custom sewn prototypes answer different questions; curtain fabric/cardboard/simple zippers | PACK-TECH1 pp. 1–6. Qualitative loading/carrying observations are not protection certification. |
| First sewn H420 × W300 × D265 mm exceeded <250 mm depth target because of padding; later externally sewn form still bulky | PACK-TECH1 pp. 1–2 and 5. This size is specific to the early sewn stage. |
| Forehead catches at opening, wider opening/support/retention, shoulder and zipper issues; proposed handle, side laptop access and nets | PACK-ITER2 functional improvements; Sheet1 D7, D16, D26, D29:D48. Proposed revisions are not all claimed manufactured. |
| Sample comparison and suspended sleeve/base grip/padding/seam/cover revisions; manufacturer decision pending | PACK-COMPARE relevant ranges; PACK-HANDOVER revision documents and Next steps. No supplier named in public copy. |
| Samples/revision documents are endpoint; no established launch, final mass, timed packing or certified protection | PACK-HANDOVER, PACK-ITER2 and PACK-COMPARE. Conflicting envelopes/masses recorded in CONTENT_GAPS.md; requirement values are not measurements. |

## Furhat 360: `furhat-360.html`

| Public claim / section | Basis and scope |
|---|---|
| Two-week rotating-base proof of concept; existing website period and colleague credits retained | ROT-REPORT introduction/process and ROT-DECK; EXISTING for June–July and Qing Gu. Exact date/name differences are in CONTENT_GAPS.md. |
| Belt and vertical-wheel physical prototypes, weighted trials, belt selected and wheel lessons reused | ROT-REPORT Initial Concepts / Simple Prototypes; ROT-DECK slides 6–9. No comparative numerical superiority claim. |
| Offset servo beneath NUC, left-side room/airflow constraint, split mount, printed pulley and bearing/axis support | ROT-REPORT mechanical subsections. Repurposed neck bearing not primarily designed for axial robot-weight load. |
| Prototype dimensions: 160 mm × 5 mm baseplate, approximately 3 mm clearance, 200 mm × 6 mm GT2 belt, approximately 18 mm height and 80 mm offset | ROT-REPORT mechanical subsections. Optional construction dimensions, not precision or safety ratings. |
| CamCore User0 3D position → ZeroMQ → yaw → PID velocity; initialisation/tracking/recentring; separate USB controllers and shared 12 V | ROT-REPORT Quick Start, Electrical, Software; ROT-DECK slides 14–15. Existing perception supplied by Furhat. No undocumented recenter trigger/cable guarantee. |
| Working tracking demonstration; cables twist, no new omnidirectional vision; wobble, coordination, access/cooling/durability open | ROT-REPORT Presentation and Demo / Challenges / Conclusion; ROT-DECK slides 16–17. No measured accuracy, speed, lifetime or validated cable range; bearing/axis explanations remain suspected. |
| ServoCore integration not established | ROT-REPORT proposed integration and limited ROT-CODE spot-check. Compatibility work is not evidence that the tracker was integrated. |

## Cobot: `cobot.html`

| Public claim / section | Basis and scope |
|---|---|
| Named team, four-axis Lynxmotion SES-V2, Azure Kinect and lightweight wooden hammer | COBOT p. 1, §§4, 5.7 pp. 13–14, 23; EXISTING links and dates. No personal subsystem allocation inferred. |
| Button-recorded Whisper transcription, GPT-4o bounded task selection, ROS 2 manager, prerecorded feedback | COBOT §§6.3–6.5 pp. 26–28 and Figure 14 p. 27. Four tool tasks plus no match; no arbitrary language-model joint commands. Explicit implementation resolves the conflicting earlier feedback description. |
| Different retrieve/put-away paths; image coordinates plus centre depth; X alignment | COBOT §§6.1, 6.6–6.7.2 pp. 24, 29–30 and Figures 14, 16, 17. The HTML workflow is an editorial summary of these relationships, including failure feedback, not new experiment data. |
| 3,372 annotated public-dataset images, seven iterations, label correction more useful than adding data, reported 81.4% mAP | COBOT §6.6 and Figure 15 p. 28, reference 30 p. 38. No IoU/split relabelling or claim of Anton collecting every image. |
| Geometric IK supplies joint targets; MoveIt still plans trajectories; approximately 40 seconds overall / 6 seconds partial | COBOT §§5.6, 6.7.3–6.7.4 pp. 21–22, 30–32, conclusion p. 36. These are scoped timing observations, not a universal cycle benchmark. |
| Speech 10/10 and 7/10; twenty placements/object and maximum 5 mm deviation; 20/20 exact-coordinate grasps/object; obstructed hammer placement fails | COBOT §5.7 p. 23 and §§7.1–7.4 pp. 33–34. Separate controlled subsystem tests, not an overall 100% success rate. Placement method specifies ten trials/object/condition. |
| Safety/obstacle handling unimplemented, orientation and speed limits | COBOT §§6.2–6.2.3 pp. 25–26, §§7.3–8 pp. 34–36. Functional feasibility prototype, without practical-assistance or safety certification claims. |

## Harvesting robot: `harvesting-robot.html`

All dates, personal detector/deployment claims, hardware names, 2,445 images, 18 target positions, 50.9/2.8 s/m, 40%/0% failures, Welch/Fisher test names and existing figures/demo are based on EXISTING. No harvesting report was supplied or located in the focused source review. The architecture was moved before evaluation; figures retain their original German labels and data. Camera detections inform harvesting behaviour only at the high level established by the existing record. The approximately 18 ratio is explicitly retrieval time per metre; unresolved definitions/counts and attribution are recorded in CONTENT_GAPS.md.

## Media provenance and publication status

Existing project/card assets and authorised demo destinations were retained. Technical figures retain intrinsic aspect ratios, neutral backing where useful and accessible full-size links. No generated technical evidence, inverted CAD, recoloured data or replacement plots were introduced.

Four proposed source excerpts were extracted as original embedded raster data without resizing, cropping or redrawing:

| New local file | Source location |
|---|---|
| `assets/projects/furhat-audio/original-microphone.png` | AUDIO original PCB/foam image, PDF p. 40 / printed p. 30, image `Im30`. |
| `assets/projects/furhat-audio/redesigned-assembly.jpg` | AUDIO final assembly Figure 7.7(d), PDF p. 55 / printed p. 45, `Im62`. |
| `assets/projects/furhat-audio/test-setup.jpg` | AUDIO Figure 8.3, PDF p. 65 / printed p. 55, `Im67`. |
| `assets/projects/voice-cobot/ik-geometry.png` | COBOT Figure 18, p. 31, `Im25`. German source labels preserved. |

Selected supplied files remain in `akrobotics-project-assets/`:

| Files used | Original provenance / development stage |
|---|---|
| `furpack-supplier-sample-open.png`, `furpack-supplier-sample-exterior.png` | `Internal docs/Prototypes/Rick/P1/Furhat Bag Samples [draft sample1].pdf`, pp. 1–2, image X4. Supplier samples, not production. |
| `furpack-paper-mockup.jpg` | `Internal docs/Prototypes/Home made/Paper/IMG_20250721_145228.jpg`. Paper shape/access mockup. |
| `furpack-sewn-prototype-open.jpg` | `Internal docs/Prototypes/Home made/Sewed/IMG_2094.jpg`. Early sewn prototype. |
| `furpack-modified-backpack.jpeg` | `Internal docs/Prototypes/Home made/Functional/IMG_8171.jpeg`. Modified off-the-shelf functional prototype. |
| `furpack-second-iteration-sketch.jpg` | `Internal docs/Docs 2nd iteration/Sketches/Final Sketches/market sketch.jpg`. Design proposal. |
| `furhat-360-built-mechanism.png` | ROT-REPORT `word/media/image22.png`. Assembled mechanism. |
| `furhat-360-belt-concept.png`, `furhat-360-wheel-concept.png` | ROT-REPORT `image21.png`, `image8.png`. Alternative concept sketches. |
| `furhat-360-control-flow.png`, `furhat-360-electronics.png`, `furhat-360-bearing-and-belt.jpg` | ROT-REPORT `image25.png`, `image11.png`, `image18.jpg`. Original control/electrical diagrams and built detail. |

The 360 case study also retains the existing portrait exploded CAD asset `assets/projects/furhat-360/new/final-exploded.png`; no new crop was made. Unused supplied photographs remain available for review rather than being turned into a gallery.

These new excerpts and supplied internal/supplier images are included for **local author review only**. Public-use permission remains an author decision. No entire source report, thesis, private correspondence, commercial workbook, supplier contact, invoice, codebase or internal Drive link was copied or newly linked. No deployment was performed.

## Narrow homepage copy corrections

The portfolio grid, order and image wrappers were preserved. Five card summaries were adjusted: separate skin BSc/Echo work; define the audio gain as relative WER reduction; replace the Furpack typo/generic stage summary with documented deliverables; qualify the 360 mechanism by cable/integration limits; specify harvesting retrieval time per metre instead of physical speed. The Furhat job detail uses the same properly scoped audio WER result. All other protected homepage markup remains the original working-copy content.
