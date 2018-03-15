import { ProductToStringPipe } from './product-to-string.pipe';

describe('ProductToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
