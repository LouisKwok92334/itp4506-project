import "./Profile.css";

export function Profile() {
  return (
    <div className="profile">
      <h3>User information</h3>
      <h4>Profile</h4>
      <div className="profile-form">
        <form>
          <div className="profile-form-group">
            <label htmlFor="name" className="profile-title">Name:</label>
            <input type="text" className="form-control" />
            <label htmlFor="phone" className="profile-title">Phone:</label>
            <input type="phoneNumber" className="form-control" />
            <label htmlFor="email" className="profile-title">Email:</label>
            <input type="email" className="form-control" />
            <label htmlFor="address" className="profile-title">Address:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="profile-user-submit">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
      <h4>Payment</h4>
      <div className="payment-form">
      <form>
          <div className="profile-form-group">
            <label htmlFor="card-number" className="profile-title">Card Number:</label>
            <input type="text" className="form-control" />
            <label htmlFor="expiry-date" className="profile-title">Expiry Date:</label>
            <input type="date" className="form-control" />
            <label htmlFor="cvv" className="profile-title">CVV:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="profile-user-submit">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
