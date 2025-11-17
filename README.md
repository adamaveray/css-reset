# @averay/reset

A somewhat-opinionated SCSS-based CSS reset & normalisation.

---

## Known Issues

### Forms

- Webkit `<select>` elements do not match other input heights.
- Desktop Webkit `<select>` elements retain browser styling & background. Use `appearance: none` to override this, however replacement select-indicating arrows must then be implemented.

Consider using [customisable `<select>` elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) if supported enough.
