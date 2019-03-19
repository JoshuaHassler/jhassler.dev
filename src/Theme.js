import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from './pallet';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: blue
        },
        secondary: {
            main: pink
        },
        type: 'dark'
    }
});
