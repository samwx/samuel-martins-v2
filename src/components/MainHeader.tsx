import React from 'react';
import { Link } from 'gatsby';

export const MainHeader = () => (
    <ul>
        <li>
            <Link className="navbar-item" to="/blog">
                Blog
            </Link>
        </li>
        <li>
            <Link className="navbar-item" to="/talks">
                Talks
            </Link>
        </li>
        <li>
            <Link className="navbar-item" to="/artigos">
                Artigos
            </Link>
        </li>
    </ul>
);
