import React from 'react'

const Tag = (props) => {
    let style = {
        background: "var(--LightGrayishCyan)",
        color: "var(--DesaturateDarkCyan)",
        padding: ".6rem",
        margin: "0 5px",
        cursor: "pointer",
        fontWeight: "bold"
    }
    return (
        <div style={style} onClick={() => props.addTag(props.tag)}>{props.tag}</div>
    );
}

export default Tag;