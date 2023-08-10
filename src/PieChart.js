import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Chart, Title, ArcElement, CategoryScale, LinearScale, DoughnutController } from 'chart.js';
import { Icon } from '@iconify/react';

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        Chart.register(CategoryScale, LinearScale, Title, ArcElement, DoughnutController);


        if (chartInstance.current) {
            chartInstance.current.destroy();
        }


        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green'],
                datasets: [{
                    data: [300, 50, 100, 200],
                    backgroundColor: ['red', 'blue', 'yellow', 'green'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                cutout: 50,
                plugins: {
                    title: {
                        display: true,


                    },

                }
            }
        });
    }, []);



    return (

        <div className='check radius'>
            <Container >
                <div className=' p-2   ' >
                    <span className=' GraphHeading d-flex justify-content-center p-2'>pateint by Gender</span>
                    <canvas ref={chartRef} className='p-2 mt-4'></canvas>
                    <div className=' check text-center d-flex justify-content-between   justify-content-evenly mt-3 mb-3'>
                        <div className='mb-0'>
                            <Icon icon="mdi:dot" color="rebeccapurple" width="40" height="40" />
                            <span className='PieChartVal'>Male</span>
                        </div>
                        <div className=''>
                            <Icon icon="mdi:dot" color="rebeccapurple" width="40" height="40" />
                            <span className='PieChartVal'>Female</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PieChart;