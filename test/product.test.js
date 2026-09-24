import ProductData from '../src/js/ProductData.mjs';

describe('ProductData search', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            Result: [{ Id: 'test-1', Name: 'Test product' }],
          }),
      }),
    );
  });

  test('searchProducts calls the backend with the provided query', async () => {
    const data = await new ProductData().searchProducts('rainfly');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://wdd330-backend.onrender.com/products/search/rainfly',
    );
    expect(data).toEqual([{ Id: 'test-1', Name: 'Test product' }]);
  });
});
