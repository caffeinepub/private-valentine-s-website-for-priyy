# Specification

## Summary
**Goal:** Add a full-screen love emoji + maroon/pink/blue balloon transition animation when the user clicks the “Yes! 💕” button on the final “Will You Be My Valentine?” slide, without changing any other app behavior or visuals.

**Planned changes:**
- Add a React-controlled, full-screen overlay transition that triggers only on clicking the existing “Yes! 💕” button on the final carousel slide.
- Implement floating love emoji elements and balloon-like elements that animate across the screen, ensuring maroon, pink, and blue balloons are all present.
- Block user interaction with the underlying UI during the overlay while keeping the underlying layout visually unchanged, then continue to the existing accepted state (“Forever Yours! 💕” + “Moments💞” CTA) exactly as before.
- Add any needed CSS keyframes/utility classes using the existing Tailwind/CSS approach (e.g., in the existing global styling locations), without touching immutable UI component paths or backend code.

**User-visible outcome:** When the user clicks “Yes! 💕” on the final Valentine slide, a brief full-screen transition of floating love emojis and maroon/pink/blue balloons plays, then the app proceeds to the same accepted state as it did previously.
