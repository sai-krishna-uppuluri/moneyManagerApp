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
          <p className="heading">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="money-headers">
          <p className="heading"> Your Income </p>
          <p className="amount" testid="incomeAmount">
            {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="money-headers">
          <p className="heading"> Your Expenses </p>
          <p className="amount" testid="expensesAmount">
            {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
