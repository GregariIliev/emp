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