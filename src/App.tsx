import { useCallback, useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

const tab = [
	"#433caf",
	"#ffffff",
	"#e40707",
	"#1de407",
	"#433caf",
	"#ffffff",
	"#e40707",
	"#1de407",
	"#433caf",
	"#ffffff",
	"#e40707",
	"#1de407",
	"#433caf",
	"#ffffff",
	"#e40707",
	"#1de407",
	"#433caf",
	"#ffffff",
	"#e40707",
	"#1de407",
];

function App() {
	const [selectedColor, setSelectedColor] = useState<string>("#e40707");

	const changeColor = (color: string) => {
		setSelectedColor(color);
	};

	return (
		<div className="App">
			<ColorPicker
				color={selectedColor}
				onColorChange={changeColor}
				colors={tab}
			/>
			<div
				style={{
					backgroundColor: selectedColor,
					aspectRatio: "1/1",
					width: "60px",
				}}
			></div>
		</div>
	);
}

export default App;
