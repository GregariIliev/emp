export function FileLoader({
}) {
    return (
        <div className="drag-area"

            <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <header>Drag & Drop to Upload CSV File</header>
            <span>OR</span>
            <input className="custom-file-input" type="file" accept=".csv" onChange={handleLoad} ></input>
        </div>
    )
}