import React, { MouseEvent } from "react";

interface Props {
    Comp: any;
    className: string;
}

export const Poper = ({Comp, ...props}: Props) => {

    const onMouseEnter=(event: MouseEvent<HTMLDivElement>) => {

    }
    const onMouseOver=(event: MouseEvent<HTMLDivElement>) => {

    }
    const onMouseLeave=(event: MouseEvent<HTMLDivElement>) => {

    }
    const onMouseOut=(event: MouseEvent<HTMLDivElement>) => {

    }
    const onMouseDown=(event: MouseEvent<HTMLDivElement>) => {
        
    }
    const onMouseUp=(event: MouseEvent<HTMLDivElement>) => {

    }

    return (
        <div
            className={props.className} 
            onMouseDown={onMouseDown} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseUp={onMouseUp}>
        </div>
    )
}