import { Box, Text, rem } from "@mantine/core";
import classes from './ContactIcon.module.css';

const ContactIcon = ({ Icon, title, description }) => {
    return (
        <div className={classes.wrapper} >
            <Box mr="md">
                <Icon style={{ width: rem(24), height: rem(24) }} />
            </Box>
            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

export default ContactIcon