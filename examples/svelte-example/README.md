# RosettaJS-i18n Svelte Example

This project demonstrates how to use RosettaJS-i18n in a Svelte application.

## Getting Started

1. Install dependencies:
npm install


2. Start the development server:
npm run dev


3. Open [http://localhost:5000](http://localhost:5000) to view the app in your browser.

## Features Demonstrated

- Basic translation
- Pluralization
- Number formatting
- Language switching
- Use of Svelte context for providing the translator
- Integration with Svelte's reactive statements

## Project Structure

- `src/App.svelte`: Main application component
- `src/components/LanguageSwitcher.svelte`: Component for switching languages
- `src/components/ShoppingCart.svelte`: Component demonstrating translations
- `src/main.js`: Entry point of the application

## Notes

This example uses the default Svelte template for simplicity. In a real-world application, you might want to use a more customized setup.

Remember to properly handle language preferences, possibly storing them in local storage or syncing with a backend service.
