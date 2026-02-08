# Specification

## Summary
**Goal:** Add a simple Yes/No interaction on the final “Will You Be My Valentine?” carousel slide.

**Planned changes:**
- Update the final slide in `frontend/src/App.tsx` to render two CTA buttons inside the message card: “Yes” and “No”.
- On “Yes” click, replace the final slide’s question content with a thank-you loving message that includes the exact phrase “you are forever mine”.
- On “No” click, show an English message explaining that selecting “No” is not a real choice, then re-show only the “Yes” button (hide “No” after it’s clicked).

**User-visible outcome:** On the last slide, the user can press “Yes” or “No”; “Yes” shows a loving thank-you message (“you are forever mine”), and “No” shows a playful message and then leaves only the “Yes” option.
