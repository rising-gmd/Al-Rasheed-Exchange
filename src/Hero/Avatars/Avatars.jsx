import { Avatar, Tooltip } from '@mantine/core';

const Avatars = () => {
    return (
        <Tooltip.Group openDelay={300} closeDelay={100}>
            <Avatar.Group spacing="sm">
                <Tooltip label="Abdul Hadi" withArrow>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYgsu61aeYoCLwGNy5Qhc2watPXo7LBHAnQ&usqp=CAU" radius="xl" />
                </Tooltip>
                <Tooltip label="Abdullah Butt" withArrow>
                    <Avatar src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4" radius="xl" />
                </Tooltip>
                <Tooltip label="Ghulam Mohiuddin" withArrow>
                    <Avatar src="https://media.gettyimages.com/id/1057013256/it/foto/ritratto-di-giovane-sorridente.jpg?s=612x612&w=gi&k=20&c=WdiW6tQ9KS14JTaT3cd_gOrH87wDKc2JEl4tOiXAIzI=" radius="xl" />
                </Tooltip>
                <Tooltip label="Ali Hussain" withArrow>
                    <Avatar src="https://st2.depositphotos.com/10614052/49038/i/450/depositphotos_490382548-stock-photo-young-businessman-newspaper-color-background.jpg" radius="xl" />
                </Tooltip>
            </Avatar.Group>
        </Tooltip.Group>
    );
}

export default Avatars