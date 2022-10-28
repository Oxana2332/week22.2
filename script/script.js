import moment from '../node_modules/moment';
import ApexCharts from 'apexcharts'
import Chart from 'chart.js/auto';

//moment
export function getToday() {
    const moment = require('moment');
    const date = moment().format('dddd') + ', ' + moment().format('MMMM Do YYYY');
    document.getElementById('main_date__module').innerText = date;
    const today = moment().format("MMM Do YY");
}

//chart
const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Weekly Activity',
        backgroundColor: '#808EDC',
        borderColor: '#808EDC',
        data: [6, 3, 5, 4, 8, 4, 7, 3, 6, 4],
    }]
};

const config = {
    type: 'line',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// apexcharts
const options = {
    series: [{
        name: 'New tasks',
        data: [2, 3, 6, 4, 7, 6, 6]
    }, {
        name: 'In progress',
        data: [0, 5, 2, 0, 3, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        stackType: '100%'
    }, 
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }], 
    colors: ['#808EDC', '#EB8B90'],
    xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
            'Sunday'
        ],
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();