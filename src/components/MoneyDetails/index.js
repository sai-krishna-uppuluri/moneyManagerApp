import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="money-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="money-headers">
          <h1 className="heading"> Your Balance </h1>
          <p className="amount"> {balanceAmount} </p>
        </div>
      </div>
      <div className="money-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="money-headers">
          <h1 className="heading"> Your Income </h1>
          <p className="amount"> {incomeAmount} </p>
        </div>
      </div>
      <div className="money-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="money-headers">
          <h1 className="heading"> Your Expenses </h1>
          <p className="amount"> {expensesAmount} </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
