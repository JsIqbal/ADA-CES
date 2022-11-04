import { useSelector } from 'react-redux';
import { 
    ResponsiveContainer, 
    BarChart, 
    PieChart, 
    Area, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    AreaChart, 
    CartesianGrid, 
    Pie, 
    LineChart, 
    Line, 
    Legend 
} from 'recharts';

import { areaChartData, paiData_1, paiData_2, data } from '../../features/chart-data';

function UserChart() {
    const userList = useSelector((state) => state.users.value);

    return (
        <>
          <div className='row' style={{width:"100%"}}>
          <ResponsiveContainer width='50%' aspect={3}>

                <BarChart data={userList} width={300} height={400}>
                    <XAxis dataKey='position' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='employee' fill='#144D43'/>
                </BarChart>
                
            </ResponsiveContainer>

            <ResponsiveContainer width='49%' aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={areaChartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="red" fill="#144D43" />
                </AreaChart>
            </ResponsiveContainer>

            <ResponsiveContainer width='49%' aspect={3}>
                <PieChart className='ms-auto me-auto' width={350} height={350}>
                    <Pie 
                        data={paiData_1} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={60} 
                        fill="#8884d8" 
                    />
                    <Pie 
                        data={paiData_2} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={70} 
                        outerRadius={90} 
                        fill="#144D43" 
                        label 
                    />
                </PieChart>
            </ResponsiveContainer>

            <ResponsiveContainer width='49%' aspect={3}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Line 
                        type="monotone" 
                        dataKey="pv" 
                        stroke="#144D43" 
                        activeDot={{ r: 8 }} 
                    />
                    <Line type="monotone" dataKey="uv" stroke="red" />
                </LineChart>
            </ResponsiveContainer>
          </div>
        </>
    );
}

export default UserChart;