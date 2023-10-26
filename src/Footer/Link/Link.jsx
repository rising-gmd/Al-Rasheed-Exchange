import { Anchor } from '@mantine/core';
import React from 'react';
import classes from './Link.module.css';
import { withNamespaces } from 'react-i18next'; 

const Link = ({ link, t }) => {
    function handleScroll(link) {
        event.preventDefault();

        const element = document.getElementById(link.link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return (
        <>
            <Anchor
                key={link.label}
                href={link.link}
                lh={1}
                onClick={(event) => handleScroll(link)}
                size="sm"
                className={classes.link}
            >
                {t(link.label)}
            </Anchor>
        </>
    );
}

export default withNamespaces()(Link);
