export function FileLoader({
}) {
    const handleLoad = (e) => {
        e.preventDefault();

        const files = Array.from(e.target.files);

    }
    return (
        <div className="drag-area"

            <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <header>Drag & Drop to Upload CSV File</header>
            <span>OR</span>
            <input className="custom-file-input" type="file" accept=".csv" onChange={handleLoad} ></input>
        </div>
    )
}