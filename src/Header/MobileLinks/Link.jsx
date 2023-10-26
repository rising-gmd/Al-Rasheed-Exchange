import { Button, Group, UnstyledButton } from '@mantine/core';
import classes from './Link.module.css';
import { IconHome } from '@tabler/icons-react';
import { withNamespaces } from 'react-i18next'; 

const Link = ({ link, active, setActive, toggle, t }) => {

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
                {t(link.label)}
            </a>
        </Button>
    )
}

export default withNamespaces()(Link)