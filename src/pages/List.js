import React from "react";
import authAPI from "../authAPI";
import ReactTable from "react-table";
import 'react-table/react-table.css'
import CurrencyIcon from "./CurrencyIcon";
import { Link } from "react-router-dom";

const baseURL = "https://api.bitfinex.com/v2";

var currencyList = [];

const config = {
    headers: {
        "Content-Type": "application/json",
    }
};

class ListCurrencies extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tickers: [{
                SYMBOL: "",
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
            }],
        }
    }

    componentDidMount() {
        this.getMarketCurrencies();
    }

    getMarketCurrencies = (e) => {
        var url = `/tickers?symbols=ALL`;
        return authAPI.get(url, config).then(response => {

            const { currencies } = response || { currencies: {} };
            const { status } = currencies || { message: "Invalid value" };
            const isInvalid = status >= 400 && status <= 600;
            if (isInvalid) {
                return console.log("Value not found");
            }

            if (!response) {
                return alert("404 Server Not found");
            }

            if (response.data) {
                response.data.map(data => {
                    currencyList.push({
                        SYMBOL: data[0],
                        BID: data[1],
                        BID_SIZE: data[2],
                        ASK: data[3],
                        ASK_SIZE: data[4],
                        DAILY_CHANGE: data[5],
                        DAILY_CHANGE_PERC: data[6],
                        LAST_PRICE: data[7],
                        VOLUME: data[8],
                        HIGH: data[9],
                        LOW: data[10]
                    })
                    console.log("datais", data);
                })
                console.log("response.data", currencyList)
            }

            this.setState({
                tickers: currencyList
            })
            console.log("this.state.tickers", this.state.tickers);
        }
        );
    }

    handleDetailTicker(e,value) {
        console.log("detail value is", value.original);
        localStorage.setItem("detail", JSON.stringify(value.original));
        window.location.reload();
    }

    render() {
        return (
            <div>
                <ReactTable
                    data={this.state.tickers}
                    columns={[
                        {
                            Header: "BTC Icon",
                            accessor: "SYMBOL",
                            Cell: props => (
                                // <Link to="/detail" refresh="true">
                                //     <CurrencyIcon onClick={(e) => this.handleDetailTicker(e, props)} data={props.original.SYMBOL.toLowerCase()} />
                                // </Link>
                                <div>
                                    <Link to="/detail" refresh="true">
                                    <a href={null} onClick={(e) => this.handleDetailTicker(e, props)}>
                                        <CurrencyIcon data={props.original.SYMBOL.toLowerCase()} />
                                    </a>
                                    </Link>
                                </div>
                            )
                        },
                        {
                            Header: "BTC Icon",
                            accessor: "SYMBOL",
                        },
                        {
                            Header: "BID",
                            accessor: "BID"
                        },
                        {
                            Header: "BID_SIZE",
                            accessor: "BID_SIZE"
                        },
                        {
                            Header: "DAILY_CHANGE",
                            accessor: "DAILY_CHANGE",
                        },
                        {
                            Header: "DAILY_CHANGE_PERC",
                            accessor: "DAILY_CHANGE_PERC",
                        },
                        {
                            Header: "HIGH",
                            accessor: "HIGH",
                        },
                        {
                            Header: "LAST_PRICE",
                            accessor: "LAST_PRICE",
                        },
                        {
                            Header: "LOW",
                            accessor: "LOW",
                        }
                    ]}
                    defaultPageSize={10}
                    showPageSizeOptions={false}
                    className="-striped -highlight"
                />

            </div>
        )
    }
}

export default ListCurrencies;