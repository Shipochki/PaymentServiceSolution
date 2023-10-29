
import { useContext } from "react"
import "./checkout.css"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"


const customerFromKeys = {
    Email: 'email',
    Name: 'name',
    CreditCard: {
        Name: 'name',
        CardNumber: 'cardNumber',
        ExpirationYear: 'expirationYear',
        ExpirationMonth: 'expirationMonth',
        Cvc: 'cvc'
    }
}

export const Checkout = () => {
    const { addStripeCustomer } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm(
        {
            [customerFromKeys.Email]: '',
            [customerFromKeys.Name]: '',
            [customerFromKeys.CreditCard.Name]: '',
            [customerFromKeys.CreditCard.CardNumber]: '',
            [customerFromKeys.CreditCard.ExpirationYear]: '',
            [customerFromKeys.CreditCard.ExpirationMonth]: '',
            [customerFromKeys.CreditCard.Cvc]: ''
        }, addStripeCustomer
    )

    return (
      <section>
        <div className="row">
          <div className="col-75">
            <div className="container cont">
              <form id="checkout" onSubmit={onSubmit} method="POST">
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name={customerFromKeys.Name}
                      value={values[customerFromKeys.Name]}
                      placeholder="John M. Doe"
                      onChange={changeHandler}
                    />
                    <label htmlFor="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name={customerFromKeys.Email}
                      placeholder="john@example.com"
                      value={values[customerFromKeys.Email]}
                      onChange={changeHandler}
                    />
                    <label htmlFor="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                    />
                    <label htmlFor="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NY"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa"></i>
                      <i className="fa fa-cc-amex" ></i>
                      <i className="fa fa-cc-mastercard" ></i>
                      <i className="fa fa-cc-discover" ></i>
                    </div>
                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name={customerFromKeys.CreditCard.Name}
                      placeholder="John More Doe"
                      value={values[customerFromKeys.CreditCard.Name]}
                      onChange={changeHandler}
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name={customerFromKeys.CreditCard.CardNumber}
                      placeholder="1111-2222-3333-4444"
                      value={values[customerFromKeys.CreditCard.CardNumber]}
                      onChange={changeHandler}
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name={customerFromKeys.CreditCard.ExpirationMonth}
                      placeholder="September"
                      value={values[customerFromKeys.CreditCard.ExpirationMonth]}
                      onChange={changeHandler}
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name={customerFromKeys.CreditCard.ExpirationYear}
                          placeholder="2018"
                          value={values[customerFromKeys.CreditCard.ExpirationYear]}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name={customerFromKeys.CreditCard.Cvc}
                          placeholder="352"
                          value={values[customerFromKeys.CreditCard.Cvc]}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" name="sameadr">
                  </input>
                </label>
                <input type="submit" value="Continue to checkout" className="btnCheck " />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}