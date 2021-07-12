import React, { MouseEvent } from "react";

interface Props {
    Comp: any;
    className: string;
}

export const Poper = ({Comp, ...props}: Props) => {


    return (
        <div
            className={props.className} >
        </div>
    )
}