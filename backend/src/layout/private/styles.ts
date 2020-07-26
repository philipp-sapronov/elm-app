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
      boxSizing: "border-box",
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

export const usePageDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      zIndex: 1,
      // top: 64,
    },
  })
);
