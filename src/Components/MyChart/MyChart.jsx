import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts"

const MyChart = (props) => {

    const [data, setData] = useState([]);
    const options = {
        title: "Service Dollars Spent Per Vehicle Lifetime",
        chartArea: { width: "auto" },
        colors: ["#808080"],
        backgroundColor: {
            fill: "rgba(70, 69, 69, 0.479)",
            opacity: 0.4
        },
        hAxis: {
            title: "Dollars",
            minValue: 0,
        },
        vAxis: {
            title: "Vehicle",
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