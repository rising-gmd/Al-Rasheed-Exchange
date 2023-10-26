import React from 'react';
import classes from './QRInstructions.module.css';
import { Button, Stack, Text } from '@mantine/core';
import { IconPlayerPlay } from '@tabler/icons-react';
import { withNamespaces } from 'react-i18next';

const QRInstructions = ({ t }) => {
    return (
        <div className={classes.instContainer}>
            <div>
                <Text className={classes.insTitle} fz={"24px"} fw={500} mt={8}>
                    {t('Scan this QR Code from your Mobile')}
                </Text>
                <Stack type='ordered' spacing={16} mt={16}>
                    <Text>{t('1. Open a QR code scanner app or use your device\'s camera')}</Text>
                    <Text>{t('2. Position the camera to capture the QR code.')}</Text>
                    <Text>{t('3. Scan the QR code.')}</Text>
                    <Text>{t('4. Result could include visiting a website or accessing information.')}</Text>
                </Stack>

                <a href="https://www.youtube.com/shorts/ULlRNdam4Pw" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button size='md' className={classes.control} mt={'xl'} rightSection={<IconPlayerPlay size={18} style={{ marginTop: 4 }} />}>
                        {t('Watch Video guide')}
                    </Button>
                </a>
            </div>
        </div >
    );
}

export default withNamespaces()(QRInstructions);
