# Love Slides - Production Smoke Test Checklist

Run this checklist after each production deployment to verify core functionality.

## Test Environment

- **Live URL:** `https://<canister-id>.ic0.app` (from deployment output)
- **Browser:** Chrome/Firefox/Safari (latest version)
- **Device:** Desktop and Mobile

---

## Pre-Test Setup

1. Open the live production URL in a fresh browser window (incognito/private mode recommended)
2. Open browser DevTools Console (F12) to monitor for errors
3. Ensure stable internet connection

---

## Test Cases

### ✅ TC-1: Initial Page Load

**Steps:**
1. Navigate to the live URL
2. Wait for page to fully load

**Expected Results:**
- [ ] Page loads within 3 seconds
- [ ] No JavaScript errors in console
- [ ] Background with romantic gradient and hearts visible
- [ ] Header displays "Priyy🦋" with sparkles
- [ ] First message card displays "My Dearest Priyy🦋"
- [ ] Floating hearts animation is visible
- [ ] Footer displays copyright and caffeine.ai attribution

**Data Attributes:** `[data-testid="app-container"]` (if added)

---

### ✅ TC-2: Carousel Navigation - Next Button

**Steps:**
1. Click the "Next" button at the bottom of the message card
2. Observe the message content change

**Expected Results:**
- [ ] Message transitions to "You Are My Everything"
- [ ] Progress dots update (second dot becomes active/wider)
- [ ] "Previous" button becomes enabled
- [ ] No console errors

**Data Attributes:** `[data-testid="carousel-next"]`, `[data-testid="carousel-dots"]`

---

### ✅ TC-3: Carousel Navigation - Previous Button

**Steps:**
1. From the second message, click the "Previous" button
2. Observe the message content change

**Expected Results:**
- [ ] Message returns to "My Dearest Priyy🦋"
- [ ] Progress dots update (first dot becomes active)
- [ ] "Previous" button becomes disabled
- [ ] No console errors

**Data Attributes:** `[data-testid="carousel-previous"]`

---

### ✅ TC-4: Navigate to Final Slide

**Steps:**
1. Click "Next" button repeatedly until reaching the final slide
2. Verify the final slide content

**Expected Results:**
- [ ] Final message displays "Will You Be My Valentine?"
- [ ] Two buttons appear: "Yes! 💕" and "No"
- [ ] Fourth progress dot is active
- [ ] Navigation buttons (Next/Previous) are hidden
- [ ] No console errors

**Data Attributes:** `[data-testid="final-slide"]`, `[data-testid="yes-button"]`, `[data-testid="no-button"]`

---

### ✅ TC-5: Final Slide - "No" Button Interaction

**Steps:**
1. On the final slide, click the "No" button
2. Observe the response

**Expected Results:**
- [ ] Title changes to "Nice Try! 😋"
- [ ] Message text updates to rejection message
- [ ] "No" button disappears
- [ ] "Yes! 💕" button remains visible
- [ ] No console errors

**Data Attributes:** `[data-testid="rejection-state"]`

---

### ✅ TC-6: Final Slide - "Yes! 💕" Button Interaction

**Steps:**
1. Navigate back to the final slide (if needed, use Previous button)
2. Click the "Yes! 💕" button
3. Wait for the transition animation to complete (~3 seconds)

**Expected Results:**
- [ ] Full-screen transition overlay appears immediately
- [ ] Animated love emojis (💕, 🎈, ❤️) float upward
- [ ] Transition completes after ~3 seconds
- [ ] Overlay disappears
- [ ] Title changes to "Forever Yours! 💕"
- [ ] Acceptance message is displayed
- [ ] "Moments💞" button appears (pulsing animation)
- [ ] No console errors

**Data Attributes:** `[data-testid="love-transition"]`, `[data-testid="accepted-state"]`, `[data-testid="moments-button"]`

---

### ✅ TC-7: Navigate to Moments Page

**Steps:**
1. From the accepted state, click the "Moments💞" button
2. Wait for the Moments page to load

**Expected Results:**
- [ ] Page transitions to Moments view
- [ ] Header displays "Our Precious Moments💞"
- [ ] Lovely message card is visible with romantic text
- [ ] Two photos are displayed in a grid layout
- [ ] Photos have gradient borders and hover effects
- [ ] "Back" button with arrow icon is visible at top-left
- [ ] No console errors

**Data Attributes:** `[data-testid="moments-page"]`, `[data-testid="moments-gallery"]`

---

### ✅ TC-8: Return to Carousel from Moments

**Steps:**
1. On the Moments page, click the "Back" button
2. Observe the navigation

**Expected Results:**
- [ ] Page returns to the carousel view
- [ ] Carousel is on the final slide in accepted state
- [ ] "Moments💞" button is still visible
- [ ] No console errors

**Data Attributes:** `[data-testid="back-button"]`

---

### ✅ TC-9: Responsive Design - Mobile View

**Steps:**
1. Open DevTools and switch to mobile device emulation (iPhone/Android)
2. Repeat TC-1 through TC-8 on mobile viewport

**Expected Results:**
- [ ] All elements are properly sized and readable
- [ ] Buttons are easily tappable (min 44x44px)
- [ ] Text is legible without zooming
- [ ] Images scale appropriately
- [ ] No horizontal scrolling
- [ ] Animations perform smoothly

---

### ✅ TC-10: Browser Console Check

**Steps:**
1. After completing all tests, review the browser console

**Expected Results:**
- [ ] No JavaScript errors
- [ ] No 404 errors for assets
- [ ] No CORS errors
- [ ] No React warnings

---

## Test Results Summary

**Date:** _______________  
**Tester:** _______________  
**Live URL:** _______________  
**Browser/Version:** _______________  
**Device:** _______________  

**Overall Status:** ☐ PASS  ☐ FAIL

**Issues Found:**
