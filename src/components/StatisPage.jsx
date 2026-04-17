import React, { useContext } from 'react';

import { ConnectionConext } from '../Context/ConnectionContext';
import NoActivity from './NoActivity';
import {Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatisPage = () => {
    const {analysis , timeline} = useContext(ConnectionConext);
   
    return (
         <div className='w-11/12  md:w-12/16 mx-auto my-20'>
              <h1 className='text-4xl sm:text-5xl font-bold'>Friendship Analytics</h1>
              {
                timeline.length == 0 ? <NoActivity></NoActivity> : <div  className='shadow-sm'>
                    <p className='p-4'>By Interaction Type</p>
                     <div className='flex justify-center items-center p-4'>
                    <PieChart
                style={{ width: '100%', maxWidth: '600px', maxHeight: '80vh', aspectRatio: 1 }}
                responsive
                margin={{
                    top: 50,
                    right: 120,
                    bottom: 0,
                    left: 120,
                }}
                >
                <Pie
                data={analysis}
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="100%"
                dataKey="value"
                >
                {
                    analysis.map((entry, index) => {
                    let color;
                    if (entry.name === "text") {
                        color = 'green';
                    } else if (entry.name === "call") {
                        color = 'red';
                    } else{
                        color ='#244D3F';
                    }
                    return <Cell key={`cell-${index}`} fill={color} />;
                    })
                }
                </Pie>
                <Tooltip></Tooltip>
                <Legend></Legend>
                </PieChart>
                </div>
             </div>
            }
        </div>
    );
};

export default StatisPage;