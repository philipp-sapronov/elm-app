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
import { Article } from "../../../interfaces/post.interface";
import { SelectAutocomplete, AutocompleteOption } from "../../../theme/selectAutocomplete";
import SaveIcon from "@material-ui/icons/Save";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Status, StatusLabel } from "../../../enums/status.enum";
import VisibilityIcon from "@material-ui/icons/Visibility";

// helper
const statusList = Object.values(Status);
const findById = (map: Record<string, AutocompleteOption>) => (id: string) => map[id];
const toId = (item: AutocompleteOption) => item._id;
const createMap = (array: AutocompleteOption[]) =>
  array.reduce((acc, item) => {
    return { ...acc, [item._id]: item };
  }, {});

enum Fields {
  categories = "categories",
  content = "content",
  excerpt = "excerpt",
  slug = "slug",
  tags = "tags",
  title = "title",
  status = "status",
}

type FormData = {
  [Fields.categories]: AutocompleteOption[];
  [Fields.content]: string;
  [Fields.excerpt]: string;
  [Fields.slug]: string;
  [Fields.tags]: AutocompleteOption[];
  [Fields.title]: string;
  [Fields.status]: Status;
};

const toFormData = (
  data: Article | null,
  categories: AutocompleteOption[],
  tags: AutocompleteOption[]
): FormData => {
  const categoriesMap = createMap(categories);
  const tagsMap = createMap(tags);

  return {
    [Fields.categories]: data?.categories?.map(findById(categoriesMap)) || [],
    [Fields.content]: data?.content || "",
    [Fields.excerpt]: data?.excerpt || "",
    [Fields.slug]: data?.slug || "",
    [Fields.status]: data?.status || Status.new,
    [Fields.tags]: data?.tags?.map(findById(tagsMap)) || [],
    [Fields.title]: data?.title || "",
  };
};

const toPost = (data: FormData) => {
  return {
    ...data,
    categories: data.categories.map(toId),
    tags: data.tags.map(toId),
  };
};

type PostsFormProps = {
  categories: AutocompleteOption[];
  onClose: () => void;
  onSubmit: (data: Partial<Article>) => void;
  post: Article | null;
  tags: AutocompleteOption[];
  title: string;
};

export const Form: React.FC<PostsFormProps> = (props) => {
  const { onClose, title, post, categories, tags, onSubmit } = props;
  const [data, setData] = useState(toFormData(post, categories, tags));

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onAutocompleteChange = ({ name, value }: { name: string; value: AutocompleteOption[] }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSubmit(toPost(data));
  };

  const classes = useFormStyles();
  const formControlClasses = { root: classes.formControl };
  const submitButtonClasses = { root: classes.submitButton };

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
            variant="outlined"
            startIcon={<VisibilityIcon />}
            classes={submitButtonClasses}
          >
            excerpt
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
            classes={submitButtonClasses}
            onClick={handleSave}
          >
            save
          </Button>
        </div>
      </div>
      <div className={classes.formWrapper}>
        <form className={classes.form}>
          <FormControl classes={formControlClasses}>
            <TextField
              classes={{ root: classes.statusSelect }}
              label="Status"
              name={Fields.status}
              onChange={onChange}
              select
              size="small"
              value={data.status}
              variant="outlined"
            >
              {statusList.map((option) => (
                <MenuItem key={option} value={option}>
                  {StatusLabel[option]}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl classes={formControlClasses}>
            <TextField
              error={false}
              fullWidth
              helperText={"The slug of post should be unique."}
              label="Slug"
              name={Fields.slug}
              onChange={onChange}
              required
              size="small"
              value={data.slug}
              variant="outlined"
            />
          </FormControl>
          <FormControl classes={formControlClasses}>
            <TextField
              fullWidth
              helperText={"Maximum 256 characters."}
              label="Title"
              name={Fields.title}
              onChange={onChange}
              required
              size="small"
              value={data.title}
              variant="outlined"
            />
          </FormControl>
          <FormControl classes={formControlClasses}>
            <TextField
              fullWidth
              helperText={"Maximum 256 characters."}
              label="excerpt"
              multiline
              name={Fields.excerpt}
              onChange={onChange}
              required
              rowsMax={4}
              size="small"
              value={data.excerpt}
              variant="outlined"
            />
          </FormControl>
          <FormControl classes={formControlClasses}>
            <TextField
              fullWidth
              label="Content"
              multiline
              name={Fields.content}
              onChange={onChange}
              required
              rows={20}
              size="small"
              value={data.content}
              variant="outlined"
            />
          </FormControl>
          <FormControl classes={formControlClasses}>
            <SelectAutocomplete
              label="Categories"
              name={Fields.categories}
              onChange={onAutocompleteChange}
              options={categories}
              value={data.categories}
            />
          </FormControl>
          <FormControl classes={formControlClasses}>
            <SelectAutocomplete
              label="Tags"
              name={Fields.tags}
              onChange={onAutocompleteChange}
              options={tags}
              value={data.tags}
            />
          </FormControl>
        </form>
      </div>
    </div>
  );
};
