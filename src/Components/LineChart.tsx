/* eslint-disable comma-spacing */
import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';
import { Container } from 'react-bootstrap';
import CustomDropDown from './CustomDropDown';

const LineChart: React.FC = function LineChart() {
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const lineChartInstance = useRef<Chart<'line',(number | undefined)[], string> | null>(null);
  // eslint-disable-next-line no-spaced-func
  const barChartInstance = useRef<Chart<'bar',(number | undefined)[], string> | null>(null);

  useEffect(() => {
    Chart.register(LinearScale, LineController, LineElement, PointElement, Title);
    if (lineChartInstance.current) {
      lineChartInstance.current.destroy();
    }
    if (barChartInstance.current) {
      barChartInstance.current.destroy();
    }

    const lineCtx = lineChartRef.current?.getContext('2d');
    const barCtx = barChartRef.current?.getContext('2d');

    if (lineCtx && barCtx) {
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
              data: [0, 100],
              borderColor: 'orange',
              pointRadius: 10,
              tension: 0.2,
              showLine: true,
              pointBorderWidth: 3,
              pointHitRadius: 3,
              fill: true,
            },
          ],
        },
        options: {
          borderColor: 'red',
        },
      });

      barChartInstance.current = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['7am', '8am'],
          datasets: [
            {
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
              display: true,
              position: 'top',
            },
          },
        },
      });
    }

    return () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-light mt-3">
      <Container>
        <div>
          <div className="d-flex justify-content-between align-items-center p-3">
            <span className="GraphHeading">Time Admitted</span>
            <div className="d-flex align-items-center justify-content-center">
              <span className="GraphHeading today-span">Today</span>
              <div className="dropDown">
                <CustomDropDown icon="ep:arrow-down" />
              </div>
            </div>
          </div>
          <hr />
          <canvas ref={lineChartRef} className="p-3 mb-3">1</canvas>
          <canvas ref={barChartRef} className="p-3 mb-3">1</canvas>
        </div>
      </Container>
    </div>
  );
};

export default LineChart;
