import React from "react";

export const Container = ({ fluid, children }) =>
    <div className={`container${fluid ? "-fluid" : ""}`}>
        {children}
    </div>;

export const Col = ({ size, children }) =>
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
        {children}
    </div>;

export const Row = ({ fluid, children }) =>
    <div className={`row${fluid ? "-fluid" : ""}`}>
        {children}
    </div>;
