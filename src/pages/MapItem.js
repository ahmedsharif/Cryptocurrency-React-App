import React from "react";

const MapItem = (item) => {
    console.log("mapitem", item);
    <ul>
        {item.map(i => {
            <li> {i}</li>
        })}
    </ul>
}

export default MapItem;