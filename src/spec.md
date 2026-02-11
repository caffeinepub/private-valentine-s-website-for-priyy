# Specification

## Summary
**Goal:** Restore the missing/invalid flying hearts transition so the “Yes! 💕” click reliably shows a visible, animated overlay.

**Planned changes:**
- Fix the “Yes! 💕” click flow on the final slide to always render the existing LoveTransitionOverlay for ~3 seconds, then return to the existing accepted-state content.
- Correct the overlay animation CSS so any transforms using CSS variables have valid resolved values (set required per-element CSS custom properties and/or provide fallbacks) to prevent browsers from dropping the animations.
- Update the lucide Heart SVG sizing in the flying hearts so random sizes are applied via SVG-appropriate sizing (e.g., width/height or component props) instead of `fontSize`.

**User-visible outcome:** Clicking “Yes! 💕” consistently shows a full-screen overlay with clearly visible hearts (plus the existing emojis/balloons) floating upward for about 3 seconds, and the animation works on repeated clicks without intermittently failing.
