import React from "react";
import "./styles.scss";

interface Props {
  children: any
}

// Section center text
export const SectionText = ({children, ...props}: Props) => {
  return (
    <section className="section">
      <div className="container">
        <h5>{children}</h5>
      </div>
    </section>
  );
};
