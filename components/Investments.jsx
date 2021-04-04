export const Investments = ({ investments = [] }) => {

  return (
    <div className="user-details">
      <h2 className="center">Investments</h2>
      {investments?.map(invest => <div key={invest._id} >
        <hr />
        <div className="user-data">
          <p> <span>Type :</span>  <b> {invest?.investmentType} </b> </p>
          <p> <span>Amount :</span>  <b> {invest?.totalInvestment} </b> </p>
          <p> <span>Returns :</span>  <b> {invest?.monthlyReturns} / mo</b> </p>
        </div>
      </div>)}
    </div>
  )
}
