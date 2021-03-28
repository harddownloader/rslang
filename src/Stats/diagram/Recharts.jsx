import React from 'react';
import GroupedBarChart from '@bit/kendopunk.charts.grouped-bar-chart';

const Diagrama = () => {

    const chartData = [
        { data: '25', word: 125, color: '#ffeb3b' },
        { data: '26', word: 10, color: '#ffeb3b' },
        { data: '27', word: 30, color: '#ffeb3b' },
        { data: '28', word: 5, color: '#ffeb3b' },
        { data: '29', word: 13, color: '#ffeb3b' },
        { data: '30', word: 25, color: '#ffeb3b' },
        { data: '31', word: 37, color: '#ffeb3b' },
    ]

    const tickFormatter = (n) => String(n)

    return (
        <div>
            <GroupedBarChart
                chartData={chartData}
                canvasWidth="470"
                canvasHeight="450"
                linearMetric="word"
                lnearTickFormat={tickFormatter}
                ordinalMetric="data" />

        </div>
    )
}


export default Diagrama;