import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {
	const { cart, setCart } = useContext(CartContext);

	const removeItem = () => {
		console.log('this is the id of the object you clicked on:', props.id);
		console.log('this is the list of all the items in your cart:', cart);

		{cart.map(item => {
			console.log('this is item:', item.id, props.id)
			if(item.id !== props.id){
				setCart([item]);
			}else{
				setCart([...cart])
			}
		})}
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
