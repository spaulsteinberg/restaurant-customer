import Form from "react-bootstrap/Form";
import CheckoutPaymentButton from "./CheckoutPaymentButton";
import CheckoutFormItem from "./CheckoutFormItem";
import { Stripe } from '@stripe/stripe-js';
import CheckoutFormStripeFields from './CheckoutFormStripeFields';
import { Formik } from 'formik';
import * as Yup from 'yup';

type CheckoutFormProps = {
    stripe:Stripe|null;
}

const CheckoutForm = ({stripe}: CheckoutFormProps) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={(values, actions) => {
                console.log("submitting!!", values)
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
                /* and other goodies */
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
                    <CheckoutFormStripeFields />
                    <CheckoutPaymentButton isDisabled={!stripe ? true : false} />
                </Form>
            )}
        </Formik>
    )
}

export default CheckoutForm
