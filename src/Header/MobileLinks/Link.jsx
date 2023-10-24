import { Button, Group, UnstyledButton } from '@mantine/core';
import classes from './Link.module.css';
import { IconHome } from '@tabler/icons-react';

const Link = ({ link, active, setActive, toggle }) => {

    function handleScroll(link) {

        event.preventDefault();
        toggle()
        setActive(link.link);

        const element = document.getElementById(link.pos);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

    }

    return (
        <Button
            leftSection={<link.Icon size={18} />}
            justify='flex-start'
            variant='default'
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => handleScroll(link)}
            fullWidth
        >
            <a>
                {link.label}
            </a>
        </Button>
    )
}

export default Link