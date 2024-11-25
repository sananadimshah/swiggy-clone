import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="food-icon"
          src="https://www.shutterstock.com/shutterstock/photos/2175854399/display_1500/stock-vector-food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-2175854399.jpg"
          alt=""
        />
      </div>
      <div className="nav-icons">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>SignIn</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
