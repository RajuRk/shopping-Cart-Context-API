import { useEffect, useState, useContext } from 'react';
import SingleProduct from './SingleProduct';
import { Cart } from './Context';

export default function CartPage() {
  const [total, setTotal] = useState();
  const { cart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className='productContainer'>
        {cart.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}
