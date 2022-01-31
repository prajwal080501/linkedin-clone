import React from 'react';
import "./Header.css";
import {AiFillHomne, AiFillLinkedin} from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import {navdata} from '../../constants/data';
import { HeaderMenu } from '../Headermenu/HeaderMenu';
export const Header = () => {
    return (
        <div class="header">
            <div class="header-left">
                <AiFillLinkedin className="brand-icon" />
                <div class="search">
                    <BiSearchAlt2 className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div class="header-right">
                <HeaderMenu navdata={navdata} />
                <div class="vl"></div>
                <div className="text">
                    <p>
                        Get hired faster
                    </p>
                    <p>
                        Try premium for free
                    </p>
                </div>
            </div>
        </div>
      )
};
