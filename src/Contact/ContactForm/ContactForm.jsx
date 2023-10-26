import React from 'react';
import { Button, Group, TextInput, Textarea } from '@mantine/core';
import { withNamespaces } from 'react-i18next'; // Import withNamespaces
import classes from './ContactForm.module.css';

const ContactForm = ({ t }) => {
    return (
        <>
            <TextInput
                label={t('Email')}
                placeholder="sheikhzahid@gmail.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
                label={t('Name')}
                placeholder={t('Sheikh Zahid')} // Use the t function for the placeholder
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
                withAsterisk
                label={t('Description')}
                placeholder={t('I wanted to say that')} // Use the t function for the placeholder
                rows={12}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="xl">
                <Button className={classes.control}>{t('Send message')}</Button> {/* Use the t function for the button text */}
            </Group>
        </>
    );
}

export default withNamespaces()(ContactForm); // Wrap the component with withNamespaces
