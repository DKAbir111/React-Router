import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FitnessCurve() {
    const data = [
        { month: 'January', admitted: 120 },
        { month: 'February', admitted: 150 },
        { month: 'March', admitted: 180 },
        { month: 'April', admitted: 200 },
        { month: 'May', admitted: 250 },
        { month: 'June', admitted: 300 },
        { month: 'July', admitted: 350 },
        { month: 'August', admitted: 400 },
        { month: 'September', admitted: 450 },
        { month: 'October', admitted: 500 },
        { month: 'November', admitted: 550 },
        { month: 'December', admitted: 600 },
    ];

    return (
        <ResponsiveContainer width="70%" height={300} className="container mx-auto">
            <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="admitted" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
