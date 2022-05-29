import { useEffect, useState } from "react";
import "./Table.css";

export function Table({
    tableData
}) {

    const [table, setTable] = useState();

    useEffect(() => {

        setTable(tableData);

    }, [tableData])

    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>Employee ID #1</th>
                    <th>Employee ID #2</th>
                    <th>Project ID</th>
                    <th>Worked days</th>
                </tr>

                {table
                    ? tableData.map(project => (
                        <tr key={project.id}>
                            <td>{project.employees[0].id}</td>
                            <td>{project.employees[1].id}</td>
                            <td>{project.id}</td>
                            <td>{project.employees[0].workDays + project.employees[1].workDays}</td>
                        </tr>
                    ))
                    : null
                }

            </tbody>
        </table>
    )
}