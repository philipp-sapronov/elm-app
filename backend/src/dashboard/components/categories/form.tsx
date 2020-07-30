import React from "react";
import { useFormStyles } from "./styles";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  IconButton,
  ButtonBase,
  Divider,
} from "@material-ui/core";
import { Article } from "../../../interfaces/post.interface";
import { SelectAutocomplete } from "../../../theme/selectAutocomplete";
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import SaveIcon from "@material-ui/icons/Save";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import {Status} from "../../../enums/status.enum";
import VisibilityIcon from "@material-ui/icons/Visibility";

type PostsFormProps = {
  onClose: () => void;
  title: string;
};

export const Form: React.FC<PostsFormProps> = ({ onClose, title }) => {
  const classes = useFormStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.toolbar}>
        <div className={classes.titleWrapper}>
          <ButtonBase
            onClick={onClose}
            color="inherit"
            classes={{ root: classes.arrowButton }}
            aria-label="close drawer"
          >
            <NavigateNextIcon style={{ transform: "translateX(3px)" }} />
          </ButtonBase>
          <Divider orientation="vertical" flexItem />
          <Typography className={classes.title}>{title}</Typography>
        </div>
        <div className={classes.buttonsWrapper}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
            classes={{ root: classes.submitButton }}
          >
            save
          </Button>
        </div>
      </div>
      <div className={classes.formWrapper}>
        <form className={classes.form}>
          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              select
              variant="outlined"
              label="Status"
              classes={{ root: classes.statusSelect }}
            />
          </FormControl>

          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Title"
              required
              helperText={"Maximum 256 characters."}
            />
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              multiline
              fullWidth
              rowsMax={4}
              rows={4}
              variant="outlined"
              label="Description"
              helperText={"Maximum 256 characters."}
              required
            />
          </FormControl>
        </form>
      </div>
    </div>
  );
};
