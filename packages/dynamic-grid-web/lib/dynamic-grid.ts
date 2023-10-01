import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { calcColumns } from '@mordech/dynamic-grid-core/lib';
import styles from '@mordech/dynamic-grid-core/lib/core.scss?lit';
import { convertUnit } from '@mordech/dynamic-grid-core/lib/utils/unit-converter.js';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';

interface ScrollProps {
  hint?: number;
  hideScrollbar?: boolean;
  rows?: number;
  scrollSnapAlign?: 'start' | 'center' | 'end' | 'none';
}

@customElement('mrd-dynamic-grid')
export class MrdDynamicGridElement extends LitElement {
  static styles = [styles];

  @property({ type: String })
  minColumnWidth: string = '200px';
  @property({ type: String })
  gridType?: 'auto-fill' | 'auto-fit';
  @property({ type: String })
  gap?: string;
  @property({ type: Number })
  maxColumns?: number;
  @property({ type: Number })
  dividedBy?: number;
  @property({ type: Object })
  scrollOptions?: ScrollProps;
  @property({ type: Boolean })
  isScroll?: boolean;

  private get repeatCount() {
    return this.maxColumns || this.dividedBy || this.isScroll
      ? this.getColumns()
      : this.gridType;
  }

  private resizeController = new ResizeController(this, {});
  private gridRef: Ref<HTMLDivElement> = createRef();

  render() {
    const styles = {
      '--dg-repeat-count': this.repeatCount,
      '--dg-min-width': this.minColumnWidth,
      '--dg-gap': this.gap,
      '--dg-scroll-hint': this.scrollOptions?.hint,
      '--dg-scroll-snap-align': this.scrollOptions?.scrollSnapAlign,
      '--dg-scroll-rows': this.scrollOptions?.rows,
    };

    const classes = {
      'dg-is-scroll': !!this.isScroll || !!this.scrollOptions,
      'dg-is-scrollbar-hidden': !!this.scrollOptions?.hideScrollbar,
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
      this.resizeController.observe(this.gridRef.value!);
    });
    this.classList.remove('dg-is-loading');
  }

  private getColumns() {
    return calcColumns({
      elementWidth: this.gridRef.value?.clientWidth || this.offsetWidth,
      minWidth: convertUnit(this.minColumnWidth, 'px'),
      gap: this.gap ? convertUnit(this.gap, 'px') : undefined,
      dividedBy: this.dividedBy,
      maxColumns: this.maxColumns,
      scrollHint: this.scrollOptions?.hint,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-dynamic-grid': MrdDynamicGridElement;
  }
}
