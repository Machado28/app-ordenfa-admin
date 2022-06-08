import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { CFade } from "@coreui/react";
export default function RoutesWapper({
  component: Render,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/"></Redirect>;
  }

  return <Route {...rest} component={(props)=>(
    <CFade>
    <Component {...props} />
  </CFade>
  )} />;
}

RoutesWapper.propTypes = {
  isPrivate: PropTypes.bool,
   };
RoutesWapper.defaultProps = {
  isPrivate: false,
};  
