```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RosettaJS-i18n README</title>
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --link-color: #0366d6;
            --code-bg-color: #f6f8fa;
            --border-color: #e1e4e8;
        }
        
        body.dark-mode {
            --bg-color: #0d1117;
            --text-color: #c9d1d9;
            --link-color: #58a6ff;
            --code-bg-color: #161b22;
            --border-color: #30363d;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        h1, h2, h3 {
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
        }
        
        a {
            color: var(--link-color);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        code {
            background-color: var(--code-bg-color);
            padding: 2px 4px;
            border-radius: 3px;
            font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        }
        
        pre {
            background-color: var(--code-bg-color);
            padding: 16px;
            overflow: auto;
            border-radius: 3px;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            border: 1px solid var(--border-color);
            padding: 8px;
            text-align: left;
        }
        
        th {
            background-color: var(--code-bg-color);
        }
        
        #dark-mode-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px;
            background-color: var(--code-bg-color);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            color: var(--text-color);
        }
    </style>
</head>
<body>

<button id="dark-mode-toggle">Toggle Dark Mode</button>

<h1>RosettaJS-i18n</h1>

<p>
    <a href="https://www.npmjs.com/package/rosettajs-i18n"><img src="https://img.shields.io/npm/v/rosettajs-i18n.svg" alt="npm version"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

<p>RosettaJS-i18n is a lightweight internationalization (i18n) solution designed for small to medium e-commerce sites. It provides a simple, intuitive API for translations, pluralization, number and date formatting, and more.</p>

<h2>Features</h2>

<ul>
    <li>Basic translation with interpolation</li>
    <li>Pluralization supporting common European languages</li>
    <li>Number and date formatting</li>
    <li>Small bundle size (~10KB minified)</li>
    <li>Plugin system for extending functionality</li>
    <li>Framework adapters for React, Vue, Svelte, and Preact</li>
    <li>TypeScript support</li>
    <li>Testing utilities</li>
</ul>

<h2>Installation</h2>

<pre><code>npm install rosettajs-i18n</code></pre>

<h2>Basic Usage</h2>

<pre><code>import { RosettaJS } from 'rosettajs-i18n';

const i18n = new RosettaJS({
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  messages: {
    en: {
      greeting: 'Hello, {name}!',
      items: {
        one: 'You have {count} item',
        other: 'You have {count} items'
      }
    },
    fr: {
      greeting: 'Bonjour, {name}!',
      items: {
        one: 'Vous avez {count} article',
        other: 'Vous avez {count} articles'
      }
    }
  }
});

i18n.init();

console.log(i18n.t('greeting', { name: 'Alice' })); // Output: Hello, Alice!
console.log(i18n.pluralize('items', 1, { count: 1 })); // Output: You have 1 item
console.log(i18n.pluralize('items', 5, { count: 5 })); // Output: You have 5 items

i18n.setLanguage('fr');

console.log(i18n.t('greeting', { name: 'Alice' })); // Output: Bonjour, Alice!
console.log(i18n.pluralize('items', 1, { count: 1 })); // Output: Vous avez 1 article
console.log(i18n.pluralize('items', 5, { count: 5 })); // Output: Vous avez 5 articles</code></pre>

<!-- ... Rest of the README content ... -->

<h2>License</h2>

<p>RosettaJS-i18n is <a href="LICENSE">MIT licensed</a>.</p>

<script>
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
</script>

</body>
</html>
```
