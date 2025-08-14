import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				amount={500}
				description='$5 for 5 email credits'
				name='Surveyr'
				stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
				token={(token) => console.log(token)} // callback function to call after stripe returns payment token
			>
				<button className='btn'>Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default Payments;
