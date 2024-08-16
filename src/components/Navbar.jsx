
import './Navbar.css'; // Ensure CSS is imported

const Navbar = () => {
    return (
        <div>
            {/* Primary Navbar */}
            <div className="navbar">
                <div className="navbar-left">
                    {/* <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
                    </div> */}
                    <div className="delivery">
                        <span>Delivering to</span>
                        <p>Meerut 250001</p>
                    </div>
                </div>
                <div className="navbar-center">
                    <select className="categories">
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                    <input type="text" className="search-input" placeholder="Search Amazon.in" />
                    <button className="search-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Search_Icon.svg" alt="Search" />
                    </button>
                </div>
                <div className="navbar-right">
                    <div className="lang-select">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="flag-icon" />
                        <span>EN</span>
                    </div>
                    <div className="account">
                        <span>Hello, sign in</span>
                        <p>Account & Lists</p>
                    </div>
                    <div className="orders">
                        <span>Returns</span>
                        <p>& Orders</p>
                    </div>
                    <div className="cart">
                        <span>0</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Shopping_cart_icon.svg" alt="Cart" />
                        <p>Cart</p>
                    </div>
                </div>
            </div>

            {/* Submenu Navbar */}
            <div className="submenu">
                <ul className="submenu-list">
                    <li className="submenu-item">
                        <i className="fas fa-bars"></i> All
                    </li>
                    <li className="submenu-item">Amazon miniTV</li>
                    <li className="submenu-item">Sell</li>
                    <li className="submenu-item">Best Sellers</li>
                    <li className="submenu-item">Today Deals</li>
                    <li className="submenu-item">Mobiles</li>
                    <li className="submenu-item">Prime</li>
                    <li className="submenu-item">Customer Service</li>
                    <li className="submenu-item">Electronics</li>
                    <li className="submenu-item">Fashion</li>
                    <li className="submenu-item">New Releases</li>
                    <li className="submenu-item">Home & Kitchen</li>
                    <li className="submenu-item">Amazon Pay</li>
                    <li className="submenu-item">Computers</li>
                    <li className="submenu-item">Car & Motorbike</li>
                    <li className="submenu-item">Books</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
