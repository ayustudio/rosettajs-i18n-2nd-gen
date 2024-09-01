import React from 'react';
import { render, screen } from '@testing-library/react';
import { Translator } from '../../src/core/translator';
import { TranslatorProvider, useTranslation } from '../../src/adapters/react';

describe('React Adapter', () => {
  const translator = new Translator({
    messages: {
      en: {
        hello: 'Hello, {name}!',
      },
    },
  });

  const TestComponent = () => {
    const { t } = useTranslation();
    return <div>{t('hello', { name: 'Alice' })}</div>;
  };

  test('useTranslation hook works correctly', () => {
    render(
      <TranslatorProvider translator={translator}>
        <TestComponent />
      </TranslatorProvider>
    );

    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });
});
