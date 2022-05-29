import "./Dashboard.css";


import { useState } from "react";

import { Table } from "./Table.js";
import { FileLoader } from "./FileLoader.js";

export function Dashboard() {

    const [projectsData, setProjectsData] = useState();

    const getProjects = (value) => {
        setProjectsData(value);
    }

    return (
        <div className="dashboard">
            <Table tableData={projectsData} />
            <FileLoader getProjects={getProjects} />
        </div>
    )
}