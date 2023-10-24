import classes from './Link.module.css';

const Link = ({ link, active, setActive }) => {

    function handleScroll(link) {

        event.preventDefault();
        setActive(link.link);

        const element = document.getElementById(link.pos);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

    }

    return (
        <a
            href={link.pos}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => handleScroll(link)}>
            {link.label}
        </a>
    )
}

export default Link