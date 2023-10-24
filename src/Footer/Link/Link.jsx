import { Anchor } from '@mantine/core'
import React from 'react'
import classes from './Link.module.css';

const Link = ({ link }) => {

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
                {link.label}
            </Anchor>
        </>
    )
}

export default Link