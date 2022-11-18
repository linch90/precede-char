# PrecedeChar

A angular directive to put a specified char before the inputing text.

**Module**

```typescript
import { PrecedeCharDirectiveModule } from "@linch90/precede-char-directive";
```

**Selector**

_input[precedeChar],textarea[precedeChar]_

# Example

Precede the inputing text with '-' char.

[Stackblitz](https://stackblitz.com/edit/precede-char)

```html
<input
  type="text"
  id="precede-char-input"
  class="form-control"
  precedeChar="-"
/>
```
