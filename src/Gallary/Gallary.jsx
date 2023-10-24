import { Container, Grid, Group, Highlight, Image, SimpleGrid, Skeleton, Text, Timeline, rem } from '@mantine/core';
import classes from './Gallary.module.css';
import One from "../assets/Highlights/One.jpg"
import Two from "../assets/Highlights/Two.jpg"
import Three from "../assets/Highlights/Three.jpg"
import Four from "../assets/Highlights/Four.jpg"

const PRIMARY_COL_HEIGHT = rem(450);

const Gallary = () => {

    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <Container fluid className={classes.container} id="#gallary">
            <Container size={700} p={0} mb={40}>

                <Text className={classes.title}>
                    Our{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        Main Highlights
                    </Text>
                </Text>
            </Container>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Image h={PRIMARY_COL_HEIGHT} radius={'md'} src={One} />
                <Grid gutter="md">
                    <Grid.Col>
                        <Image h={SECONDARY_COL_HEIGHT} src={Two} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image h={SECONDARY_COL_HEIGHT} src={Three} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image h={SECONDARY_COL_HEIGHT} src={Four} />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    );
}

export default Gallary