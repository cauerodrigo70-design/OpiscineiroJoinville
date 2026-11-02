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

- Import downloaded reviewer images through Lovable asset pointers and match them by confirmed Google author names; keep an initial fallback when an image is unavailable so reviews remain usable without misidentifying people.
- Mount site-wide chrome (floating contact CTA, persistent widgets) in the root route's component next to `<Outlet />`, not inside a page route, so it survives every route; keep brand colors as design tokens in `src/styles.css` instead of hardcoded utility values.
