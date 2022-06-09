import "./FileLoader.css";

export function FileLoader({
    getProjects
}) {

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const csvFiles = Array.from(e.dataTransfer.files);

        csvConvertToProjects(csvFiles);
    };

    const handleLoad = (e) => {
        e.preventDefault();

        const csvFiles = Array.from(e.target.files);

        csvConvertToProjects(csvFiles);
    }

    const csvConvertToProjects = (files) => {
        files.forEach(async (file) => {
            const plainText = await file.text();

            const rows = plainText.trim().split('\r\n');

            const splitedRows = rows.map(r => r.split(', '));

            const projects = [];

            splitedRows.forEach(row => {

                const dateFrom = new Date(row[2]).getTime();

                let dateTo = new Date(row[3]).getTime();

                if (isNaN(dateTo)) {
                    dateTo = Date.now();
                }

                const milliseconds = dateTo - dateFrom;

                const days = Math.round(milliseconds / (1000 * 3600 * 24));

                const index = projects.findIndex(project => project.id === row[1]);

                if (index === -1) {
                    projects.push({
                        id: row[1],
                        employees: [{
                            id: row[0],
                            workDays: days
                        }]
                    });

                } else {

                    const employee = projects[index].employees.find(e => e.id === row[0]);
                    
                    if (employee) {
                        employee.workDays = employee.workDays + days
                    } else {
                        projects[index].employees.push({
                            id: row[0],
                            workDays: days
                        });
                    }
                }
            });
            
            projects.forEach(p => {
                p.employees.sort((e1, e2) => e2.workDays - e1.workDays);
            });
            
            getProjects(projects);
        })
    }

    return (
        <div className="drag-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}>

            <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <header>Drag & Drop to Upload CSV File</header>
            <span>OR</span>
            <input className="custom-file-input" type="file" accept=".csv" onChange={handleLoad} ></input>
        </div>
    )
}