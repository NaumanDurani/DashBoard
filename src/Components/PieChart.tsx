import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  DoughnutController,
} from 'chart.js';
import { Icon } from '@iconify/react';
import '../Css/PieChart.css';

const PieChart: React.FC = function PieChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'doughnut', number[], string> | null>(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, ArcElement, DoughnutController);
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d') as CanvasRenderingContext2D; // Asserting the type here
      chartInstance.current = new Chart<'doughnut', number[], string>(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [50, 50],
            backgroundColor: ['rebeccapurple', 'orange'],
            borderWidth: 0,
          }],
        },
        options: {
          responsive: true,
          cutout: '90%',
          plugins: {
            title: {
              display: false, // Hide the title
            },
          },
          elements: {
            arc: {
              borderWidth: 1, // Remove the border around segments
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="bg-light mt-3">
      <Container>
        <div className="p-2">
          <span className="GraphHeading d-flex justify-content-center p-2">pateint by Gender</span>
          <hr />
          <div className="Custom-PieChart">
            <div className="CustomIconContainerPie">
              <Icon icon="arcticons:goodwy-contacts" color="grey" className="CustomIcon" width="100" />
            </div>
            <canvas ref={chartRef} className="p-4">1</canvas>
          </div>
          <div className="check text-center d-flex justify-content-between justify-content-evenly mt-4 mb-4">
            <div className="mb-0">
              <Icon icon="mdi:dot" color="rebeccapurple" width="40" height="40" />
              <span className="PieChartVal">Male</span>
            </div>
            <div>
              <Icon icon="mdi:dot" color="rebeccapurple" width="40" height="40" />
              <span className="PieChartVal">Female</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PieChart;
