import "./HomeUploadZone.css"
import { UploadCloud } from "lucide-react";
import { useState, useRef } from "react";
import HomeUploadGrid from "../HomeUploadGrid/HomeUploadGrid";

export default function HomeUploadZone() {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null);

    function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const dropped = Array.from(e.dataTransfer.files || []);
        if (dropped.length) setFiles(prev => [...prev, ...dropped]);
    }

    function handleInputChange(e) {
        const chosen = Array.from(e.target.files || []);
        if (chosen.length) setFiles(prev => [...prev, ...chosen]);
        e.target.value = "";
    }

    function openFilePicker() {
        inputRef.current?.click();
    }

    return (
        <div
            className={`home-upload-zone ${dragActive ? "home-upload-zone--active" : ""}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef}
                type="file"
                className="home-upload-input"
                multiple
                accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain,text/csv,image/png,image/jpeg"
                onChange={handleInputChange}
            />
            <div className="home-upload-inner">
                <UploadCloud className="home-upload-icon" />
                <h2 className="home-upload-title">Drag & drop files here</h2>
                <p className="home-upload-sub">or</p>
                <button type="button" className="home-upload-button" onClick={openFilePicker}>
                    <UploadCloud className="home-upload-button-icon" />
                    Upload files
                </button>
                <HomeUploadGrid files={files} setFiles={setFiles} />
            </div>
        </div>
    )
}