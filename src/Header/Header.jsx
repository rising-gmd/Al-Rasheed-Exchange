import { useState } from 'react';
import { Container, Group, Burger, Image, Avatar, Box, Text, Drawer, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import DesktopLink from './DesktopLinks/Link.jsx';
import MobileLlink from "./MobileLinks/Link.jsx"
import { Icon3dCubeSphere, IconHome, IconMapPin, IconPhoneCall, IconPhoto, IconQrcode } from '@tabler/icons-react';
import Logo from '../assets/Logo.jpg'

const links = [
    { link: '/home', label: 'Home', Icon: IconHome, pos: '#home' },
    { link: '/companies', label: 'Testimonial', Icon: IconMapPin, pos: '#companies' },
    { link: '/qrcode', label: 'QR Code', Icon: IconQrcode, pos: '#qrcode' },
    { link: '/services', label: 'Our Services', Icon: Icon3dCubeSphere, pos: '#features' },
    { link: '/gallary', label: 'Gallary', Icon: IconPhoto, pos: '#gallary' },
    { link: '/contact', label: 'Contact Us', Icon: IconPhoneCall, pos: '#contact' },
];

const Header = () => {

    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const desktopItems = links.map((link) => <DesktopLink key={link.label} link={link} active={active} setActive={setActive} />);
    const mobileItems = links.map((link) => <MobileLlink key={link.label} link={link} active={active} setActive={setActive} toggle={toggle} />);
    const title = <Avatar src={Logo} size={40} />

    return (
        <header className={classes.header}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Avatar src={Logo} size={40} />
                    <Text className={classes.companyName}>الرشيد للصرافة</Text>
                </Group>
                <Group gap={5} visibleFrom="md">{desktopItems}</Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
                <Drawer opened={opened} onClose={toggle} hiddenFrom="md" size={"xs"} title={title}>
                    <Paper mt={'xs'}>
                        {mobileItems}
                    </Paper>
                </Drawer>
            </Container>
        </header>
    )
}

export default Header