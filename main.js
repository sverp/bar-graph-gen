const canvas = document.getElementById('myChart')
const yaxisData = document.getElementById('yin');
const xaxisData = document.getElementById('xin');
const labelData = document.getElementById('lin').value;
const btn = document.getElementById("btn")
context = canvas.getContext('2d');

const xData = [];
const yData = [];

function chartIt(){
getData();
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xData,
        datasets: [{
            label: labelData,
            data: yData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function getData(){
    const yInData = yaxisData.value.split(",");
    const xInData = xaxisData.value.split(",");
    for(let i =0; i< yInData.length; i++){
    yIn = yInData[i];
    yData.push(yIn);
    console.log(yIn);
    }
    for(let i=0; i < xInData.length; i++){
        xIn = xInData[i];
        xData.push(xIn);
        console.log(xData);
    } 
}

btn.addEventListener("click",() => {    
    chartIt();
});
