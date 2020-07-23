import { createStyles, makeStyles, Theme, fade } from "@material-ui/core/styles";

const drawerWidth = 240;
const drawerWidthCollapsed = 73;

export const useHeaderStyles = makeStyles((theme: Theme) => {
  const transition = theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  return createStyles({
    appBar: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidthCollapsed}px)`,

      transition,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    //
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(1),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1.5),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      fontSize: 14,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "28ch",
        },
      },
    },
  });
});

export const useDrawerStyles = makeStyles((theme: Theme) => {
  const transition = theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  return createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      transition,
      width: drawerWidth,
    },
    drawerClose: {
      transition,
      overflowX: "hidden",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidthCollapsed,
      },
    },
    navlink: {
      color: "inherit",
      textDecoration: "inherit",
      width: "100%",
    },
    listItem: { padding: 0 },
    iconButton: {
      padding: theme.spacing(1, 3),
      width: drawerWidth,
      boxSizing: 'border-box',
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1.4),
      ...theme.mixins.toolbar,
    },
  });
});

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  })
);
