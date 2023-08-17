import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title, ArcElement, DoughnutController } from 'chart.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import '../Css/Combine.css';
import DropDown from './DropDown';

const CombinedChart: React.FC = () => {
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartInstance = useRef<Chart<'bar', number[], string> | null>(null);
  const pieChartInstance = useRef<Chart<'doughnut', number[], string> | null>(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, ArcElement, DoughnutController);

    if (barChartInstance.current) {
      barChartInstance.current.destroy();
    }
    if (pieChartInstance.current) {
      pieChartInstance.current.destroy();
    }

    if (barChartRef.current) {
      const barCtx = barChartRef.current.getContext('2d') as CanvasRenderingContext2D;
      barChartInstance.current = new Chart<'bar', number[], string>(barCtx, {
        type: 'bar',
        data: {
          labels: ['Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2022'],
          datasets: [
            {
              label: 'Data Set 1',
              data: [800, 1500, 400, 900, 1000, 1100],
              backgroundColor: '#2E8B57',
              barPercentage: 0.4,
              categoryPercentage: 0.4,
              borderRadius: 10,
            },
            {
              label: 'Data Set 2',
              data: [2900, 3600, 4400, 2800, 2800, 3500],
              backgroundColor: 'rebeccapurple',
              barPercentage: 0.4,
              categoryPercentage: 0.4,
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
              type: 'linear',
              beginAtZero: true,
							ticks: {
								stepSize: 1500,
								callback: (value) => {
									if ([0, 1500, 3000, 4500].includes(value as number)) {
										return value.toString();
									}
									return '';
								},
							},
            },
          },
        },
        plugins: [], // Empty array for plugins
      });
    }

    if (pieChartRef.current) {
      const pieCtx = pieChartRef.current.getContext('2d') as CanvasRenderingContext2D;
      pieChartInstance.current = new Chart<'doughnut', number[], string>(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['rebeccapurple', '#2E8B57'],
          datasets: [
            {
              data: [80, 20],
              backgroundColor: ['rebeccapurple', '#2E8B57'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: 65,
          plugins: {
            title: {
              display: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className='bg-light Combine mt-3'>
      <Container>
        <div className='check'>
          <div className='d-flex justify-content-between p-3'>
            <span className='GraphHeading'>outpatient vs. inpateint Trend</span>
            <div className='d-flex align-items-center'>
              <span className='GraphHeading'>Today</span>
              <DropDown />
            </div>
          </div>
          <div className='border'></div>
          <Row>
            <Col lg={8}>
              <canvas ref={barChartRef} className='p-3 mt-5'></canvas>
            </Col>
            <Col lg={4}>
              <canvas ref={pieChartRef} className='p-4 mt-2'></canvas>
              <div className='text-center d-flex justify-content-between justify-content-evenly mb-3'>
                <div className=''>
                  <Icon icon='mdi:dot' color='rebeccapurple' width='40' height='40' />
                  <span className='PieChartVal'>inpateint</span>
                </div>
                <div className=''>
                  <Icon icon='mdi:dot' color='rebeccapurple' width='40' height='40' />
                  <span className='PieChartVal'>outpatient</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CombinedChart;
