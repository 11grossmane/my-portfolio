import React from "react";

export const MyAnchor = ({ style, children, ...other }) => {
    return (
        <a
            style={{
                textDecoration: "none",
                padding: 10,
                borderRadius: 15,
                fontWeight: "bold",
                backgroundColor: "transparent",
                border: "2px solid " + style.color,
                ...style,
            }}
            {...other}
        >
            {children} &#8594;
        </a>
    );
};
