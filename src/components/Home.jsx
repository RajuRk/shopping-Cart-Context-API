import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';

faker.seed(100);

export default function Home() {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  // console.log(productArray);

  const [products, setProducts] = useState(productArray);

  // console.log(cart);
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className='productContainer'>
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}
