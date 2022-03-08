import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts"
import "./MyChart.css"

const MyChart = (props) => {

    const [data, setData] = useState([]);
    const options = {
        title: "Service Dollars Spent Per Vehicle Lifetime",
        chartArea: { width: "auto" },
        colors: ["#dbdbdb"],
        backgroundColor: {
            fill: "transparent",
        },
        hAxis: {
            title: "Dollars",
            minValue: 0,
            textStyle: {
                color: "white"
            },
            titleTextStyle: {
                color: "white"
            },
            gridlines: {
                color: "white"
            },
        },
        vAxis: {
            title: "Vehicle",
            textStyle: {
                color: "white"
            },
            titleTextStyle: {
                color: "white"
            },
        },
        legend: {
            textStyle: {
                color: "white"
            }
        },
        titleTextStyle: {
            color: "white"
        },
    };

    useEffect(() => {
        let tempData = props.vehicles.map(e => {
            return [e.make, Number(e.service_cost)];
        });
        setData(tempData);
    }, [props.vehicles]);

    return (
        <div>
            <Chart
                chartType="BarChart"
                width="60%"
                height="400px"
                data={[["Vehicle", "Service Grand Total ($)"], ...data]}
                options={options}
                legendToggle
            />
        </div>
    );
}

export default MyChart;