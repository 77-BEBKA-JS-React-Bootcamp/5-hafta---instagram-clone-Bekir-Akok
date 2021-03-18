import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = () => {

    return (
        <div className="header__main">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png" alt="" />
                    </Link>
                </div>
                <div className="header__icon__set">
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                        <MailOutlineIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
