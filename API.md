# RosettaJS-i18n API Documentation

## RosettaJS Class

The main class for initializing and using the i18n functionality.

### Constructor

```typescript
constructor(options: TranslatorOptions = {})
```

- `options`: An object with the following properties:
  - `defaultLanguage`: The default language to use (default: 'en')
  - `fallbackLanguage`: The language to fall back to if a translation is not found (default: 'en')
  - `messages`: An object containing the translation messages

### Methods

#### init()

Initializes the translator and any registered plugins.

```typescript
init(): void
```

#### use(plugin: Plugin)

Registers a plugin to extend functionality.

```typescript
use(plugin: Plugin): void
```

#### t(key: string, params: Record<string, any> = {})

Translates a given key with optional interpolation parameters.

```typescript
t(key: string, params: Record<string, any> = {}): string
```

#### setLanguage(language: string)

Sets the current language.

```typescript
setLanguage(language: string): void
```

#### formatNumber(number: number, options?: Intl.NumberFormatOptions)

Formats a number according to the current language and provided options.

```typescript
formatNumber(number: number, options?: Intl.NumberFormatOptions): string
```

#### formatDate(date: Date, options?: Intl.DateTimeFormatOptions)

Formats a date according to the current language and provided options.

```typescript
formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string
```

#### pluralize(key: string, count: number, params: Record<string, any> = {})

Pluralizes a translation based on the count.

```typescript
pluralize(key: string, count: number, params: Record<string, any> = {}): string
```

## Framework Adapters

### React

#### TranslatorProvider

A React component that provides the translator to its children.

```jsx
<TranslatorProvider translator={i18n}>
  {/* Your app components */}
</TranslatorProvider>
```

#### useTranslation()

A hook for accessing translation functions in functional components.

```typescript
const { t, formatNumber, formatDate, pluralize } = useTranslation();
```

### Vue

#### createI18n(translator: Translator)

Creates a Vue plugin for i18n functionality.

```typescript
const i18n = createI18n(translator);
app.use(i18n);
```

#### useI18n()

A composable for accessing translation functions in Vue components.

```typescript
const { t, formatNumber, formatDate, pluralize } = useI18n();
```

### Svelte

#### setTranslator(translator: Translator)

Sets the translator in the Svelte context.

```typescript
setTranslator(i18n);
```

#### getTranslator()

Gets the translator from the Svelte context.

```typescript
const { t, formatNumber, formatDate, pluralize } = getTranslator();
```

### Preact

#### PreactTranslatorProvider

A Preact component that provides the translator to its children.

```jsx
<PreactTranslatorProvider translator={i18n}>
  {/* Your app components */}
</PreactTranslatorProvider>
```

#### usePreactTranslation()

A hook for accessing translation functions in Preact components.

```typescript
const { t, formatNumber, formatDate, pluralize } = usePreactTranslation();
```

For more detailed information on using these APIs, please refer to the example projects in the `examples` directory.
```
