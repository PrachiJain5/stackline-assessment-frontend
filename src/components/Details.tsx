import React from "react";
import { TABLE_HEADERS } from "../constants/tableDetails";
import exp from "constants";
import {data} from '../data.js'

const Details :React.FC =()=>{
    console.log(data)
    const tableData = data[0].sales[0]
    
    return(
        <div className="details">
       <table>
        <thead>
            <tr>
                 {Object.keys(TABLE_HEADERS).map((key)=>(
                    <th >
                        {TABLE_HEADERS[key as keyof typeof TABLE_HEADERS]}
                    </th>
                 ))}
            </tr>
        </thead>
        {data[0].sales.map((sale, index) => (
						<tr key={index}>
							<td>{sale.weekEnding}</td>
							<td>{`$${sale.retailSales.toLocaleString()}`}</td>
							<td>{`$${sale.wholesaleSales.toLocaleString()}`}</td>
							<td>{`${sale.unitsSold.toLocaleString()}`}</td>
							<td>{`$${sale.retailerMargin.toLocaleString()}`}</td>
						</tr>
					))}
      
       </table>

        </div>
    )
}

export default Details;