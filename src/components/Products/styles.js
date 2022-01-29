import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(1),
    minWidth:'60%'
  },
  root: {
    flexGrow: 1,
  },
  title:{
    marginTop:'20px'
  }
}));
