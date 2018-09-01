import React from "react";
import { Btc } from 'react-cryptocoins';

class ListCurrencies extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Btc />
                </div>
        )
    }
}

export default ListCurrencies;