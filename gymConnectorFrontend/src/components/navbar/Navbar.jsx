import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo-item">
          <img
            src="https://thumbs.dreamstime.com/b/fitness-center-logo-sport-fitness-logo-design-gym-logo-icon-design-vector-stock-fitness-center-logo-sport-fitness-logo-206107542.jpg"
            alt=""
            className="logo"
          />
          <span className="logo-title">tkgym</span>
        </div>
        <div className="nav-items">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
