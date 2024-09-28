import LineChart from "./line-chart";

function BarChart() {
    return <h1>Bar chart</h1>;
}

export default function DashBoard() {
    return (
        <>
            <LineChart />
            <BarChart />
        </>
    );
}
