# momentum-design

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE) ![state: alpha](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

**Momentum Design** is a monorepo that acts as the single source of truth for the Momentum design system. The goal is to keep **tokens**, **visual assets**, and **UI components** aligned with one design language so product teams can ship consistent experiences. Published libraries ship under the **`@momentum-design`** scope on npm. For interactive examples and guidance, see **[momentum.design](https://momentum.design)**.

This repository also contains **documentation site source**, **internal build tooling** (CLIs and pipelines), and **contributor resources**. Those support the published packages but are not what most applications depend on directly.

## Packages Available

The Momentum team publishes the following packages for consumers via NPM. Each can be versioned and installed independently so you only take what you need.

| Package | Purpose |
| -------- | ------- |
| [**@momentum-design/components**](https://www.npmjs.com/package/@momentum-design/components) | Web Component library (Lit) with React-oriented entrypoints—primary UI building blocks. |
| [**@momentum-design/tokens**](https://www.npmjs.com/package/@momentum-design/tokens) | Design tokens (themes, typography, elevation, motion, and related outputs) for consistent visual decisions. |
| [**@momentum-design/icons**](https://www.npmjs.com/package/@momentum-design/icons) | Icon font and supporting data for UI iconography. |
| [**@momentum-design/illustrations**](https://www.npmjs.com/package/@momentum-design/illustrations) | Illustration assets for product and marketing surfaces. |
| [**@momentum-design/brand-visuals**](https://www.npmjs.com/package/@momentum-design/brand-visuals) | Brand imagery (e.g. logos, backgrounds, device art) aligned with Momentum. |
| [**@momentum-design/fonts**](https://www.npmjs.com/package/@momentum-design/fonts) | Font files and packaging for typography with the system. |
| [**@momentum-design/animations**](https://www.npmjs.com/package/@momentum-design/animations) | Animation assets for motion in the UI. |
| [**@momentum-design/utils**](https://www.npmjs.com/package/@momentum-design/utils) | Shared utilities that support working alongside other `@momentum-design` packages. |

Source for **components** lives under [`packages/components/`](./packages/components/). **Asset** package source lives under [`packages/assets/`](./packages/assets/). Internal tooling (e.g. `md-builder`, `md-token-builder`, Figma plugin, Storybook addon) lives under [`packages/tools/`](./packages/tools/) and powers the builds above; browse the [npm scope](https://www.npmjs.com/search?q=scope%3Amomentum-design) for all published names.

## Consumption

For install commands, version guidance, and non-npm consumption options, see **[CONSUMPTION.md](./CONSUMPTION.md)**.

## Contribution

For how to contribute to this repository—workflow, standards, and package-specific notes—see **[CONTRIBUTING.md](./CONTRIBUTING.md)**.
