import "./Analytics.css"
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line
} from "recharts"

const data = [
  {
    "name": "Page A",
    "Followers": 4000,
    "Earnings": 2400
  },
  {
    "name": "Page B",
    "Followers": 3000,
    "Earnings": 1398
  },
  {
    "name": "Page C",
    "Followers": 2000,
    "Earnings": 9800
  },
  {
    "name": "Page D",
    "Followersv": 2780,
    "Earnings": 3908
  },

]

const data02 = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const data03 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data04 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }]

const Analytics = ({ chart_i, chart_ii, chart_iii, title, value, illustration}) => {
  return (
    <div className="analytics">
      {chart_i && <>
        <header>
          <span className="followers">Subcribers:</span>
          <span className="earnings" >Earnings:</span>

        </header>
        <BarChart className="chart" width={250} height={210} data={data}
        >
          <CartesianGrid strokeDasharray="100 10" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Followers" fill="#00464e" />
          <Bar dataKey="Earnings" fill="#810551" />
        </BarChart>
      </>}
      {chart_ii && (
        <LineChart
          width={260}
          height={220}
          data={data02}
          margin={{ top: 10, right: 10, }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#810551" />
          <Line type="monotone" dataKey="uv" stroke="#00464e" />
        </LineChart>)}
      {chart_iii && <PieChart width={730} height={250}>
        <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#00464e" />
        <Pie data={data04} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#810551" label />
      </PieChart>}
      {title &&(
        <>
        <h1 className="title" >{title}</h1>
        <h2 className="value">{value}</h2>
        <h2 className="extra-text">
          People are loving your content
           <br />
        </h2>

        <img src={illustration} alt="illus" className="illustration" />
        </>
      )}
    </div>

  )
}



export default Analytics
