**Design QA: MaintGrid Entry Sequence**

Source visual truth: `/Users/prajaktagaikwad/.codex/generated_images/019f4c1f-be6f-7d51-8a63-42aa2199ac7e/exec-ffd40cd2-34f6-4482-aa39-b248c1cbf099.png`

Implementation: `http://localhost:4173/index.html`

Implementation screenshots:
- Initial desktop: `/tmp/maintgrid-entry-qa/qa-entry-desktop.png`
- Final desktop state: `/tmp/maintgrid-entry-qa/qa-entry-final-state.png`
- Mobile: `/tmp/maintgrid-entry-qa/qa-entry-mobile.png`
- Existing-hero handoff: `/tmp/maintgrid-entry-qa/qa-entry-handoff.png`
- Normalized comparison: `/tmp/maintgrid-entry-qa/qa-entry-comparison.jpg`

Viewport and normalization:
- Source: 1680 x 945 px, normalized to 1440 x 810 px.
- Implementation: 1440 x 810 CSS px at device pixel ratio 1; screenshot 1440 x 810 px.
- Mobile verification: 390 x 844 CSS px at device pixel ratio 1.
- State: initial operation active for full-view comparison; final operation and homepage handoff tested separately.

**Findings**
- No actionable P0, P1, or P2 differences remain.
- Typography: existing Space Grotesk and Inter brand pair is preserved. Headline, time labels, and compact operational labels maintain the target hierarchy without introducing a third font.
- Spacing and layout: full-viewport framing, left routine rail, right evidence panel, persistent controls, and bottom progress line match the source composition. No horizontal overflow was detected at desktop or mobile.
- Colors and tokens: MaintGrid charcoal, lime, and cyan tokens are used consistently. Active, pending, live, and data states remain distinguishable with sufficient contrast.
- Image quality: four purpose-built 16:9 industrial scenes use stable WebP backgrounds with controlled crossfades. Crops preserve interface space on the left and operational subjects on the right without video-decoder shimmer.
- Copy: all operational steps, timestamps, evidence, and status text are specific to MaintGrid's asset, work-order, parts, and risk model.
- Interaction: autoplay, cumulative toggle activation, manual state selection, pause/play, skip, final CTA, reduced-motion behavior, and handoff to the unchanged homepage hero were verified.
- Console and assets: no browser warnings or errors; all entry PNG and MP4 requests returned 200/304.

Focused region evidence:
- The routine controls were checked in the manual third-state capture: first three toggles remain on, the parts scene becomes active, and the evidence panel updates to part stock and location.
- The final-state capture confirms all four toggles, the running-line background, the risk reduction record, and the visible Enter MaintGrid CTA.
- The handoff capture confirms the original hero and fixed navigation remain visually and behaviorally unchanged.

**Comparison History**
- P2 mobile viewport gap: the first mobile capture left 24 px below the 820 px intro. Fixed with `max(820px, 100svh)` on the entry and its layout. Post-fix evidence shows an 844 px entry in an 844 px viewport.
- P2 manual-state drift: autoplay could restart while the manually selected row retained focus. Fixed by holding manual selections and switching the sequence control to Play while the active background video continues. The final state remained stable after five seconds.
- P1 background instability: artificial camera motion and video compression caused visible edge jitter on detailed machinery, including after the first loop correction. Replaced all four video layers with stable WebP scenes, removed every media transform and video-decoder dependency, and retained motion only in the clean crossfade between operational states.

**Follow-up Polish**
- P3: real sensor-driven connector traces could be added later when live product telemetry is available; the current motion focuses on the operational sequence and evidence changes.

**Implementation Checklist**
- [x] Desktop and mobile visual pass
- [x] Four background states and cumulative toggles
- [x] Manual and automatic sequence behavior
- [x] Pause/play, skip, and entry CTA
- [x] Existing homepage handoff
- [x] Console and asset checks

final result: passed
