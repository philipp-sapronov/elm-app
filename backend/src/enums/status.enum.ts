export enum Status {
  new = "10-new",
  draft = "20-draft",
  published = "30-publish",
  deleted = "40-deleted",
}

export const StatusLabel = {
  [Status.new]: "New",
  [Status.draft]: "Draft",
  [Status.published]: "Published",
  [Status.deleted]: "Deleted",
};
