import React from "react";


export default function LastUpdated(props) {
    return (
       <div className="last-updated">
           Last updated: {props.date}
       </div>
    );
}