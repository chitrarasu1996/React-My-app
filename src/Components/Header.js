import"../styles/header.css";
import { Link } from "react-router-dom";

 const Header=()=>{



   return(
    <div className="header-wrapper">
    
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to={"/"}>MyShoppeee </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item nav-link">
          <Link className="nav-link" to={"/"}>Home</Link>
        </li>
        <li class="nav-item nav-link">
       <Link className="nav-link" to={"/login"}>Login</Link>
        </li>
        <li class="nav-item dropdown nav-link">
     <Link className="nav-link" to={"/register"}> Register</Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            {/* <li><href></li> */}
            <li><a  class="dropdown-divider" className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

  </div>
   )
};
export default Header;