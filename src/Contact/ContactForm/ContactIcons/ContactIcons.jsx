import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';
import ContactIcon from './ContactIcon/ContactIcon';

const ContactIconsData = [
    { title: 'Email', description: 'exchangealrasheed@gmail.com', icon: IconAt },
    { title: 'Branch muscat', description: '+968 77133444 - 77140444 - 94115633', icon: IconPhone },
    { title: 'Branch Iraq', description: '+964 7734477300', icon: IconPhone },
    { title: 'Branch UAE', description: '+971 544282060', icon: IconPhone },
    { title: 'Address', description: 'C.R.No: 1455048 P.O.Box: 11, P.C : 112, Al Amal Hospital Building, Floor No: 7, Office No: 73, Sultanate of Oman', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

const ContactIcons = () => {

    const items = ContactIconsData.map((item, index) => <ContactIcon key={index} Icon={item.icon} title={item.title} description={item.description} />);

    return (
        <Stack gap={'xl'}>
            {items}
        </Stack>
    )
}

export default ContactIcons