import React from "react";
import "./Headers.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
  return <div className="header">

{/* Iconbuuton makes the person icon look like a button
 */}
<IconButton>
    <PersonIcon fontSize="large" className="header__icon" />

</IconButton>

<img className="header__logo"
 src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
 alt=""/>
<IconButton>
    <ForumIcon fontSize="large" className="header__icon" />
</IconButton>


  </div>;
}

export default Header;
