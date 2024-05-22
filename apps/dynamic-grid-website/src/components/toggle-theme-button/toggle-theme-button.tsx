import React from 'react';
import { createComponent, EventName } from '@lit/react';
import { Theme } from '@mordech/tokens';
import { MrdToggleThemeElement } from '@mordech/web-components/mrd-toggle-theme';

type ToggleThemeEvent = EventName<
  CustomEvent<{
    theme: Theme;
  }>
>;

document.body.setAttribute(
  'data-theme',
  localStorage.getItem('theme') || 'prefers',
);

export const ToggleThemeButton = createComponent({
  tagName: 'mrd-toggle-theme',
  elementClass: MrdToggleThemeElement,
  react: React,
  events: {
    onToggleTheme: 'toggle-theme' as ToggleThemeEvent,
  },
});
