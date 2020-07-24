import { createStyles, lighten, makeStyles, Theme } from "@material-ui/core/styles";

export const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight: {
      color: theme.palette.primary.main,
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
    },
    title: {
      flex: "1 1 100%",
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
