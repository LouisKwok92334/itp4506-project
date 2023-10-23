import "./Profile.css";

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Information</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value="Bosco" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" value="098-765-4321" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value="michael.smith@example.com" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" value="123 Main St, City, State, ZI" required />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="profile-card">
        <h2>Payment Information</h2>
        <form>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" value="3690 2384 **** ****" required pattern="\d{16}" />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="month" required />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="password" required pattern="\d{3}" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}