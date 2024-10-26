"use client";

import { useState } from "react";
import LineChart from "./line-chart";
function BarChart() {
    return <h1>Bar chart</h1>;
}

export default function DashBoard() {
    console.log("Dashboard client component");
    const [name, setName] = useState("");
    return (
        <>
            <div>
                <h1>Dashboard page</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p> Hello, {name}</p>
            </div>
            <LineChart />
            <BarChart />
        </>
    );
}
