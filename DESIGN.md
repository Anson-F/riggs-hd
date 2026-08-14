---
name: Riggs HD
description: Athletic trust becomes a documented path into education, opportunity, and the future.
colors:
  deep-navy: "#031325"
  raised-navy: "#071c33"
  action-blue: "#0756d8"
  action-blue-hover: "#1266f1"
  court-amber: "#f3a529"
  manila-paper: "#f2ede2"
  manila-deep: "#dec38c"
  page-white: "#fcfaf5"
  body-gray: "#66717e"
typography:
  hero:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(5rem, 7.5vw, 8.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6.6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  data:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.1em"
  annotation:
    fontFamily: "Caveat, cursive"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.13
rounded:
  square: "0px"
spacing:
  page-gutter: "4vw"
  control-block: "0.8rem"
  control-inline: "1.55rem"
  section-block: "clamp(6rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.page-white}"
    typography: "{typography.display}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-block} {spacing.control-inline}"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-hover}"
    textColor: "{colors.page-white}"
    typography: "{typography.display}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-block} {spacing.control-inline}"
  input:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.deep-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.95rem 1rem"
---

# Design System: Riggs HD

## Overview

**Creative North Star: "Locker Room → Lecture Hall"**

Riggs HD looks like basketball earned the first conversation and a working advising file carries it forward. The system is direct, documentary, and materially grounded: real gym photography establishes trust while manila stock, taped evidence, ruled forms, and court-line geometry make planning visible.

The density is athletic at the edge and editorial in the reading field. Giant compressed statements establish urgency; simple lists and records make the next move legible. Warm physical surfaces overlap the navy field only when they represent guidance, evidence, or a plan.

**Key Characteristics:**

- Real people and real program settings lead every photographic surface.
- Deep navy carries structure, cobalt carries action, and amber carries the active path.
- Square controls, fine rules, condensed display type, and restrained microtype keep the system decisive.
- Paper, tape, whiteboard ink, and soft offset depth appear only where their real-world meaning is clear.

## Colors

The palette moves between a disciplined locker-room navy and the warm paper of a working student file.

### Primary

- **Action Cobalt:** The sole high-energy action color for Donate, primary buttons, active links, and key figures.

### Secondary

- **Court Amber:** The active stage, route line, focus ring, and occasional structural rule. It signals movement rather than general decoration.

### Neutral

- **Deep Locker Navy:** Global navigation, footers, pathway rails, and high-contrast fields.
- **Raised Navy:** Slightly lighter dark surfaces when one navy plane must separate from another.
- **Manila Paper:** Advising sheets, guidance notes, and physical planning surfaces.
- **Page White:** The reading field and light-on-dark foreground.
- **Body Gray:** Secondary explanatory copy on light surfaces only.

**The One Path Rule.** Cobalt asks for an action; amber shows where the person is on the path. Do not exchange their jobs.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow fallback)  
**Body Font:** Source Sans 3 (with Arial fallback)  
**Label/Mono Font:** IBM Plex Mono  
**Annotation Font:** Caveat

**Character:** The display voice is compressed, tall, and athletic; the body voice is open and humane. Monospace is reserved for dates, statuses, field labels, and measured metadata. Handwriting appears only as a short authored annotation on a real planning surface.

### Hierarchy

- **Hero** (700, responsive oversized scale, 0.92): First-viewport mission statements only.
- **Display** (700, responsive high-contrast scale, 0.92): Page and section headings.
- **Title** (600–700, roughly 1.7–4.6rem): Program names, values, and record titles.
- **Body** (400–600, 17px base, 1.55): Explanations and long-form content; prose stays near a 65–75 character measure.
- **Data** (400, 0.56–0.8rem, wide tracking, uppercase): Status, date, route, and record metadata.

**The Three Voices Rule.** Every interface uses display, body, and data type. Handwriting is evidence-layer annotation, never body copy or a generic personality effect.

## Layout

