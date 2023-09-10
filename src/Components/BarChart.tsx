import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  BarController,
  BarElement,
  Title,
} from 'chart.js';
import 'chart.js/auto';
import { Container } from 'react-bootstrap';
import CustomDropDown from './CustomDropDown';

const LineChart: React.FC = function LineChart() {
  const combinedChartRef = useRef<HTMLCanvasElement | null>(null);
  const combinedChartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    Chart.register(LinearScale, LineController, LineElement, BarController, BarElement, Title);

    if (combinedChartInstance.current) {
      combinedChartInstance.current.destroy();
    }

    const combinedChartCtx = combinedChartRef.current?.getContext('2d');

    if (combinedChartCtx) {
      combinedChartInstance.current = new Chart(combinedChartCtx, {
        type: 'bar',
        data: {
          labels: ['7am', '8am', '9am', '10am', '11am', '12pm'],
          datasets: [
            {
              type: 'line',
              label: 'Data Set 3',
              data: [49, 100, 102, 120, 90, 120],
              borderColor: 'orange',
              pointRadius: 0,
              tension: 0.2,
              showLine: true,
              pointBorderWidth: 10,
              pointHitRadius: 30,
              fill: false,
            },
            {
              type: 'bar', // Use 'bar' type for the second dataset (bar chart)
              label: 'Data Set 5',
              data: [0, 100],
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
                  if ([0, 50, 100, 150].includes(value as number)) {
                    return value;
                  }
                  return '';
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: 'top',
            },
          },
        },
      });
    }

    return () => {
      if (combinedChartInstance.current) {
        combinedChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-light mt-3">
      <Container>
        <div>
          <div className="d-flex justify-content-between align-items-center p-2">
            <span className="GraphHeading">Time Admitted</span>
            <div className="d-flex align-items-center justify-content-center">
              <span className="GraphHeading today-span">Today</span>
              <div className="dropDown">
                <CustomDropDown icon="ep:arrow-down" />
              </div>
            </div>
          </div>
          <hr />
          <canvas ref={combinedChartRef} className="p-4 mb-0">1</canvas>
        </div>
      </Container>
    </div>
  );
};

export default LineChart;
