import fetchMock from 'fetch-mock';

const OPTIONS = ['Arms', 'Legs', 'Shoulders'];
fetchMock.mock('/whatever', JSON.stringify(OPTIONS));

describe('mocked fetch', () => {
  it('mocks response', async () => {
    await fetch('/whatever')
      .then(response => response.json())
      .then((body) => {
        expect(body).toEqual(OPTIONS);
      });
  });
});
