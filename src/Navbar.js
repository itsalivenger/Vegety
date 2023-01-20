import "./App.scss";
import { lazy, Suspense, useState } from 'react';
import Loading from './comps/loading';
import SearchBar from './comps/searchBar';
import logo from './comps/images/vegety.png';
const Logo = lazy(()=> import("./comps/image"));

function Navbar() {
  let [ toggleClass, setToggleClass ] = useState("linksInputIcons");
  let [ gerp, setGerp ] = useState();

  function toggleNav() {
    setToggleClass(gerp ? 'linksInputIconsToggled' : '');
    setGerp(!gerp);
  }

  return (
    <nav className="globalNavbar">
      <div className="logoContainerInNav">
        <Suspense fallback={<Loading />}>
          <a href='./home.html'>
            <Logo alt={"Logo Image"} classname={"logoImage"} src={logo} />
          </a>
        </Suspense>
      </div>

      <div className={"linksInputIcons " + toggleClass}>
        <div className="linksInNavContainer">
          <a href="./" className="linksInNav">
            Home
          </a>
          <div className="linksInNav">
            <a className="linksInNav" href="./">Categories</a> <i className="fa fa-angle-down"></i>
            <div className="dropdownMenu">
              <a className="dropdownLinks" href="./">Fruits</a>
              <a className="dropdownLinks" href="./">Légumes</a>
              <a className="dropdownLinks" href="./">Herbes</a>
              <a className="dropdownLinks" href="./">Autres</a>
            </div>
          </div>
          <a href="./" className="linksInNav">
            Blog
          </a>
          <a href="./" className="linksInNav">
            Services
          </a>
          <a href="./" className="linksInNav">
            A Propos
          </a>
        </div>

        <div className="searchBarContainer">
          <span class="material-symbols-outlined searchIcon">
            search
          </span>
          <SearchBar />
        </div>

        <div className="iconsContainer">
          <a href="./" className="iconsContainersInNav">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="itemsCount"></span>
          </a>
          
          <a href="./" className="iconsContainersInNav">
            <span className="material-symbols-outlined">favorite</span>
          </a>
          
          <a href="./" className="iconsContainersInNav">
            <span className="material-symbols-outlined">person</span>
          </a>
        </div>

        <div onClick={toggleNav} className="closeBtnContainer">
          <i className="closeMenuBtn fa fa-close"></i>
        </div>
      </div>
      
      <div onClick={toggleNav} className="toggleMenuBtn">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
