import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

import './index.css'

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

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {titleInput, amountInput, typeInput} = this.state

    const typeOption = transactionTypeOptions.find(
      eachType => eachType.optionId === typeInput,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTextField = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountField = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTypeField = event => {
    this.setState({
      typeInput: event.target.value,
    })
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state

    let incomeAccount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAccount += eachTransaction.amount
      }
    })
    return incomeAccount
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state

    let expensesAccount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAccount += eachTransaction.amount
      }
    })
    return expensesAccount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state

    let incomeAccount = 0
    let expensesAccount = 0
    let balanceAccount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAccount += eachTransaction.amount
      } else {
        expensesAccount += eachTransaction.amount
      }
    })
    balanceAccount = incomeAccount - expensesAccount

    return balanceAccount
  }

  render() {
    const {titleInput, amountInput, typeInput, transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const expensesAmount = this.getExpensesAmount()
    const incomeAmount = this.getIncomeAmount()

    return (
      <div className="App-container">
        <div className="app-inner-container">
          <div className="user-heading-container">
            <h1 className="user-name"> Hi, Richard </h1>
            <p className="app-description">Welcome back to your MoneyManager</p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            expensesAmount={expensesAmount}
            incomeAmount={incomeAmount}
          />
          <div className="transaction-container">
            <div className="add-transaction-container">
              <h1 className="add-transaction-heading">Add transaction</h1>
              <form
                className="add-transaction-form"
                onSubmit={this.onSubmitForm}
              >
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="input-label"
                  value={titleInput}
                  onChange={this.onChangeTextField}
                />
                <label htmlFor="amount" className="label">
                  amount
                </label>
                <input
                  id="amount"
                  type="text"
                  className="input-label"
                  value={amountInput}
                  onChange={this.onChangeAmountField}
                />
                <label htmlFor="type" className="label">
                  Type
                </label>
                <select
                  id="select"
                  className="input-label"
                  value={typeInput}
                  onChange={this.onChangeTypeField}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="add-button">
                  add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="add-transaction-heading">history</h1>
              <div className="transaction-item-container">
                <ul className="items-list-container">
                  <li className="table-header">
                    <p className="table-cell">Title</p>
                    <p className="table-cell">Amount</p>
                    <p className="table-cell">Type</p>
                  </li>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
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
