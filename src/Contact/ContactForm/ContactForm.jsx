import { Button, Group, TextInput, Textarea } from '@mantine/core'
import React from 'react'
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <>
            <TextInput
                label="Email"
                placeholder="sheikh@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
                label="Name"
                placeholder="Sheikh Zahid"
                mt="md"

                classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
                withAsterisk
                label="Description"
                placeholder="I wanted to say that"
                rows={12}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="xl">
                <Button className={classes.control}>Send message</Button>
            </Group>
        </>
    )
}

export default ContactForm