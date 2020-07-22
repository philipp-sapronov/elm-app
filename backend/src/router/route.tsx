import React from "react";
import { Route as ReactRoute, RouteProps } from "react-router-dom";
// import { RootState } from "../store/types";

interface Props extends RouteProps {}

export const Route = ({ component, ...rest }: Props) => {
  if (!component) {
    console.log("componenr");

    return null;
  }

  console.log("componenr");

  const routeComponent = (props: any) => React.createElement(component, props);

  return (
    <>
      <ReactRoute {...rest} render={routeComponent} />
    </>
  );
};
