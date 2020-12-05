import { configure, addParameters, addDecorator } from '@storybook/react';
import { ThemeDecorator } from './decorate.config';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  a11y: {
    // ... axe options
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(ThemeDecorator);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
