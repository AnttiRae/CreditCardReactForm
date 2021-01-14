import React from 'react';
import './App.css';

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {creditCardNumber: 0}
    this.state = {ccv: 0}
    this.state = {cardHolder : ""}
    this.state = {dateOfExpiry: {month:1, year: 2020}
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

  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="box">
          <h2>CreditCard</h2>
          <form>
            <input
            className="card-number-input"
            placeholder="Card Number"
            pattern="^[0-9\s]{13,19}$"
            inputMode="numeric"
            name="creditCardNumber" 
            type="tel"
            onChange={this.handleChange} />
            <input
            className="ccv-input"
            placeholder="CCV"
            pattern="^[0-9]{3,4}$"
            inputMode="numeric"
            name="ccv" 
            type="tel"
            onChange={this.handleChange} />
            <input 
            className="card-holder"
            placeholder="Card Holder"
            type="text"
            name="cardHolder"
            onChange={this.handleChange} />
            <label>Expiration</label>
            <input 
            className="date-of-expiry-month"
            name="dateOfExpiryMonth"
            placeholder="MM"
            type="tel"
            inputMode="numeric"
            pattern="^[0-9]{1,2}$"
            onChange={this.handleChange}
            />
            /
            <input 
            className="date-of-expiry-year"
            placeholder="YY"
            name="dateOfExpiryYear"
            pattern="^[0-9]{2}$"
            onChange={this.handleChange}
            />
          <button onClick={this.handleSubmit}>+</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}


export default CreditCard;
