import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

const MyChart = () => {
    return (
        <div>
            <h4>CHART</h4>
            <Bar
                data={{
                    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple' ],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}

export default MyChart;