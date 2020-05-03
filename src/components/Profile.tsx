import React from 'react';
import { FluidObject } from 'gatsby-image';
import { PersonalProfile } from '../styles/PersonalProfile';

interface ProfileProps {
    image: {
        childImageSharp: { fluid: FluidObject };
    };
    social: Array<{ image: { publicURL: string }; link: string }>;
}

export const Profile: React.SFC<ProfileProps> = ({ image, social }) => (
    <PersonalProfile>
        <figure>
            <img src={image.childImageSharp.fluid.src} alt="Samuel Martins" />
        </figure>
        <ul>
            {social.map(s => (
                <li>
                    <a href={s.link}>
                        <img alt={s.link} src={s.image.publicURL} />
                    </a>
                </li>
            ))}
        </ul>
    </PersonalProfile>
);
