import React, { useState } from "react";
import { useFormStyles } from "./styles";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  ButtonBase,
  Divider,
  MenuItem,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Status, StatusLabel } from "../../../enums/status.enum";
import { Tag } from "../../../interfaces/tag.interface";
import { TagType } from "../../../enums/tagType.enum";

enum Fields {
  status = "status",
  title = "title",
  description = "description",
  type = "type",
}

const statusList = Object.values(Status);

type FormData = {
  [Fields.status]: Status;
  [Fields.title]: string;
  [Fields.description]: string;
  [Fields.type]: TagType;
};

const toFormData = (data: Tag | null): FormData => {
  return {
    [Fields.status]: data?.status || Status.new,
    [Fields.title]: data?.title || "",
    [Fields.description]: data?.description || "",
    [Fields.type]: data?.type || TagType.other,
  };
};

type TagFormProps = {
  onClose: () => void;
  onSubmit: (data: Partial<Tag>) => void;
  title: string;
  tag: Tag | null;
  tagTypes: TagType[];
};

export const Form: React.FC<TagFormProps> = ({ onClose, title, tag, onSubmit, tagTypes }) => {
  const [data, setData] = useState(toFormData(tag));

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSave = () => {
    onSubmit(data);
  };

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
            onClick={handleSave}
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
              name={Fields.status}
              onChange={onChange}
              value={data?.status}
              variant="outlined"
              label="Status"
              classes={{ root: classes.statusSelect }}
            >
              {statusList.map((option) => (
                <MenuItem key={option} value={option}>
                  {StatusLabel[option]}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              fullWidth
              name={Fields.title}
              onChange={onChange}
              value={data.title}
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
              name={Fields.description}
              onChange={onChange}
              value={data.description}
              rowsMax={4}
              rows={4}
              variant="outlined"
              label="Description"
              helperText={"Maximum 256 characters."}
              required
            />
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <TextField
              size="small"
              fullWidth
              select
              name={Fields.type}
              onChange={onChange}
              value={data.type}
              variant="outlined"
              label="Type"
              helperText={"Type is required."}
              required
            >
              {tagTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
