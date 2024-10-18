import React, { useState, useEffect } from "react"; 
import NavBar from "./NavBar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/Header.css";
import Logo from "../assets/images/logo1.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideMenu from "./SideMenu";

function Header({ onSearch }) { 
    const [searchTerm, setSearchTerm] = useState(""); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (location.pathname === "/signup" || location.pathname === "/login") {
        return null;
    }
    
    function handleMode(){
        if(mode==="light"){
            setMode("dark");
            document.body.classList.add("dark-mode");
        }
        else{
            setMode("light");
            document.body.classList.remove("dark-mode");
        }
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); 
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
        
    };

    return (
        <>
            <style>
                {`
                .sticky {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1020;
                }
                .header-placeholder {
                    height: 81px; /* Adjust this height to match the header height */
                }
                .sticky-navbar {
                    position: fixed;
                    top: 81px; /* Adjust this value to match the height of the header */
                    width: 100%;
                    z-index: 1010;
                }
                `}
            </style>
            {isSticky && <div className="header-placeholder"></div>}
            <header className={`header container-fluid d-flex align-items-center justify-content-between p-3 ${isSticky ? 'sticky' : ''}`} style={{backgroundColor:mode=="dark"?"black":"", boxShadow:mode=="dark"?"0 4px 4px rgba(255, 255, 255, 0.2)":"" }}>
                <div className="logo ">
                    <a href="https://eventmint.vercel.app/">
                        <img src={Logo} alt="Logo" className="aspect-[3/2] object-contain" />
                    </a>
                </div>
                <div className="search-location-container d-flex align-items-center justify-content-between w-100">
                    <div className="search-bar input-group w-75" style={{ marginLeft: "20px" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            value={searchTerm}
                            onChange={handleSearch} // Update the search term on input change
                        />
                        <span className="input-group-text">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                    <div className="mode" onClick={handleMode}>
                        {mode=="light"?
                        <i class="bi bi-brightness-high-fill"></i>
                        :
                        <i class="bi bi-moon-fill"></i>}
                    </div>
                    <select className="location form-select w-auto" style={{ marginLeft: "10px" }}>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                    </select>
                </div>

                <div className="location-signin d-flex align-items-center">
                    {user ? (
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => dispatch(logout(navigate))}>
                            Log out
                        </button>
                    ) : (
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <button
                                className="px-2 rounded-lg w-[120px] py-2 border-[2px] font-semibold hover:font-semibold hover:text-white border-red-600 hover:bg-red-500" onClick={() => navigate("/login")} style={{color:mode=="dark"?"white":""}}>
                                Login/SignUp
                            </button>
                        </div>
                    )}
                <div className="side-menu-toggle ml-4">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                    
                    
                <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> 
                </div>
            </header>
            <NavBar isSticky={isSticky} />
        </>
    );
}

export default Header;