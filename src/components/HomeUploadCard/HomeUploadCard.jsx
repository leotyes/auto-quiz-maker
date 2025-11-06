import "./HomeUploadCard.css";
import { X, Loader2, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomeUploadCard({ file, setFiles }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {setLoading(false)}, 2000)
;	}, [])

    function removeFile() {
        setFiles(prev => prev.filter(item => item !== file))
    }

	function formatBytes(bytes) {
		if (bytes === 0) return "0 B";
		const k = 1024;
		const sizes = ["B", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
	}

	return (
		<div className="file-card" title={file.name}>
			<div className="file-thumb">
                <div className={`${loading ? "file-loader" : ""}`}>
                    {loading ? <Loader2 /> : <Check />}
                </div>
			</div>
			<div className="file-info">
				<div className="file-name">{file.name}</div>
				<div className="file-meta">{formatBytes(file.size)}</div>
			</div>
            <button
                type="button"
                className="file-card__remove"
                onClick={() => removeFile()}
            >
                <X />
            </button>
		</div>
	);
}
