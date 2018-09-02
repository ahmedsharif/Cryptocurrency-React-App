import React from "react"
import * as Icon from 'react-cryptocoins';



const CurrencyIcon = (data) => {
    var t = "";
    var alt= "";

    // var  Icon= require('react-cryptocoins/dist/icons/');
    if (data) {
        t = data.data.slice(1, 3);
        alt = data.data.slice(4, 6);
    }

    console.log("data is", data);
    
    return (
        <Icon.EthAlt />

    )
}

export default CurrencyIcon;