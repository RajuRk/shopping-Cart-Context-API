import { useContext } from 'react';
import { Cart } from './Context';

export default function SingleProduct({ prod }) {
  const { cart, setCart } = useContext(Cart);

  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name} />
      <div className='productDesc'>
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className='add'
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove to cart
        </button>
      ) : (
        <button
          className='add'
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
