import React from 'react';
import { FluidObject } from 'gatsby-image';
import { PersonalProfile } from '../styles/PersonalProfile';

interface ProfileProps {
    image: {
        childImageSharp: { fluid: FluidObject };
    };
    social: Array<{ icon: { publicURL: string }; link: string }>;
}

export const Profile: React.FunctionComponent<ProfileProps> = ({ image, social }) => (
    <PersonalProfile>
        <figure>
            <img src={image?.childImageSharp?.fluid?.src} alt="Samuel Martins" />
        </figure>
        <ul>
            {social.map(s => (
                <li>
                    <a href={s.link}>
                        <img alt={s.link} src={s.icon.publicURL} />
                    </a>
                </li>
            ))}
        </ul>
    </PersonalProfile>
);
