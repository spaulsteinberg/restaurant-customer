import React from "react";
import Button from "react-bootstrap/Button";

type PlusMinusButtonsProps = {
    count: number;
    fill?:string;
    width?:string;
    height?:string;
    inc: () => void;
    dec: () => void;
}

const PlusMinusButtons = ({count, fill, width, height, inc, dec}: PlusMinusButtonsProps) => {
    return (
        <React.Fragment>
            <Button variant="danger" className="padding-adjusted-icon mx-4" onClick={dec}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                </svg>
            </Button>
            {count}
            <Button variant="primary" className="padding-adjusted-icon mx-4" onClick={inc}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </Button>
        </React.Fragment>
    )
}

PlusMinusButtons.defaultProps = {
    fill: "white",
    width: "16",
    height: "16"
}

export default PlusMinusButtons;