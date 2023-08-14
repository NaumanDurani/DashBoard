import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, LineController, LineElement, Title } from 'chart.js';
import { Container } from 'react-bootstrap';
import '../Css/LastGraph.css'


const LineChart = () => {
  const lineChartRef = useRef(null);
  const lineChartInstance = useRef(null);

  useEffect(() => {
    Chart.register(LinearScale, LineController, LineElement, Title);

    if (lineChartInstance.current) {
      lineChartInstance.current.destroy();
    }

    const lineCtx = lineChartRef.current.getContext('2d');

    lineChartInstance.current = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['14', '15', '16', '17', '18', '19'],
        datasets: [
          {
            label: 'Data Set 3',
            data: [15, 30, 40, 50, 10, 80],
            borderColor: 'white',
            pointRadius: 0,
            tension: 0.2,
            showLine: true,
            pointBorderWidth: 10,
            pointHitRadius: 30,
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
            ticks: {
              color: 'white',
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
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
    <div className=' bluee mt-3  '>
      <Container>
        <div className='  '>
          <span className=' lastGraphHeading d-flex '>3456</span>
          <span className='lastGrapgParagraph '>patient this month</span>
          <canvas ref={lineChartRef} style={{marginTop:"90px"}} className='   ' ></canvas>
        </div>
      </Container>
    </div>
  );
};

export default LineChart;
