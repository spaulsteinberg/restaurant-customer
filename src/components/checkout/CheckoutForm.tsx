import { useState} from 'react';
import Form from "react-bootstrap/Form";
import CheckoutPaymentButton from "./CheckoutPaymentButton";
import CheckoutFormItem from "./CheckoutFormItem";
import { Stripe, StripeElements } from '@stripe/stripe-js';
import CheckoutFormStripeFields from './CheckoutFormStripeFields';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CardElement } from "@stripe/react-stripe-js";
import { handleOrder, handlePayment } from "../../redux/checkout/checkoutHelpers";
import CheckoutFormAlertStatus from './CheckoutFormAlertStatus';
import { checkForCurrentMenu } from '../../firebase/api';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setCheckoutLoading, setCompletedStatus } from '../../redux/checkout/checkoutActions';
import { ISessionContext, useSession } from '../../contexts/SessionContext';
import destroySessionDB from '../../api/cartDBInteractions/destroyCartSessionDB';

type CheckoutFormProps = {
    stripe:Stripe|null;
    elements:StripeElements|null;
    amount:string;
}

const CheckoutForm = ({stripe, elements, amount}: CheckoutFormProps) => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState({message: "", isError: false});
    const [cardComplete, setCardComplete] = useState<boolean>(false);
    const [cardError, setCardError] = useState<string>("");
    const history = useHistory();
    const { sessionId, destroySession } = useSession() as ISessionContext;

    const destoryUserSession = ():void => {
        if (sessionId) {
            console.log("triggered")
            destroySessionDB(sessionId)
            .then(() => destroySession())
            .catch(err => console.log(err))
        }
    }

    const handleSubmitOrder = async (first:string, last:string, email:string, token:string, ccLast:string|undefined) => {
        setMessage({message: "Creating Order...", isError: false})
        checkForCurrentMenu()
            .then(res => {
                if (res) {
                    ccLast = ccLast ? `XXXX-XXXX-XXXX-${ccLast}` : 'XXXX-XXXX-XXXX-XXXX'
                    handleOrder({ firstName: first, lastName: last, email: email, credit: ccLast })
                    .then(createdOrder => {
                        setMessage({ message: "Order created. Processing payment....", isError: false });
                        handlePayment(token, email, amount)
                            .then(() => {
                                setMessage({ message: "Complete!", isError: false })
                                dispatch(setCompletedStatus({status: true, last4: ccLast, receipt: createdOrder.data.reference, createdAt: createdOrder.data.createdAt}))
                                destoryUserSession()
                            })
                            .catch(() => {
                                setMessage({ message: "An error occurred processing your payment.", isError: true })
                            })
                            .finally(() => dispatch(setCheckoutLoading(false)))
                    })
                    .catch(() => {
                        setMessage({ message: "An error occurred creating your order.", isError: true })
                        dispatch(setCheckoutLoading(false))
                    })
                } else {
                    setMessage({message: `Your menu has expired. Routing back to main menu...`, isError: true})
                    console.log("old menu!")
                    destoryUserSession()
                    setTimeout(() => {
                        dispatch(setCompletedStatus({status: true, last4: '', receipt: '', createdAt: ''}))
                        history.push('/ordering')
                    }, 2500)
                }
            })
    }

    const handleCreditInputChanges = (event:any):void => {
        setCardComplete(event.complete)
        if (event.error) {
            setCardError(event.error.message)
        } else setCardError("")
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={ async (values, actions) => {
                dispatch(setCheckoutLoading(true))
                setMessage({ message: "", isError: false })
                if (!stripe || !elements) {
                    // Stripe.js has not yet loaded.
                    setMessage({ message: "Error syncing payment service. Please try again later.", isError: false })
                    return;
                }

                const card = elements.getElement(CardElement);
                const result = await stripe.createToken(card!);
                result.error ? setMessage({ message: "An error occurred with payment service. Please try again later.", isError: true })
                    : handleSubmitOrder(values.firstName, values.lastName, values.email, result.token.id, result.token.card?.last4)
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email(),
                firstName: Yup.string().required('Please enter first name'),
                lastName: Yup.string().required('Please enter last name')
            })}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <CheckoutFormItem
                        labelText="First Name"
                        name="firstName"
                        id="firstName"
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.firstName}
                        touched={touched.firstName} />
                    <CheckoutFormItem
                        labelText="Last Name"
                        name="lastName"
                        id="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.lastName}
                        touched={touched.lastName} />
                    <CheckoutFormItem
                        labelText="Email"
                        name="email"
                        id="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                        touched={touched.email} />
                    <CheckoutFormStripeFields handleChange={handleCreditInputChanges} error={cardError}/>
                    <CheckoutPaymentButton isDisabled={!stripe || isSubmitting || !cardComplete ? true : false}/>
                    {message.message ? <CheckoutFormAlertStatus message={message.message} isError={message.isError} /> : null}
                </Form>
            )}
        </Formik>
    )
}

export default CheckoutForm
