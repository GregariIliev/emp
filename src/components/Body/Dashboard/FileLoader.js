export function FileLoader({
}) {



    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const csvFiles = Array.from(e.dataTransfer.files);

    };


    const handleLoad = (e) => {
        e.preventDefault();

        const csvFiles = Array.from(e.target.files);

    }

    const csvConvertToProjects = (files) => {
        files.forEach(async (file) => {
            const plainText = await file.text();

            const rows = plainText.trim().split('\r\n');

            const splitedRows = rows.map(r => r.split(', '));

            const projects = [];

            splitedRows.forEach(row => {

                const firstDate = new Date(row[2]).getTime();

                let secondDate = new Date(row[3]).getTime();

                if (isNaN(secondDate)) {
                    secondDate = Date.now();
                }

                const milliseconds = secondDate - firstDate;

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

                }else {
                    projects[index].employees.push({
                        id: row[0],
                        workDays: days
                    });
                }
            });

            projects.forEach(p => {
                p.employees.sort((e1, e2) => e2.workDays - e1.workDays);
            });
            
        })
    }


    return (
        <div className="drag-area"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}>

            <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <header>Drag & Drop to Upload CSV File</header>
            <span>OR</span>
            <input className="custom-file-input" type="file" accept=".csv" onChange={handleLoad} ></input>
        </div>
    )
}