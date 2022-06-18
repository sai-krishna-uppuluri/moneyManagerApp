import {Component} from 'react'

import './index.css'

class MoneyManager extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="app-inner-container">
          <div className="user-heading-container">
            <h1 className="user-name"> Hi, Richard </h1>
            <p className="app-description">Welcome back to your MoneyManager</p>
          </div>
          <div className="transaction-container">
            <div className="add-transaction-container">
              <h1 className="add-transaction-heading">Add transaction</h1>
              <form className="add-transaction-form">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input id="title" type="text" className="input-label" />
                <label htmlFor="amount" className="label">
                  amount
                </label>
                <input id="amount" type="text" className="input-label" />
                <label htmlFor="type" className="label">
                  Type
                </label>
                <input id="type" type="select" className="input-label" />
                <button type="submit" className="add-button">
                  add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="add-transaction-heading">history</h1>
              <div className="transaction-item-container">
                <ul className="items-list-container">
                  <li className="heading1">Title</li>
                  <li className="heading2">Amount</li>
                  <li className="heading3">Type</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
