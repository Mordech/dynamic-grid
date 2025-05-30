import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import {
  calcColumns,
  convertUnit,
  getHorizontalGap,
} from '@mordech/dynamic-grid-core/lib';
import styles from '@mordech/dynamic-grid-core/lib/core.scss?lit';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';

export interface ScrollProps {
  hint?: number;
  hideScrollbar?: boolean;
  rows?: number;
  scrollSnapAlign?: 'start' | 'center' | 'end' | 'none';
}

@customElement('mrd-dynamic-grid')
class MrdDynamicGridElement extends LitElement {
  static styles = [styles];

  @property({ type: String })
  minColumnWidth: string = '200px';
  @property({ type: String })
  gridType: 'auto-fill' | 'auto-fit' = 'auto-fill';
  @property({ type: Boolean })
  shrink: boolean = true;
  @property({ type: String })
  gap: string | undefined;
  @property({ type: Number })
  maxColumns: number | undefined;
  @property({ type: Number })
  dividedBy: number | undefined;
  @property({ type: Object })
  scrollOptions: ScrollProps | undefined;
  @property({ type: Boolean })
  isScroll: boolean | undefined;

  private get repeatCount() {
    return this.maxColumns || this.dividedBy || this.isScroll
      ? this.getColumns()
      : this.gridType;
  }

  public gridRef: Ref<HTMLDivElement> = createRef();

  private _resizeController = new ResizeController(this, {});

  render() {
    const styles = {
      '--dg-repeat-count': this.repeatCount,
      '--dg-min-width': this.minColumnWidth,
      '--dg-gap': this.gap,
      '--dg-gap-inline': this.gap ? getHorizontalGap(this.gap) : undefined,
      '--dg-scroll-hint': this.scrollOptions?.hint,
      '--dg-scroll-snap-align': this.scrollOptions?.scrollSnapAlign,
      '--dg-scroll-rows': this.scrollOptions?.rows,
    };

    const classes = {
      'dg-is-scroll': !!this.isScroll || !!this.scrollOptions,
      'dg-is-scrollbar-hidden': !!this.scrollOptions?.hideScrollbar,
      'dg-is-shrink': !!this.shrink,
    };

    return html`
      <div
        part="grid"
        ${ref(this.gridRef)}
        class="dg-grid ${classMap(classes)}"
        style=${styleMap(styles)}
      >
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.updateComplete.then(() => {
      this._resizeController.observe(this.gridRef.value!);
    });
    this.classList.remove('dg-is-loading');
  }

  getColumns() {
    return calcColumns({
      elementWidth: this.gridRef.value?.clientWidth || this.offsetWidth,
      minWidth: convertUnit(this.minColumnWidth, 'px'),
      gap: this.gap ? convertUnit(getHorizontalGap(this.gap), 'px') : undefined,
      dividedBy: this.dividedBy,
      maxColumns: this.maxColumns,
      scrollHint: this.scrollOptions?.hint,
    });
  }
}

export { MrdDynamicGridElement };

declare global {
  interface HTMLElementTagNameMap {
    'mrd-dynamic-grid': MrdDynamicGridElement;
  }
}
