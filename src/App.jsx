import React from 'react';
import { XAxis, YAxis, AreaChart, Area, BarChart, Tooltip, Legend, Bar, CartesianGrid, ResponsiveContainer } from 'recharts';
const App = ({ data, dimKey, measKeys }) => {

    const colors = ["#8884d8", "#82ca9d"]

    return (
        <>
        <ResponsiveContainer>
          <BarChart width={600} height={600} data={data}>
            <XAxis dataKey={dimKey[0]} />
            {measKeys.map((m, i) => (
                <Bar type="monotone" dataKey={m} stackId="1" stroke={colors[i]} fill={colors[i]} />
            ))}
        </BarChart>
        </ResponsiveContainer>
        </>
    );
};

export default App;