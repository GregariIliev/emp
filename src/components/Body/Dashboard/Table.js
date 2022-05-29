import { useEffect, useState } from "react";
import "./Table.css";

export function Table({
}) {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>Employee ID #1</th>
                    <th>Employee ID #2</th>
                    <th>Project ID</th>
                    <th>Worked days</th>
                </tr>
            </tbody>
        </table>
    )
}