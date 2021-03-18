import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <Avatar>
                    <HomeIcon />
                </Avatar>
                <Avatar>
                    <SearchIcon />
                </Avatar>
                <Avatar>
                    <QueuePlayNextIcon />
                </Avatar>
                <Avatar>
                    <LocalGroceryStoreIcon />
                </Avatar>
                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
            </div>
        </div>
    )
}

export default Footer
