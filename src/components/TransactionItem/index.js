// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-list">
      <p className="header"> {title} </p>
      <p className="header">Rs {amount}</p>
      <p className="header">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
