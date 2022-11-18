import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[precedeChar],textarea[precedeChar]',
})
export class PrecedeCharDirective {
  @Input() precedeChar: string | undefined;

  private getCaret(el: any) {
    return {
      start: el.selectionStart,
      end: el.selectionEnd,
    };
  }

  private setCaret(el: any, start: number, end: number) {
    el.selectionStart = start;
    el.selectionEnd = end;
    el.focus();
  }

  private convertValue(el: any, value: string) {
    el.value = this.precedeChar + value;
  }

  @HostListener('input', ['$event.target', '$event.target.value'])
  onInput(el: any, value: string): void {
    if (this.precedeChar && this.precedeChar.length > 1) {
      throw new Error('precede char, not a string!');
    }
    this.precedeChar =
      !this.precedeChar || this.precedeChar === '' ? '-' : this.precedeChar;
    let { start, end } = this.getCaret(el);
    if (value && value.length > 0 && value[0] !== this.precedeChar) {
      el.precedeCharConverted = true;
      this.convertValue(el, value);
    } else {
      if (el.precedeCharConverted) {
        el.precedeCharConverted = false;
        start++;
        end++;
      }

      this.setCaret(el, start, end);
    }
  }
}
