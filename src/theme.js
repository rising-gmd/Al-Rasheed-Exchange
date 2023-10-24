import { createTheme } from "@mantine/core";

// :root[data-theme="light"] {
//     --text: #0a1703;
//     --background: #fcfefa;
//     --primary: #9118dc;
//     --secondary: #fad1e1;
//     --accent: #9719e6;
//   }
//   :root[data-theme="dark"] {
//     --text: #effce8;
//     --background: #030401;
//     --primary: #9b23e7;
//     --secondary: #2e0515;
//     --accent: #9719e6;
//   }

export const theme = createTheme({
    primaryColor: 'blue',
    colors: {
        'blue': ["#ffede4", "#ffdbcd", "#ffb69b", "#ff8e64", "#fe6d37", "#fe571a", "#ff4c09", "#e43c00", "#cb3400", "#b12900"],
    },

    components: {
        Drawer: {
            styles: (theme) => ({
                close: {
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: theme.colors.blue[6],
                        color: theme.white,
                    }
                }
            }),
        },
    }
})