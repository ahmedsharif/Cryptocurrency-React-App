import React from "react";

import authAPI from "../authAPI";

var detail = localStorage.getItem("detail");

const config = {
    headers: {
        "Content-Type": "application/json",
    }
};

class DetailTicker extends React.Component {
    constructor(props) {
        super();
        this.state = {
            BID: "",
            BID_SIZE: "",
            ASK: "",
            ASK_SIZE: "",
            DAILY_CHANGE: "",
            DAILY_CHANGE_PERC: "",
            LAST_PRICE: "",
            VOLUME: "",
            HIGH: "",
            LOW: ""
        }
    }

    componentWillMount() {
        detail = localStorage.getItem("detail");
        console.log("detail", detail);
    }

    componentDidMount() {
        this.getITemDetail();
    }

    getITemDetail = (e) => {
        console.log("detail.symbol", detail.SYMBOL);

        var url = "/ticker/" + detail.SYMBOL;
        console.log('url is', url);
        return authAPI.get(url, config).then(response => {

            const { currencyDetail } = response || { currencyDetail: {} };
            const { status } = currencyDetail || { message: "Invalid value" };
            const isInvalid = status >= 400 && status <= 600;
            if (isInvalid) {
                return console.log("Value not found");
            }

            if (!response) {
                return alert("404 Server Not found");
            }

            console.log("resposne.data", response);

            

            if (response.data) {
                // this.setState({
                //     BID: response.data.BID,
                //     BID_SIZE: response.data.BID_SIZE,
                //     ASK: response.data.ASK,
                //     ASK_SIZE: response.data.ASK_SIZE,
                //     DAILY_CHANGE: response.data.DAILY_CHANGE,
                //     DAILY_CHANGE_PERC: response.data.DAILY_CHANGE_PERC,
                //     LAST_PRICE: response.data.LAST_PRICE,
                //     VOLUME: response.data.VOLUME,
                //     HIGH: response.data.HIGH,
                //     LOW: response.data.LOW
                // })
                console.log("response.data", response.data);
            }


            // console.log("this.state", this.state);
            console.log("data")
        }
        );
    }

    render() {
        return (
            <div>
                <p> hello ahmed </p>
                <p> {this.state} </p>
                <p> hello </p>
                <p> {detail}</p>
            </div>
        );
    }
}

export default DetailTicker;