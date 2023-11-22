import { NavLink, useLocation } from "react-router-dom";
import pokeballIcon from "../../assets/pokeball.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import "./navbar.css";

const navigationRoutes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Compare",
    route: "/compare",
  },
  {
    name: "About",
    route: "/about",
  },
];

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // find the route that matches the url pathname - return the index
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route),
    );
    // will match every route pathname since all begin with a /
    console.log(index);
    // add a border bottom to the route that was clicked on
    ul(index);
  }, [location.pathname]);

  function ul(index) {
    const underlines = document.querySelectorAll(".underline");
    // iterate over the dom list of underline divs and use the index to translate 3d with the index
    underlines.forEach((underline) => {
      underline.style.transform = "translate3d(" + index * 100 + "%,0,0)";
    });
  }

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="nav-links">
        <ul>
          {/* <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div> */}
          {navigationRoutes.map((route, idx) => (
            <li key={`nav-${idx}`}>
              <NavLink to={route.route}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
