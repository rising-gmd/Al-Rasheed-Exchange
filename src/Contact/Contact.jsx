import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Paper,
} from '@mantine/core';
import classes from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactIcons from './ContactForm/ContactIcons/ContactIcons';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import Location from './Location/Location';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

const Contact = ({ t }) => {
    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
            <Icon size="1.4rem" stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <Paper className={classes.wrapper} id='#contact'>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50} mb={50}>
                <div>
                    <Title className={classes.title}>{t('Contact us')}</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        {t('Leave your email and we will get back to you within 24 hours')}
                    </Text>
                    <ContactIcons />
                    <Group mt={32}>{icons}</Group>
                </div>
                <div className={classes.form}>
                    <ContactForm />
                </div>
            </SimpleGrid>
            <Location />
        </Paper>
    );
}

export default withNamespaces()(Contact);
