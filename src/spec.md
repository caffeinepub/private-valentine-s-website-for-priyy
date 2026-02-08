# Specification

## Summary
**Goal:** Add a “Moments💞” call-to-action after accepting the Valentine proposal, leading to a new decorated Moments page that shows the uploaded photos reliably in production.

**Planned changes:**
- On the final “Will You Be My Valentine?” slide, after the user clicks “Yes! 💕” and the existing “Forever Yours! 💕” acceptance content appears, add a new clickable option labeled exactly “Moments💞”.
- Create a new “Moments” page/screen (separate from the carousel) that opens when “Moments💞” is clicked and displays the two uploaded images (IMG_20251207_221903_037-2.webp and 20260106_172708-2.jpg) plus a single lovely English message, styled with romantic decorations consistent with the current theme (hearts, soft gradients, card/glass effect).
- Ensure the two uploaded images are included and referenced as frontend static assets so they load in production builds without broken links, and add a clear way to return back to the main Valentine carousel (e.g., a Back button).

**User-visible outcome:** After tapping “Yes! 💕”, the user can tap “Moments💞” to open a new romantic Moments page showing the two uploaded photos and a lovely message, with a clear option to return to the main Valentine screen.