The default reading container is capped at 1440px with a fluid 4vw gutter. Sections use generous vertical separation; records use ruled rows instead of equal cards. Desktop surfaces favor asymmetric 55/45 or 60/40 compositions with one overlapping physical layer. At 900px those compositions stack; at 620px the gutter becomes 1rem, the mobile menu takes the full remaining viewport, and the five-stage rail becomes horizontally scrollable.

**The Evidence Over Grid Rule.** When content is visual proof, let the photograph or document own the area. Do not reduce real people and program history to repeated thumbnail cards.

## Elevation & Depth

Most structure is flat and separated by navy rules or tonal changes. Shadows belong to physical objects: folders, taped photographs, the whiteboard, and the program reel. They use a visible offset with a soft blur, never a hard zero-blur block.

### Shadow Vocabulary

- **Dossier lift:** A leftward 15px and downward 22px soft shadow separates the advising file from the gym.
- **Field photo lift:** A shallow ambient shadow makes taped evidence feel placed, not floated.
- **Media lift:** A soft downward shadow supports video without imitating a block sticker.

**The Material Earns Depth Rule.** A surface receives shadow only when it represents an object that could cast one in the Locker Room → Lecture Hall world.

## Shapes

The system is overwhelmingly square. Buttons, inputs, navigation fields, records, and notes use zero radius. Physical sheets may rotate by one or two degrees; taped photographs use paper borders and translucent tape. Pennants and pathway turns use exact polygonal geometry. Thin rules do the organizational work that rounded containers usually perform.

## Components

### Buttons

- **Shape:** Rectangular and square-cornered, with a minimum 54px target.
- **Primary:** Cobalt with page-white condensed uppercase type and a small drawn arrow.
- **Hover / Focus:** Hover lifts by 2px and brightens to action-blue-hover; keyboard focus uses a 3px court-amber outline with 4px separation.
- **Ink / Paper / Text:** Dark filled, warm light filled, and underlined text variants retain the same typographic voice.

### Cards / Containers

- **Corner Style:** Square; content records are usually border-separated rows rather than cards.
- **Background:** White for reading, navy for structure, and textured manila only for evidence or guidance.
- **Shadow Strategy:** Soft depth only for physical layers.
- **Internal Padding:** Fluid and generous on dossier sheets; compact on status rows.

### Inputs / Fields

- **Style:** White fill, 1px deep-navy stroke, square corners, and a separate monospace field label.
- **Focus:** The global court-amber outline remains visible outside the field stroke.
- **Error / Disabled:** Use direct recovery copy and preserve the native control semantics; no fake backend state.

### Navigation

The global bar is deep navy with a compressed typographic wordmark, six direct route labels, and a full-height cobalt Donate action. Active desktop routes gain a short amber underline. Mobile navigation becomes a full-height dark field controlled by a drawn menu icon and closes with Escape or route selection.

### Five-Stage Pathway

The ordered rail names Sport, Relationship, Guidance, Opportunity, and Future. Navy is the track, amber marks the current stage, and short vertical ticks separate stages. Desktop reads as one horizontal route; mobile preserves order through horizontal scrolling.

### Advising Dossier

The signature material component layers a generated manila texture with real portrait photography, translucent tape, document tabs, verified program labels, a whiteboard, and a short verified mission note. Copy remains semantic HTML; material effects never replace legibility.

## Do's and Don'ts

### Do:

- **Do** use source photography of participants, mentors, and real program settings.
- **Do** connect sport to a visible next step through route lines, ordered records, or a planning surface.
- **Do** reserve amber for focus, stage, and directional structure.
- **Do** label past programs and unconfirmed dates plainly.

### Don't:

- **Don't** invent statistics, partners, testimonials, dates, scholarships, or outcomes.
- **Don't** build the page from interchangeable rounded icon cards.
- **Don't** use paper texture, tape, handwriting, or shadow without a real evidence or planning role.
- **Don't** place decorative labels above headings; headings carry their own hierarchy.
- **Don't** use hard block shadows, gradient text, Unicode glyph icons, or thick colored side stripes.
