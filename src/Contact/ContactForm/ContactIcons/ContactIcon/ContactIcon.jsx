import React from 'react';
import { Box, Text, rem } from "@mantine/core";
import { withNamespaces } from 'react-i18next'; 
import classes from './ContactIcon.module.css';

const ContactIcon = ({ Icon, title, description, t }) => {
    return (
        <div className={classes.wrapper} >
            <Box mr="md">
                <Icon style={{ width: rem(24), height: rem(24) }} />
            </Box>
            <div>
                <Text size="xs" className={classes.title}>
                    {t(title)}
                </Text>
                <Text className={classes.description}>{t(description)}</Text>
            </div>
        </div>
    );
}

export default withNamespaces()(ContactIcon);
