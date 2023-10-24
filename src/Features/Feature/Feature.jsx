import { Paper, Text, ThemeIcon, rem, useMantineTheme } from "@mantine/core";
import classes from './Feature.module.css';

const Feature = ({ icon: Icon, title, description }) => {

    const theme = useMantineTheme()

    return (
        <Paper radius={"md"} shadow="lg" p={'xl'} py={'lg'} className={classes.featureCard}>
            <ThemeIcon variant="filled" bg={theme.white} size={42} radius={42}>
                <Icon style={{ width: rem(24), height: rem(24) }} stroke={2} color={theme.colors.blue[6]} />
            </ThemeIcon>
            <Text size="lg" mt="sm" mb={7} fw={500}>
                {title}
            </Text>
            <Text lh={1.6}>
                {description}
            </Text>
        </Paper>
    );
}

export default Feature