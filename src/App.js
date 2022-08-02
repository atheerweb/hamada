import "./App.scss";
import logo from "../src/logo.png";
import searchIcon from "../src/search.png";
import cartIcon from "../src/cart.png";
import profileIcon from "../src/profile.png";
function App() {
  return (
    <div className="App">
      <div className="search__container">
        <div className="search__wrapper">
          <img className="logo" src={logo} alt="" />
          <div className="search__holder">
            <p id="seach__text">
              <img src={searchIcon} alt="" />
              What do you search for ?
            </p>
            <button className="search__btn">search</button>
          </div>
          <div className="nav__items">
            <div className="nav__item">
              <img src={profileIcon} alt="" />
              <p>My profile</p>
            </div>
            <div className="nav__item">
              <img src={cartIcon} alt="" />
              <p>Cart</p>
            </div>
            <div className="nav__item">
              <label htmlFor="language">EN</label>
              <select name="language" id="language"></select>
            </div>
          </div>
        </div>
      </div>
      {/* navigation */}
      <div className="nav__container">
        <div className="nav__wrapper">
          <div className="nav__link">CATEGORIES</div>
          <div className="nav__link active">HOME</div>
          <div className="nav__link">OFFERS</div>
          <div className="nav__link">CONTACT US</div>
          <button>Sell on I-Shoppin</button>
        </div>
      </div>
      {/* slider */}
      <header>
        <img src="" alt="" className="slider" />
      </header>
      {/*featured products */}
      <div className="featured__wrapper">
        <div className="featured"></div>
        <div className="featured"></div>
        <div className="featured"></div>
      </div>
      {/*explore products */}
      <div className="explore__container">
        <div className="explore__wrapper">
          <div className="explore__item"></div>
          <div className="explore__item"></div>
          <div className="explore__item"></div>
          <div className="explore__item"></div>
        </div>
      </div>
      {/*BEST SELLERS */}
      <div className="best__sellers__wrapper">
        <h1>BEST SELLERS</h1>
        <div className="best__sellers__items">
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
          <div className="best__sellers"></div>
        </div>
      </div>
      {/*Second Slider */}
      <div className="second__slider"></div>
      {/*Flash sales */}
      <div className="flash__sales__container">
        <h1>FLASH SALES</h1>
        <div className="flash__sales__wrapper">
          <div className="flash__sale__item"></div>
          <div className="flash__sale__item"></div>
          <div className="flash__sale__item"></div>
        </div>
      </div>
      {/* Features */}
      <div className="features__container">
        <h1>WE SERVE TO YOU</h1>
        <div className="features__wrapper">
          <div className="features">
            <img src="" alt="" />
            <p></p>
          </div>
          <div className="features">
            <img src="" alt="" />
            <p></p>
          </div>
          <div className="features">
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
      </div>
      {/*Footer */}
      <footer><p>xcxcxc</p></footer>
    </div>
  );
}

export default App;
