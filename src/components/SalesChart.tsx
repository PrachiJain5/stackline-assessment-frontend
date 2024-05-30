import React,{useEffect, useMemo} from "react";
import { Chart as ChartJS, ChartOptions, registerables } from 'chart.js';
import { Chart } from "react-charts";
import {data} from '../data.js'

const SalesChart :React.FC=()=>{

    const retailPrices = data[0].sales.map((sale, index) => [index, sale.retailSales] )
    const wholesaleSales = data[0].sales.map((sale, index) => [index, sale.wholesaleSales] )

    const prices = React.useMemo(
        () => [
          {
            label: "Retail Prices",
            data: retailPrices,
            borderColor: 'rgba(0, 123, 255, 1)',
				backgroundColor: 'rgba(0, 123, 255, 0.5)',
				tension: 0.4,
                
          },
          {
            label: "Wholesale Prices",
            data: wholesaleSales,
            borderColor: 'rgba(108, 117, 125, 1)',
				backgroundColor: 'rgba(108, 117, 125, 0.5)',
				tension: 0.4,
          },
        ],
        []
      );
    
      const options: ChartOptions<'line'> = {
		elements: {
			point: {
				radius: 3,
			},
		},
		animation: {
			duration: 1000,
			easing: 'easeOutQuart',
		},
		scales: {
			x: {
				offset: true,
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
				type: 'time',
				time: {
					unit: 'month',
					displayFormats: {
						month: 'MMM',
					},
					tooltipFormat: 'MMM d, yyyy',
				},
				title: {
					display: false,
				},
			},
			y: {
				// max: maxSales + (maxSales - minSales) / 2,
				// min: minSales - (maxSales - minSales) / 2,
				offset: true,
				display: false,
				grid: {
					display: false,
				},
			},
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
		maintainAspectRatio: false,
	};
      const axes = React.useMemo(
        () => [
          { primary: true, type: "linear", position: "bottom", },
          { type: "linear", position: "left" },
        ],
        []
      );
    
      return (
        <div
          style={{
            width: "100%",
            height: "300px",
          }}
        >
          <Chart axes={axes} data={prices}   />
          <h1>Hello Love</h1>
          
        </div>
      );

}

export default SalesChart



