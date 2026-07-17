# Tailwind CSS

import LiveCodes from '../../src/components/LiveCodes.tsx';
import RunInLiveCodes from '../../src/components/RunInLiveCodes.tsx';

export const basicDemo = {
  activeEditor: 'markup',
  markup: {
    language: 'html',
    content: `<div class="flex items-center justify-center h-screen bg-gray-100">\n  <h1 class="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>\n</div>\n`,
  },
  processors: ['tailwindcss'],
};

export const tailwindcssDemo = {
  activeEditor: 'script',
  script: {
    language: 'react',
    content: `export default function() {\n  return <h1 className="text-3xl font-bold text-gray-500 text-center m-4">Hello, Tailwind CSS!</h1>;\n}\n`,
  },
  processors: ['tailwindcss'],
};

[Tailwind CSS](https://tailwindcss.com/) is an open-source CSS framework that provides utility CSS classes that can be composed to build any design, directly in the markup.

## Demo

<LiveCodes template="tailwindcss" height="60vh"></LiveCodes>

## Usage

Tailwind CSS is enabled as a [CSS processor](../features/css.html.md)#css-processors). Once enabled from the style editor menu or in [`processors`](../configuration/configuration-object.html.md)#processors) property of the [configuration object](../configuration/configuration-object.html.md), all Tailwind utility classes are available immediately in your markup.

<RunInLiveCodes
  params={basicDemo}
  code={basicDemo.markup.content}
  language="html"
  formatCode={false}
/>

:::info note

Tailwind CSS is imported using `@import "tailwindcss";` directive in the [style editor](../features/projects.html.md)#style-editor).

If no `@import` is added to the style editor, LiveCodes automatically injects it when the Tailwind CSS processor is enabled.

:::

### Usage with CSS Frameworks in JSX/SFCs

CSS Frameworks supported in LiveCodes (e.g. Tailwind CSS, [UnoCSS](./unocss.html.md), [WindiCSS](./windicss.html.md)) can detect class names added in JSX and framework SFCs such as [React](./react.html.md), [Vue](./vue.html.md) and [Svelte](./svelte.html.md). Make sure that the Tailwind CSS processor is enabled.

<RunInLiveCodes
  params={tailwindcssDemo}
  code={tailwindcssDemo.script.content}
  language="jsx"
/>

### Tailwind CSS Plugins

Tailwind CSS [legacy JavaScript-based plugins](https://v3.tailwindcss.com/docs/plugins#official-plugins) can be loaded using the [`@plugin` directive](https://tailwindcss.com/docs/functions-and-directives#plugin-directive) in the [style editor](../features/projects.html.md)#style-editor).

```css
@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/aspect-ratio";
@plugin "@tailwindcss/line-clamp";
```

## Processor Info

### Name

`tailwindcss`

## Compiler

Tailwind CSS official compiler, running client-side in the browser. The compiler generates styles on-demand, so only the classes used in your markup are included in the output.

### Version

`tailwindcss`: v4.1.16

## Starter Template

https://livecodes.io/?template=tailwindcss

## Links

- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [LiveCodes CSS Processors](../features/css.html.md)#css-processors)
- [UnoCSS](./unocss.html.md)
- [WindiCSS](./windicss.html.md)