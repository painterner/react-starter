/**
 * this component is for redirecting to video session/landing page
 */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { META } from "../../config";

export const Redirect: React.FunctionComponent = () => {
  const history = useHistory();
  useEffect(() => {
      history.push(`/`);
  }, [history]);
  return null;
};
export default Redirect;
