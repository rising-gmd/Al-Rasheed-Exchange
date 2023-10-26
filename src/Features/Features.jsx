import React from 'react';
import classes from './Features.module.css';
import { Text, Title, Container, SimpleGrid } from '@mantine/core';
import { withNamespaces } from 'react-i18next';
import Feature from './Feature/Feature';
import {
    IconGauge,
    IconCookie,
    IconUser,
    IconMessage2,
    IconLock,
} from '@tabler/icons-react';

export const ServicesData = [
    {
        icon: IconGauge,
        title: 'Currency Conversion',
        description: 'We offer a state-of-the-art platform for hassle-free money exchange. With a user-friendly interface and robust security measures, we make currency conversion a breeze.',
    },
    {
        icon: IconGauge,
        title: 'Extreme performance',
        description: 'Our platform offers swift and efficient money exchange services. Experience the speed and reliability you need for seamless transactions.',
    },
    {
        icon: IconUser,
        title: 'Privacy focused',
        description: 'At RIE, your financial privacy is paramount. Our platform is designed to ensure your peace of mind while you exchange currencies.',
    },
    {
        icon: IconCookie,
        title: 'No third parties',
        description: 'Our currency exchange platform ensures your transactions stay direct and secure, free from third-party involvement, for your peace of mind.',
    },
    {
        icon: IconLock,
        title: 'Secure by default',
        description: 'Our platform prioritizes security by default, while offering speedy and seamless money exchange services and quick financial exchanges.',
    },
    {
        icon: IconMessage2,
        title: '24/7 Support',
        description: "We're dedicated to your needs around the clock. Our 24/7 support ensures your currency exchange requirements are met anytime, anywhere.",
    },
];

const Features = ({ t }) => {

    const features = ServicesData.map((feature, index) => (
        <Feature icon={feature.icon} title={t(feature.title)} description={t(feature.description)} key={index} />
    ));

    return (
        <Container fluid className={classes.wrapper} id='#features'>
            <Container size={700} p={0}>
                <Text className={classes.title}>
                    {t('Comprehensive')}{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        {t('Currency Exchange')}
                    </Text>{' '}
                    {t('Services for Your Needs')}
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 24 }}
                verticalSpacing={{ base: 'xl', md: 24 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}

export default withNamespaces()(Features);
