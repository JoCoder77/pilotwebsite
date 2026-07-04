---
name: Aero Precision
colors:
  surface: '#fbf8fd'
  surface-dim: '#dcd9de'
  surface-bright: '#fbf8fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7ec'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1f'
  on-surface-variant: '#46464f'
  inverse-surface: '#303034'
  inverse-on-surface: '#f3f0f4'
  outline: '#767680'
  outline-variant: '#c6c5d0'
  surface-tint: '#535b8b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0e1744'
  on-primary-container: '#7881b3'
  inverse-primary: '#bbc3fa'
  secondary: '#0051d3'
  on-secondary: '#ffffff'
  secondary-container: '#2c6bf4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001b3d'
  on-tertiary-container: '#4284e0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#bbc3fa'
  on-primary-fixed: '#0e1744'
  on-primary-fixed-variant: '#3b4472'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#00174a'
  on-secondary-fixed-variant: '#003ea6'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#a9c7ff'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#00468c'
  background: '#fbf8fd'
  on-background: '#1b1b1f'
  surface-variant: '#e4e1e6'
  surface-subtle: '#F8F8F8'
  aviation-blue: '#005EB8'
  action-blue: '#2969F2'
  midnight: '#06103D'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 48px
---

## Brand & Style

This design system embodies the authoritative, high-trust visual language of a global leader in aviation and defense. It is built on a foundation of **Corporate Modernism**, emphasizing precision, safety, and technological excellence. 

The aesthetic is defined by a rigorous adherence to grid structures, generous whitespace to allow complex information to breathe, and a focused color palette that signals stability. The mood is professional and institutional yet forward-looking, utilizing large-scale imagery and sharp, clear typography to convey a sense of scale and infinite possibility.

## Colors

The palette is anchored by "Midnight," a deep navy that provides the necessary weight for a high-trust brand. This is contrasted against "Action Blue" for primary interactions and "Aviation Blue" for brand accents.

- **Primary (Midnight):** Used for text, navigation backgrounds, and structural elements to establish authority.
- **Secondary (Action Blue):** Reserved for primary calls-to-action and critical interactive states.
- **Neutral:** A stark white background is standard, supported by a subtle grey (`#F8F8F8`) for section alternating and card backgrounds to maintain a clean, organized hierarchy.

## Typography

The typography utilizes **Hanken Grotesk**, chosen for its sharp, technical precision and contemporary feel. It replaces the source's Red Hat Display with a more refined, geometric alternative that excels in professional environments.

- **Scale:** Use tight tracking on large display headers to create a "locked-in" architectural feel. 
- **Readability:** Body text maintains a comfortable line height (1.5x) to ensure clarity in technical documentation and news releases.
- **Emphasis:** Labels use a subtle uppercase treatment with increased letter spacing to differentiate metadata from body content.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop screens to ensure a consistent, premium editorial look.

- **Grid:** A 12-column grid with 24px gutters. Elements should align strictly to these columns to reinforce the sense of "Precision Engineering."
- **White Space:** Sections are separated by generous vertical padding (`stack-lg`) to prevent information density from overwhelming the user.
- **Responsive Behavior:** On mobile, margins shrink to 20px and the 12-column layout collapses to a single column. Horizontal scrolling is permitted for data tables and specific card carousels.

## Elevation & Depth

To maintain a clean and professional appearance, this system avoids heavy shadows. 

- **Flat Layering:** Depth is primarily conveyed through "Tonal Layers." Use the `#F8F8F8` neutral background to define container areas against the white page background.
- **Low-Contrast Outlines:** Use 1px solid borders in a light grey (`#E0E0E0`) for cards and input fields.
- **Subtle Interaction Shadows:** Only apply shadows on hover states for interactive cards. These should be "Ambient Shadows"—highly diffused (20px-30px blur), low opacity (10%), and slightly tinted with the primary blue to maintain color harmony.

## Shapes

The shape language is conservative and structural. Elements use "Soft" roundedness (4px) to take the edge off the technical feel without becoming playful or casual.

- **Buttons & Inputs:** 4px border radius.
- **Cards:** 8px border radius (`rounded-lg`) to provide a clear container for imagery.
- **Media:** Photography should always be rectangular with the standard 8px radius; avoid circular crops except for small avatar icons.

## Components

### Buttons
- **Primary:** Solid `#2969F2` background with white text. High-contrast, no gradient.
- **Secondary:** Transparent background with a 2px `#06103D` border.
- **Iconography:** Use a simple right-pointing arrow (`→`) in button labels to indicate progression.

### Cards
- Cards feature full-bleed imagery at the top with a subtle gradient overlay at the bottom to ensure white text remains legible. 
- Text content within cards should be left-aligned, following the grid's vertical rhythm.

### Inputs & Forms
- Input fields use a white background, 1px grey border, and 4px radius. 
- Focus states must use a 2px "Action Blue" border to clearly indicate user position.

### Navigation
- Global navigation utilizes a "Midnight" background with white text. 
- Search and Sign-in functions are grouped to the right, utilizing clear icons for quick recognition.