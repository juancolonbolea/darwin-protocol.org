import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://darwin-protocol.org',
  integrations: [
    starlight({
      title: 'DARWIN Protocol',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/juancolonbolea/darwin-protocol.org' },
      ],
      customCss: [
        './src/styles/global.css',
        './src/styles/spec.css',
        'katex/dist/katex.min.css',
      ],
      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'Overview', slug: 'about' },
            { label: 'Mission', slug: 'about/mission' },
            { label: 'Mechanism', slug: 'about/mechanism' },
            { label: 'Algebra', slug: 'about/algebra' },
            { label: 'Architecture', slug: 'about/architecture' },
          ],
        },
        {
          label: 'Specification',
          items: [
            { label: 'Overview', slug: 'specification' },
            {
              label: 'Primitives',
              items: [
                { label: 'Overview', slug: 'specification/primitives' },
                { label: 'P1 — Edge', slug: 'specification/primitives/p1-edge' },
                { label: 'P2 — Trust', slug: 'specification/primitives/p2-trust' },
                { label: 'P3 — Confidence', slug: 'specification/primitives/p3-confidence' },
                { label: 'P4 — Matching', slug: 'specification/primitives/p4-matching' },
                { label: 'P5 — Selection', slug: 'specification/primitives/p5-selection' },
                { label: 'P6 — Transparency', slug: 'specification/primitives/p6-transparency' },
                { label: 'P7 — Alignment', slug: 'specification/primitives/p7-alignment' },
                { label: 'P8 — Inversion', slug: 'specification/primitives/p8-inversion' },
              ],
            },
            {
              label: 'Axioms',
              items: [
                { label: 'Overview', slug: 'specification/axioms' },
                {
                  label: 'Existential',
                  items: [
                    { label: 'A1 — Rigged by Access', slug: 'specification/axioms/existential/a1-rigged-by-access' },
                    { label: 'A2 — Merit Visible', slug: 'specification/axioms/existential/a2-merit-visible' },
                    { label: 'A3 — Fair Terms', slug: 'specification/axioms/existential/a3-fair-terms' },
                  ],
                },
                {
                  label: 'Structural',
                  items: [
                    { label: 'A4 — Matching Eliminates Friction', slug: 'specification/axioms/structural/a4-matching' },
                    { label: 'A5 — Surplus Compounds', slug: 'specification/axioms/structural/a5-surplus-compounds' },
                    { label: 'A6 — Collective Credibility', slug: 'specification/axioms/structural/a6-collective-credibility' },
                    { label: 'A7 — Double Recurrence', slug: 'specification/axioms/structural/a7-double-recurrence' },
                    { label: 'A8 — Independent Standardisation', slug: 'specification/axioms/structural/a8-standardisation' },
                    { label: 'A9 — No Extraction', slug: 'specification/axioms/structural/a9-no-extraction' },
                    { label: 'A10 — Trust Flow', slug: 'specification/axioms/structural/a10-trust-flow' },
                    { label: 'A11 — Three Vectors', slug: 'specification/axioms/structural/a11-three-vectors' },
                    { label: 'A12 — Three-Party Split', slug: 'specification/axioms/structural/a12-three-party-split' },
                    { label: 'A13 — Transparency Inversion', slug: 'specification/axioms/structural/a13-transparency' },
                    { label: 'A14 — Power Inversion', slug: 'specification/axioms/structural/a14-power-inversion' },
                    { label: 'A15 — Intent Conservation', slug: 'specification/axioms/structural/a15-intent-conservation' },
                    { label: 'A16 — Atomic Cycle', slug: 'specification/axioms/structural/a16-atomic-cycle' },
                  ],
                },
              ],
            },
            {
              label: 'Theorems',
              items: [
                { label: 'Overview', slug: 'specification/theorems' },
                { label: 'Core Flywheel (T1-T4)', slug: 'specification/theorems/core-flywheel' },
                { label: 'Exponential (T5-T10)', slug: 'specification/theorems/exponential' },
                { label: 'Inversion (T11-T14)', slug: 'specification/theorems/inversion' },
                { label: 'S-Curve (T15-T17)', slug: 'specification/theorems/s-curve' },
                { label: 'Extraction (T18-T22)', slug: 'specification/theorems/extraction' },
                { label: 'Structural (T23-T28)', slug: 'specification/theorems/structural' },
                { label: 'Extended (T29-T64)', slug: 'specification/theorems/extended' },
                { label: 'Failure Theorems (F1-F9)', slug: 'specification/theorems/failure' },
              ],
            },
            {
              label: 'Proofs',
              items: [
                { label: 'Overview', slug: 'specification/proofs' },
                { label: 'Proof 1 — Exponential', slug: 'specification/proofs/proof-1-exponential' },
                { label: 'Proof 2 — Extraction', slug: 'specification/proofs/proof-2-extraction' },
                { label: 'Proof 3 — S-Curve', slug: 'specification/proofs/proof-3-s-curve' },
                { label: 'Proof 4 — Community Market', slug: 'specification/proofs/proof-4-community-market' },
                { label: 'Proof 5 — Dataset', slug: 'specification/proofs/proof-5-dataset' },
                { label: 'Proof 6 — Linear-Network', slug: 'specification/proofs/proof-6-linear-network' },
              ],
            },
            { label: 'Lean 4 Formalization', slug: 'specification/lean4' },
            { label: 'Cross-Validation Matrix', slug: 'specification/cross-validation' },
          ],
        },
        {
          label: 'Community',
          items: [
            { label: 'Overview', slug: 'community' },
            { label: 'The Movement', slug: 'community/movement' },
            { label: 'The Game', slug: 'community/game' },
            { label: 'Challenges', slug: 'community/challenges' },
            { label: 'Progression', slug: 'community/progression' },
          ],
        },
        {
          label: 'Membership',
          items: [
            { label: 'Overview', slug: 'membership' },
            { label: 'Tokens (INDX & DWX)', slug: 'membership/tokens' },
          ],
        },
        {
          label: 'Research',
          items: [
            { label: 'Overview', slug: 'research' },
            { label: 'Whitepaper', slug: 'research/whitepaper' },
            { label: 'Foundational Document', slug: 'research/foundational' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Overview', slug: 'resources' },
            { label: 'Glossary', slug: 'resources/glossary' },
            { label: 'Downloads', slug: 'resources/downloads' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
