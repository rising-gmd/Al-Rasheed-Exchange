import { Anchor, Group, ActionIcon, rem, Avatar } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from './Link/Link';
import Logo from "../assets/Logo.jpg"

const links = [
    { link: '#home', label: 'Home' },
    { link: '#companies', label: 'Companies' },
    { link: '#qrcode', label: 'QR Code' },
    { link: '#features', label: 'Our Services' },
    { link: '#gallary', label: 'Gallary' },
    { link: '#contact', label: 'Contact Us' },
];

const Footer = () => {

    const items = links.map((link, index) => (<Link key={index} link={link} />))

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Avatar src={Logo} size={40} />
                <Group className={classes.links}>{items}</Group>
                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl" className={classes.socialIcon}>
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl" className={classes.socialIcon}>
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl" className={classes.socialIcon}>
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}

export default Footer