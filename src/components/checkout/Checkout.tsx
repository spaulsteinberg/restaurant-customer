import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

type CheckoutProps = {}

const Checkout = (props:CheckoutProps) => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CardElement />
            </Elements>
        </div>
    )
}

export default Checkout
