import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const formWidth = 800;

export const useFormStyles = makeStyles((theme: Theme) => {
  return createStyles({
    wrapper: {
      width: formWidth,
      boxSizing: "border-box",
      padding: theme.spacing(0, 5),
    },
    titleWrapper: {
      "& > *:first-child": {
        marginRight: theme.spacing(2),
      },
      display: "flex",
      alignItems: "center",
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 20,
      fontWeight: 400,
    },
    form: { display: "flex", flexDirection: "column" },
    formWrapper: { margin: theme.spacing(4, 0, 10, 0) },
    formControl: {
      marginBottom: theme.spacing(4),
    },
    buttonsWrapper: {
      "& > *": {
        marginRight: theme.spacing(2),
      },
      margin: theme.spacing(5, 0),
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
