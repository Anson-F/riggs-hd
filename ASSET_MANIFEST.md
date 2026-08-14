# Asset Production Manifest

Inline asset-producer substitution: this manifest follows the Impeccable degraded asset-producer contract because the current task does not authorize a separate production agent.

## Produce

| id | source_crop | output_path | strategy | prompt_used | dimensions | format | transparency | deviations | qa_status |
|---|---|---|---|---|---:|---|---|---|---|
| `manila-paper` | approved comp `.impeccable/mocks/home/option-a.png` | `public/textures/manila-paper.png` | faithful clean-plate material generation; CSS owns all seams, tabs, shadows, type, and perspective | embedded in PNG metadata | 1254×1254 | PNG | opaque | warmer than the comp base; corrected in CSS with a restrained cream overlay | accepted |

## Direct

| id | source_crop | output_path | strategy | dimensions | format | transparency | deviations | qa_status |
|---|---|---|---|---:|---|---|---|---|
| `hero-gym` | Wix original | `public/images/original/home-hero.jpg` | ship supplied high-resolution source; CSS controls grayscale/crop | 2250×1553 | JPEG | opaque | none | accepted |
| `founder-portrait` | Wix original | `public/images/original/founder-profile.jpeg` | ship supplied portrait; CSS owns tape/crop/frame | 640×960 | JPEG | opaque | none | accepted |
| `program-huddle` | Wix original | `public/images/original/about-program.png` | ship supplied program photo | 1037×666 | PNG | opaque | none | accepted |
| `students-gym` | Wix original | `public/images/original/project-10.jpg` | ship supplied program photo | 4032×3024 | JPEG | opaque | none | accepted |
| `pacers-visit` | Wix original | `public/images/original/home-action-3.jpg` | ship supplied program/event photo | 1170×779 | JPEG | opaque | none | accepted |
| `graduation` | Wix original | `public/images/original/founder-graduation.jpg` | ship supplied education photo | 1170×977 | JPEG | opaque | none | accepted |
| `program-reel` | Wix original | `public/videos/original/program-reel.mp4` | lazy-loaded native video with poster and controls | 1080p source | MP4 | opaque | none | accepted |

## Semantic

| id | implementation | notes | qa_status |
|---|---|---|---|
| `global-nav` | `SiteHeader`: semantic `header/nav`, route links, button, authored menu SVG, responsive drawer | No raster chrome | accepted |
| `hero-copy` | semantic `h1`, paragraph, and action links over the source photograph | Copy remains selectable and responsive | accepted |
| `court-path` | authored SVG path plus CSS current-stage segments; ordered-list fallback | Reduced-motion mode keeps final path visible | accepted |
| `dossier` | layered semantic sections using the paper texture; CSS clip-path tabs, soft shadow, and physical seams | No screenshot crop | accepted |
| `whiteboard` | semantic list in a ruled CSS frame | Only verified program categories | accepted |
| `future-pennant` | semantic text inside CSS clip-path geometry | No image generation | accepted |
| `tape` | CSS pseudo-elements with translucent neutral fill and blend mode | Presentation only, no texture claim | accepted |
| `pathway-rail` | ordered list with named stages and keyboard-readable anchors | Becomes horizontally scrollable/stacked on mobile | accepted |
| `icons` | Lucide SVG icons with one stroke system | No Unicode glyphs | accepted |

## Execution order

1. Generate and visually inspect `manila-paper`.
2. Verify all direct media opens and retains usable dimensions.
3. Build semantic layers against the approved comp.
4. Inspect desktop and mobile composition together.

## Blockers

None.

## Assumptions

- Existing public Wix media is authorized source material for this rebuild.
- CSS may create geometric seams, tabs, and translucent tape because these are presentation shapes, not image-native textures.
- Generated concept copy is excluded unless independently verified.
