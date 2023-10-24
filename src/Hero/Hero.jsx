import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import classes from './Hero.module.css';
import Avatars from './Avatars/Avatars';
import { useDisclosure } from '@mantine/hooks';
import AboutModal from './AboutModal/AboutModal';

const Hero = () => {

    function handleScroll() {

        event.preventDefault();
        const element = document.getElementById("#qrcode");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Container fluid id='#home'>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Text className={classes.title}>
                            The  <span className={classes.highlight}> world's</span> <br />trusted currency exchange
                        </Text>

                        <Text my={36} className={classes.subTitle}>
                            Check real-time exchange rates, seamlessly send money internationally for all your financial needs.
                        </Text>

                        <Group mt={48}>
                            <Avatars />
                            <Text fw={'500'}>1k+ people already trusted us</Text>
                        </Group>

                        <Group mt={56}>
                            <Button onClick={open} size="md" variant="outline" clasName={classes.controlDefault}>
                                What is RIE?
                            </Button>
                            <Button size="md" className={classes.control} rightSection={<IconArrowRight size={18} />} onClick={() => handleScroll()}>
                                <a href="#qr" style={{ textDecoration: 'none', color: 'white' }}>
                                    Scan QR Code
                                </a>
                            </Button>
                        </Group>
                    </div>
                    <Image src={"https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600"} className={classes.image} />
                </div>
            </Container>
            <AboutModal opened={opened} close={close} />
        </>
    )
}

export default Hero