# Background Gradient Animation

**Design reference:** [Webex Uplift — Momentum Audit (Figma)](https://www.figma.com/design/uMr4dd4YJe2c6cRhirwNIh/Webex-Uplift---Momentum-Audit?node-id=31-43055)
[Update this link.]

[Add reference to Piotr's animation here.]

## Overview

This project defines a **living background treatment** for Webex Uplift: a soft, multi-color **gradient field** that subtly moves—almost **breathing**—behind the shell UI. **This background is tied directly to the Cisco AI Assistant**. As the interaction layer for the AI assistant expands, so too does the gradient. The motion used in the gradient should feel ambient and living, but not distracting.

The gradient **responds to assistant activity**. Distinct visual modes should reflect when the assistant is **idle**, **processing / thinking**, and **engaging the user** (e.g. streaming a response). 

**Delivery** must support **Web, macOS, Windows, iOS, and Android**. The authoritative output is a **motion and visual spec** (states, colors, and timing) plus **per-platform reference implementations**. Where parity is impractical or affects performance, **graceful degradation** (e.g. static gradient, simplified motion) is acceptable.

Per Figma exploration, the canvas uses a **solid color base** (e.g. `#0f0f0f`) with a **diffused, aurora-style glow** (indigo, blue, violet, warm edge tones) anchored toward the **lower-right**.

Motion is a key aspect of the Webex Uplift initiative, and this animation is of utmost importance.

## Problem

- **Disconnected feedback:** Without motion tied to the assistant, users get little **ambient reassurance** during latency, multi-step reasoning, or streaming replies.
- **Static or generic backgrounds:** The experience does not yet fully express **Cisco AI** presence or state at a glance.
- **Fragmentation risk:** Each platform could ship ad hoc gradients and timings, producing **inconsistent brand, motion, and accessibility** behavior across Webex clients.

## Background

- **Design intent:** The background gradient acts as **environmental UI**: always on at low intensity when idle, **amplifying or shifting** when the assistant is active—similar to breathing or a slow aurora.
- **Momentum Design System:** Outputs should align with **design tokens** where possible (see Goals). The monorepo already publishes **`@momentum-design/tokens`** (including gradient definitions) and will supoport new tokens / gradients being created for this effort.

## Goals

1. The detailed design and documentation of an **Authoritative motion spec** — Document the **state machine** (states, transitions, loop behavior), **color stops**, **blur / diffusion**, **timing and easing**, and **z-order** relative to assistant hero content, signed off against **Figma** and product.
2. **Cross-platform delivery strategy** — Publish how **Web, macOS, Windows, iOS, and Android** achieve **visual parity** within agreed tolerance: shared **spec** (and optional shared timing data), plus **platform-specific implementation notes** (e.g. CSS/canvas/WebGL on Web; Core Animation / SwiftUI, Jetpack Compose, WinUI / composition layers on native) and what may **differ** per stack.
3. **Assistant integration contract** — Define a stable mapping from **product/engineering signals** (e.g. idle, waiting, processing, streaming response, error) to **visual states** so all clients wire behavior consistently.
4. **Accessibility and performance** — Implement **reduced motion** (`prefers-reduced-motion` and platform equivalents), cap **GPU/CPU** and **frame rate** on reference hardware, and document **mobile battery** expectations.
5. **Momentum alignment** — Use **Momentum design tokens** for base surfaces and gradient-related color where they apply; record **exceptions** when marketing or Webex-specific hues require non-token values.

## Non-Goals

- Mandating a **single Lottie (or other) file** as the sole deliverable for every platform unless design and engineering **explicitly validate** that approach for this gradient complexity.

## Users

- **End users** — People using Webex with the Cisco AI Assistant who benefit from clear, calm feedback without distraction.
- **Implementers** — Engineers shipping **Web, macOS, Windows, iOS, and Android** clients; **design QA** validating parity.
- **Design system consumers** — If the pattern is generalized, **Momentum** maintainers and contributors consuming **`@momentum-design/tokens`** / **`@momentum-design/animations`**.

## Requirements

### Visual and motion

- Match **Figma and Demo Animation** within agreed tolerance.
- Implement **at least** behavioral modes outlined in design spec.

### Cross-platform

- Ship a **written spec** (and optionally **machine-readable timing**, e.g. shared JSON) consumable by all stacks.
- Define **acceptance criteria per platform** (reference devices, allowed deviation for blur/shaders).
- Provide **graceful degradation** rules when full shader or mesh motion is unavailable.

### Technical

- Prefer **token-driven** colors from **`@momentum-design/tokens`** for surfaces and gradients; document **hard-coded** or **brand-extended** stops where tokens do not yet exist.
- Target **60 fps** on reference devices; allow **30 fps** or **static** fallback on low-end or under thermal throttling.

### Accessibility

- **Reduced motion:** Provide a non-animated or minimally cross-fading variant; never rely on motion alone for critical **status** (WCAG **2.3.3** intent—animation from interactions).

## Cross-platform delivery (summary)

| Layer | What is shared | What may vary by platform |
| ----- | --------------- | ------------------------- |
| Spec | States, durations, easing curves, color stops, layering rules | — |
| Assets | Optional shared raster/vector **reference** only if validated | Encoding, resolution |
| Runtime | — | CSS vs. canvas/WebGL vs. native shaders; battery/thermal policies |

## Timeline

| Phase | Deliverable | Target |
| ----- | ----------- | ------ |
| A | Spec + state diagram sign-off (design + PM + engineering) | TBD |
| B | Web reference implementation + design QA | TBD |
| C | Native pilots (order by business priority) | TBD |

## Success Metrics

- **Qualitative:** Design **QA sign-off** on each shipped platform against Figma; PM sign-off on **assistant-to-visual state mapping**.
- **Quantitative (where instrumented):** Meet agreed **frame-time / CPU** budgets on reference devices; **reduced-motion** path verified on Web and at least one native platform.

## Open Questions

- **Implementation medium:** Per platform—CSS-only, canvas/WebGL, **Metal/Core Animation**, **Compose**, **WinUI**—which combination meets fidelity and **battery** goals?
- **Theme variants:** Do **light**, **high-contrast**, or **brand** modes require separate gradient specs beyond the current **dark** exploration?
- **Packaging in Momentum:** Should a canonical asset or spec live in **`@momentum-design/animations`** (today oriented to **Lottie/SVG** per [`packages/assets/animations`](packages/assets/animations/)), remain **Webex-only**, or stay **spec-only** with clients embedding implementations?
- **Offline / low-power:** Behavior when the device is **low battery** or **restricted performance**.
- **Exact motion curves and cycle lengths** for the idle “breathing” loop vs. Figma stills—confirm with motion design.

## Stakeholders

**Owners**  
Piotr Ploch - Designer
Trip Carroll - Momentum Lead

**Keep in the loop**  
Webex Uplift Stakeholders
