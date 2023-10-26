import { useEffect, useState } from 'react';
import { UnstyledButton, Menu, Image, Group, Avatar } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Languages.module.css';
import Language from './Language/Language';

import ArabicFlag from '../assets/Flags/ARABIC.jpg';
import AmericanFlag from '../assets/Flags/USA.jpeg';
import IranianFlag from '../assets/Flags/IRAN.jpg'

import { withNamespaces } from 'react-i18next';

const data = [
    { label: 'Arabic', image: ArabicFlag, lang: 'ar' },
    { label: 'English', image: AmericanFlag, lang: 'en' },
    { label: 'Farsi', image: IranianFlag, lang: 'fa' },
];

const Languages = ({ t, ...others }) => {

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);

    const items = data.map((item) => <Language item={item} key={item.label} setSelected={setSelected} />)

    return (
        <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target" withinPortal>
            <Menu.Target>
                <UnstyledButton {...others} className={classes.control} data-expanded={opened || undefined} >
                    <Group gap="xs">
                        <Avatar src={selected.image} size={22} />
                        <span className={classes.label}>{t(selected.label)}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}

export default withNamespaces()(Languages)