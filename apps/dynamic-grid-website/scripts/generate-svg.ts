import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { format } from 'prettier';

const cwd = process.cwd();

async function createSvgStore() {
  const svgStore = readdirSync(join(cwd, 'src', 'icons')).reduce(
    (acc, fileName) => {
      if (!fileName.endsWith('.svg')) {
        return acc;
      }

      const name = fileName.replace('.svg', '');
      const pascalCaseName = name
        .split(/[-_]/g)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      return {
        ...acc,
        [pascalCaseName]: {
          name,
          import: `import ${pascalCaseName} from '../../icons/${fileName}?react';`,
          component: `<${pascalCaseName} id="${name}" />`,
        },
      };
    },
    {} as Record<string, { name: string; import: string; component: string }>,
  );

  const svgStoreImports = Object.values(svgStore)
    .map((svg) => svg.import)
    .join('\n');

  const svgStoreComponents = Object.values(svgStore).reduce(
    (acc, svg) => `${acc}\n  ${svg.component}`,
    '',
  );

  const svgStoreFile = `
${svgStoreImports}

export const SvgStore = () => (
  <div style={{ display: 'none' }}>
    ${svgStoreComponents}
  </div>
);
`;

  const IconsIdsStringUnion = Object.values(svgStore).reduce(
    (acc, svg) => `${acc}\n | '${svg.name}'`,
    '',
  );

  const svgStoreTypesFile = `
export type Icons = ${IconsIdsStringUnion};
`;

  writeFileSync(
    join(cwd, 'src', 'components', '/svg-store/types.ts'),
    await format(svgStoreTypesFile, {
      parser: 'typescript',
      singleQuote: true,
    }),
    'utf8',
  );

  writeFileSync(
    join(cwd, 'src', 'components', '/svg-store/svg-store.tsx'),
    await format(svgStoreFile, {
      parser: 'typescript',
      singleQuote: true,
    }),
    'utf8',
  );

  const indexFile = `
export * from './svg-store';
export * from './types';
`;

  writeFileSync(
    join(cwd, 'src', 'components', '/svg-store/index.ts'),
    await format(indexFile, {
      parser: 'typescript',
      singleQuote: true,
    }),
    'utf8',
  );
}

createSvgStore();
