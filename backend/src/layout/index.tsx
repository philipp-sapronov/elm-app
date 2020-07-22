import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../auth/selectors";
import { PrivateLayout } from "./private";

export const Layout: React.FC = ({ children }) => {
  const user = useSelector(userSelector);

  if (typeof user.uid === "string") {
    return <PrivateLayout>{children}</PrivateLayout>;
  } else {
    return <PublicLayout>{children}</PublicLayout>;
  }
};
