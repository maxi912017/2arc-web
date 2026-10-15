<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store uploaded app media as Lovable Assets pointers; place contiguous project photos in equal gapless columns with a shared natural aspect ratio and bottom alignment so their seam and sidewalk remain visible without independent zoom.
- Serve header animation as silent compressed MP4/WebM with explicit muted playback retries, so autoplay restrictions never leave the brand blank. The animated logo is the brand itself: play it regardless of `prefers-reduced-motion` (deliberate exception, decided 2026-10-15 — do not re-add the reduced-motion gate). Pause it on every scroll event and restart from 0 once scrolling is idle for 300ms, so the loop is always seen complete; keep the static poster only as pre-playback and `onError` fallback.
