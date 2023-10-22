import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);
  const {numberCart} = useSelector((state)=>state)

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, [loginState]);

  const onLogOutHandler = () => {
    localStorage.clear();
    setLoginState(false);
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="#">
        GroceryApp
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <Link  to="/cart" className="btn btn-danger" style={{marginRight:"1em"}}>Cart <span className="badge badge-dark">{numberCart}</span></Link>
          {loginState ? (
            <Link className="btn btn-outline-danger" onClick={onLogOutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
