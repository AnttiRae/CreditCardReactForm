import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import './App.css';

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {creditCardNumber: 0}
    this.state = {ccv: 0}
    this.state = {cardHolder : ""}
    this.state = {dateOfExpiry: {month:null, year: null}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(event)
    if (name === 'dateOfExpiryMonth' | name === 'dateOfExpiryYear') {
      if (name === 'dateOfExpiryMonth') {
        this.setState({
          dateOfExpiry: {
            month: value,
            year: this.state.dateOfExpiry.year
          }
        })
      } else {
        this.setState({
          dateOfExpiry: {
            year: value,
            month: this.state.dateOfExpiry.month
          }
        })
      }

    }else {
      this.setState({
        [name]: value
      })
    }

  }

  handleSubmit(event) {
    console.log('moi')
  }

  formInput(className, placeholder, pattern, inputMode, name, type) {
    return(
      <input
            className={className}
            placeholder={placeholder}
            pattern={pattern}
            inputMode={inputMode}
            name={name} 
            type={type}
            onChange={this.handleChange} />
    )
  }

  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="box">
          <h2>CreditCard</h2>
          <form>
            {this.formInput("card-number-input", "Card Number", "^[0-9\s]{13,19}$", "numeric", "creditCardNumber", "tel")}
            {this.formInput("ccv-input", "CCV", "^[0-9]{3,4}$", "numeric", "ccv", "tel")}
            {this.formInput("card-holder", "Card Holder", "", "text", "cardHolder", "text" )}
            <label>Expiration</label>
            {this.formInput("date-of-expiry-month", "MM", "(?=0{1})0{1}[0-9]{1}|(?=1{1})1{1}[0-2]{1}$", "numeric", "dateOfExpiryMonth", "tel" )}
            /
            {this.formInput("date-of-expiry-year", "YY", "^[0-9]{1,2}$", "numeric", "dateOfExpiryYear", "tel" )}
          <button onClick={this.handleSubmit}>+</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}


export default CreditCard;
