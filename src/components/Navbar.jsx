  import React from "react";
import {Link} from "react-router-dom";
import styles from "../styles/Navbar.module.css"


function Navbar(props){
  return(
    <nav className={styles.navbar}>
      <Link to ="/">
        <i class="fa-solid fa-house"></i>
      </Link>
      <Link to ="/lessons">
        <i class="fa-solid fa-book-open"></i>
      </Link>
      <Link to ="/profile">
        <i class="fa-solid fa-user"></i>
      </Link>
    </nav>
  )
}

export default Navbar;