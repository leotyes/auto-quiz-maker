import "./HomeUploadGrid.css";
import HomeUploadCard from "../HomeUploadCard/HomeUploadCard";

export default function HomeUploadGrid({ files, setFiles }) {
	return (
		<div className="home-upload-previews">
			{files.map((file, idx) => (
				<HomeUploadCard
					key={`${file.name}-${file.size}-${idx}`}
					file={file}
					setFiles={setFiles}
				/>
			))}
		</div>
	);
}
