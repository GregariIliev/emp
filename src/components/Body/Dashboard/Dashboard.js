import "./Dashboard.css";


 export function Dashboard(){
     return (
         <div className="dashboard">
         </div>
     )
 }
import { useState } from "react";

import { Table } from "./Table.js";
import { FileLoader } from "./FileLoader.js";

export function Dashboard() {

    const [projectsData, setProjectsData] = useState();

