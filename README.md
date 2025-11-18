# @averay/reset

A somewhat-opinionated SCSS-based CSS reset & normalisation.

---

## Recommendations

### Forms

- Set `dir="auto"` on `<input>` and `<textarea>` elements to natively support both left-to-right and right-to-left languages ([see more](https://mough.xyz/312/psa-add-dirauto-to-your-inputs-and-textareas/)).

## Known Issues

### Forms

- Webkit `<select>` elements do not match other input heights.
- Desktop Webkit `<select>` elements retain browser styling & background. Use `appearance: none` to override this, however a replacement picker icon must then be implemented.

Consider using [customisable `<select>` elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) if supported enough.
