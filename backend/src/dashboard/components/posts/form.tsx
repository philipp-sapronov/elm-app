import React from "react";
import { useFormStyles } from "./styles";
import { Typography, FormControl, TextField, Button, IconButton } from "@material-ui/core";
import { Article } from "../../../interfaces/post.interface";
import { SelectAutocomplete } from "../../../theme/selectAutocomplete";
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import SaveIcon from "@material-ui/icons/Save";

// import {Status} from "../../../enums/status.enum";

// content: string;
// createdAt: Date;
// id: string;
// preview: string;
// slug: string;
// status: Status;
// categories: Array<string>;
// tags: Array<string>;
// title: string;
// updatedAt: Date;

type PostsFormProps = {
  onClose: () => void;
};

export const Form: React.FC<PostsFormProps> = ({ onClose }) => {
  const classes = useFormStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.toolbar}>
        <div className={classes.titleWrapper}>
          <IconButton onClick={onClose} color="inherit" aria-label="close drawer" edge="start">
            <ArrowIcon />
          </IconButton>
          <Typography className={classes.title}>Update</Typography>
        </div>
        <div className={classes.buttonsWrapper}>
          <TextField
            size="small"
            select
            variant="outlined"
            label="Status"
            classes={{ root: classes.statusSelect }}
          />
          <Button
            size="small"
            color="primary"
            variant="outlined"
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
              fullWidth
              error={false}
              variant="outlined"
              label="Slug"
              size="small"
              required
              helperText={"The slug of post should be unique."}
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
              variant="outlined"
              label="Preview"
              helperText={"Maximum 256 characters."}
              required
            />
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              multiline
              fullWidth
              variant="outlined"
              rows={15}
              label="Content"
              required
            />
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <SelectAutocomplete />
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <SelectAutocomplete />
          </FormControl>
        </form>
      </div>
    </div>
  );
};
