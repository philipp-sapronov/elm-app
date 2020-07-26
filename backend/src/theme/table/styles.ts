import { createStyles, fade, lighten, makeStyles, Theme } from "@material-ui/core/styles";

export const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 0, 0, 2),
      height: 80,
    },
    buttonLabel: {
      lineHeight: 2,
    },
    highlight: {
      paddingRight: theme.spacing(2),
      color: theme.palette.primary.main,
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
    },
    itemsCount: {
      fontSize: 12,
      color: theme.palette.grey[500],
    },
    titleWrapper: {
      marginRight: theme.spacing(3),
    },
    titleSelected: {
      fontSize: 16,
      flexGrow: 1,
    },
    addButton: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
        borderColor: theme.palette.grey[400],
      },
      width: 35,
      height: 35,
      borderRadius: 4,
      border: "1px solid " + theme.palette.grey[200],
      transition: "all 0.2s ease-out",
    },
    rightPanel: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
    },
    title: {
      marginTop: theme.spacing(1),
      lineHeight: 1,
      fontSize: 22,
    },
    //
    search: {
      "&:hover": {
        borderColor: theme.palette.grey[400],
      },
      border: "1px solid " + theme.palette.grey[200],
      borderRadius: theme.shape.borderRadius,
      height: 35,
      marginLeft: 0,
      marginRight: theme.spacing(1),
      position: "relative",
      transition: "all 0.2s ease-out",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      alignItems: "center",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      padding: theme.spacing(0, 1.5),
      pointerEvents: "none",
      position: "absolute",
    },
    inputRoot: {
      color: "inherit",
      height: "100%",
    },
    inputInput: {
      fontSize: 14,
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "28ch",
        },
      },
    },
  })
);

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
      "& $rowSelected": {
        backgroundColor: lighten(theme.palette.primary.light, 0.85),
        "&:hover": {
          backgroundColor: lighten(theme.palette.primary.light, 0.85),
        },
      },
    },
    hover: {},
    rowSelected: {},
    rowRoot: {
      height: 60,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);
