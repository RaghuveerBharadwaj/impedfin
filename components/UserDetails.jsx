export const UserDetails = ({ user }) => {

  return (
    <div className="user-details">
      <img src="user.svg" alt="User" />
      <div className="user-data">
        <p> <span>Name :</span>  <b> {user?.name} </b> </p>
        <p> <span>Phone :</span>  <b> {user?.phone} </b> </p>
        <p> <span>Email :</span>  <b> {user?.email} </b> </p>
        <p> <span>Aadhaar :</span>  <b> {user?.aadhaar} </b> </p>
        <p> <span>PAN :</span> <b> {user?.pan} </b>  </p>
      </div>
    </div>
  )
}
