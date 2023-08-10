import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const LineChart = () => {
  const lineChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  useEffect(() => {

    Chart.register(LinearScale, LineController, LineElement, PointElement, Title);
    if (lineChartInstance.current) {
      lineChartInstance.current.destroy();
    }
    const lineCtx = lineChartRef.current.getContext('2d');

    lineChartInstance.current = new Chart(lineCtx, {
      type: 'line',
      data: {

        labels: ['7am', '8am', '9am', '10am', '11am', '12pm'],
        datasets: [
          {
            label: 'Data Set 3',
            data: [49, 100, 102, 120, 90, 120],
            borderColor: 'orange',
            pointRadius: 0,
            tension: 0.2,
            showLine: true,
            pointBorderWidth: 10,
            pointHitRadius: 30,
            fill: true,
          },
          {
            label: 'Data Set 4',
            data: [, 100,],
            borderColor: 'orange',
            pointRadius: 10,
            tension: 0.2,
            showLine: true,
            pointBorderWidth: 3,
            pointHitRadius: 3,
            fill: true,
          },

          {
            type: "bar",
            label: 'Data Set 5',
            data: [0, 100,],
            backgroundColor: 'grey',
            barPercentage: 0.1,
            categoryPercentage: 0.1,
            borderRadius: 10,

          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50,
              callback: (value) => {
                if ([0, 50, 100, 150,].includes(value)) {
                  return value;
                }
                return '';
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });


    return () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='check mt-3 radius'>
      <Container  >
        <div className=' '>
          <div className='d-flex justify-content-between p-3 '>
            <span className='GraphHeading'>Time Admitted</span>
            <span className='GraphHeading'>Today
            <Icon icon="mingcute:down-fill"
                                color="grey"
                                width="18"
                                height="18" />
            </span>
          </div>
          <div className='border'></div>
          <canvas ref={lineChartRef} className='p-3 mb-3' ></canvas>
        </div>
      </Container>
    </div>
  );
};

export default LineChart;
