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
        <>  
            <table className="table">
           
                <tbody>
                    <tr>
                        <th>Employee ID #1</th>
                        <th>Employee ID #2</th>
                        <th>Project ID</th>
                        <th>Worked days</th>
                    </tr>
                    {table
                        ? table.map(project => {

                            const firstEmployee = project.employees[0] || { id: 'Not Employee', workDays: 0 };
                            const secondEmployee = project.employees[1] || { id: 'Not Employee', workDays: 0 };

                            return (
                                <tr key={project.id}>
                                    <td><a href={'/employee/' + firstEmployee.id}>{firstEmployee.id}</a></td>
                                    <td><a href={'/employee/' + secondEmployee.id}>{secondEmployee.id}</a></td>
                                    <td><a href={'/project/' + project.id}>{project.id}</a></td>
                                    <td className="workDays">{firstEmployee.workDays + secondEmployee.workDays}</td>
                                </tr>
                            )
                        })
                        : null
                    }
                </tbody>
            </table>
        </>

    )
}