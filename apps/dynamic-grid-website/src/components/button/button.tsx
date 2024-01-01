import React from 'react';
import { createComponent } from '@lit/react';
import { MrdButtonElement } from '@mordech/web-components/mrd-button';

export const Button = createComponent({
  tagName: 'mrd-button',
  elementClass: MrdButtonElement,
  react: React,
});
