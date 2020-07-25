import { createStyles, lighten, makeStyles, Theme } from "@material-ui/core/styles";

const formWidth = 800;

export const useFormStyles = makeStyles((theme: Theme) => {
  return createStyles({
    arrowButton: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
      },
      width: 64,
      height: 64,
      borderRadius: 0,
      transition: "background-color 0.2s ease-out",
    },
    wrapper: {
      width: formWidth,
      boxSizing: "border-box",
    },
    titleWrapper: {
      "& > *:last-child": {
        marginLeft: theme.spacing(2),
      },
      alignItems: "center",
      display: "flex",
      ...theme.mixins.toolbar,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // backgroundColor: lighten(theme.palette.primary.light, 0.85),
      padding: theme.spacing(0, 5, 0, 0),
      borderBottom: "1px solid " + theme.palette.divider,
    },
    title: {
      fontSize: 18,
      fontWeight: 400,
    },
    form: { display: "flex", flexDirection: "column" },
    formWrapper: {
      margin: theme.spacing(6, 0, 10, 0),
      padding: theme.spacing(0, 5),
    },
    formControl: {
      marginBottom: theme.spacing(4),
    },
    buttonsWrapper: {
      "& > *": {
        marginRight: theme.spacing(2),
      },
      // margin: theme.spacing(5, 0),
      display: "flex",
    },
    submitButton: {
      width: 100,
    },
    statusSelect: {
      width: 200,
    },
  });
});
