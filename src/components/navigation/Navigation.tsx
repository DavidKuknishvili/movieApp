import { Link, useLocation } from "react-router-dom";
import movies from "../../assets/icons/nav_icons/movies.svg";
import series from "../../assets/icons/nav_icons/series.svg";
import star from "../../assets/icons/nav_icons/star.svg";
import logo from "../../assets/icons/other/logo.svg";
import contact from '../../assets/icons/nav_icons/contact.svg'


function Navigation() {
  const { pathname } = useLocation();
  const nav = [
    {
      name: "Movies",
      path: "/movie",
      imgPath: movies,
    },
    {
      name: "Series",
      path: "/tv",
      imgPath: series,
    },
    {
      name: "Saved",
      path: "/saved",
      imgPath: star,
    },
    {
      name: "Contact",
      path: "/contact-us",
      imgPath: contact,
    },
  ];

  return (
    <div>
      <nav className="fixed z-50 backdrop-blur-24 phone:h-full phone:w-14 flex phone:flex-col items-center justify-center phone:gap-16 gap-[20px] bg-opacity-50 bg-[#1D1D1D]  backdrop-blur-md   w-full h-[56px] flex-row">
        <Link to={"/"} className="hover:animate-spin">
          <img src={logo} alt="" />
        </Link>
        <ul className="flex phone:flex-col  phone:gap-[80px] gap-[30px]  flex-row justify-center items-center flex-wrap ">
          {nav.map((item, index) => {
            const { path, imgPath } = item;
            return (
              <li
                key={index}
                className={`relative transition duration-700 hover:animate-pulse  ${
                  pathname === path ? "bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25 rounded-sm" : ""
                }`}
              >
                <Link to={path}>
                  <img src={imgPath} alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
