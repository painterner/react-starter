import React, { useEffect, useState } from "react";
import { Tab as BTab, Tabs as BTabs } from "react-bootstrap";

import "./styles.scss";

interface Props {
  menus: any[];
  type?: string;
}


const ROUTE_TABS_MAP: any = {
  menus: []
};
export const AppTab = ({ menus, type, ...props }: Props) => {
  const [value, setValue] = React.useState(0);
  const [route, setRoute] = useState("");

  const renderTab1 = (x: number) => {
    return <div>{x}</div>;
  };

  useEffect(() => {
    const path = window.location.pathname;
    const splited = path.split("/").filter((x) => x);
    setRoute(ROUTE_TABS_MAP[splited[splited.length - 1]]);
  }, []);


};
