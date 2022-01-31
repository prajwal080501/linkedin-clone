import React from 'react';
import './HeaderMenu.css';


export const HeaderMenu = ({navdata}) => {
    return (
        <div className="headermenu">
            {navdata.map(({ title, icon, link }) => (
                <li>{icon}</li>
            ))}
        </div>
    );
};
