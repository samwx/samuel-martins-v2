import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => (
    <ul>
        <li>
            <Link
                className="navbar-item"
                activeClassName="navbar-item-active"
                to="/blog"
            >
                Blog
            </Link>
        </li>
        <li>
            <Link
                className="navbar-item"
                activeClassName="navbar-item-active"
                to="/talks"
            >
                Talks
            </Link>
        </li>
        <li>
            <Link
                className="navbar-item"
                activeClassName="navbar-item-active"
                to="/artigos"
            >
                Artigos
            </Link>
        </li>
    </ul>
);
