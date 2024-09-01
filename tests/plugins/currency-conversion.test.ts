import { Translator } from '../../src/core/translator';
import { currencyConversionPlugin } from '../../src/plugins/currency-conversion';

describe('Currency Conversion Plugin', () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator();
    const plugin = currencyConversionPlugin({
      apiKey: 'test-key',
      baseUrl: 'https://api.example.com/convert'
    });
    plugin.init(translator);
  });

  test('convertCurrency() converts correctly', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ rate: 0.85 }),
      })
    );

    const result = await translator.convertCurrency(100, 'USD', 'EUR');
    expect(result).toBe(85);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.example.com/convert?apiKey=test-key&from=USD&to=EUR'
    );
  });
});
