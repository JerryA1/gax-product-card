import * as React from 'react';
import renderer from 'react-test-renderer';
// components
import { ProductTitle, ProductCard } from '../../src/components';
// data
import { product1 } from '../data/products';

// ----------------------------------------------------------------------

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Titulo personalizado" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
