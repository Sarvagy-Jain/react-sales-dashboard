import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

export default function Visitors() {

    const data = [
        { name: "Mon", customers: 300 },
        { name: "Tues", customers: 150 },
        { name: "Wed", customers: 500 },
        { name: "Thrus", customers: 350 },
        { name: "Fri", customers: 700 },
        { name: "Sat", customers: 800 },
        { name: "Sun", customers: 850 },
    ];

    const getPath = (x, y, width, height, cornerRadius) => (

        `M${x + cornerRadius
        },${y}
        L${x + width - cornerRadius},${y}
        Q${x + width},${y} ${x + width},${y + cornerRadius}
        L${x + width},${y + height}
        Q${x + width},${y + height} ${x + width},${y + height}
        L${x},${y + height}
        Q${x},${y + height} ${x},${y + height}
        L${x},${y + cornerRadius}
        Q${x},${y} ${x + cornerRadius},${y}
Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height, 5)} stroke="none" fill={fill} />;
    };

    return (
        <div className="h-[25rem] bg-white flex flex-col ">
            <strong className="text-black-700 font-bold px-7">Visitors</strong>
            <BarChart width={500} height={360} data={data}
                margin={{ top: 2, right: 30, left: 20, bottom: 1 }} >
                <Bar dataKey="customers" bar barSize={10} fill="#312e81" shape={<TriangleBar />} />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div >
    );

}
