import "./Table.css";

import { useEffect, useState } from "react";

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
                            <td><a href={'/employee/' + project.employees[0].id}>{project.employees[0].id}</a></td>
                            <td><a href={'/employee/' + project.employees[1].id}>{project.employees[1].id}</a></td>
                            <td><a href={'/project/' + project.id}>{project.id}</a></td>
                            <td className="workDays">{project.employees[0].workDays + project.employees[1].workDays}</td>
                        </tr>
                    ))
                    : null
                }

            </tbody>
        </table>
    )
}