import { stringSingleline } from './string-clean';

describe('string-clean', () => {
  it('stringSingleline', () => {
    const str1 = stringSingleline(' hello  word ');

    expect(str1).toEqual(' hello word ');
  });
});
