import React, { useEffect, useRef, useState } from "react";
import classes from "./ColorPicker";

const ColorPicker: React.FC<{
	color: string;
	onColorChange: (color: string) => void;
	colors: string[];
}> = (props) => {
	const [showPicker, setShowPicker] = useState<boolean>(false);
	const newColor = useRef<HTMLInputElement>(null);
	const [colors, setColors] = useState<string[]>([]);

	useEffect(() => {
		if (props.colors.length !== 0) setColors(props.colors);
	}, [props.colors]);

	function handleClickColor(color: string) {
		props.onColorChange(color);
	}

	function addColorsubmit(event: React.FormEvent) {
		event.preventDefault();
		if (newColor.current?.value) {
			const newColors = [...colors, newColor.current!.value];
			setColors(newColors);
			props.onColorChange(newColor.current!.value);
			newColor.current!.value = "";
		} else {
			alert("Please enter a valid color");
		}
	}

	return (
		<div>
			<div
				className="colorPicker__button"
				onClick={() => {
					setShowPicker((prev) => {
						return !prev;
					});
				}}
			>
				Pick a color
			</div>
			{showPicker ? (
				<div className="colorPicker__popup">
					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${Math.ceil(
								Math.sqrt(props.colors.length)
							)}, 30px)`,
						}}
					>
						{colors.map((color, i) => {
							return (
								<div
									key={i}
									style={{
										backgroundColor: color,
										aspectRatio: "1/1",
									}}
									onClick={() => {
										handleClickColor(color);
									}}
								></div>
							);
						})}
					</div>
					<form className="colorPicker__form" onSubmit={addColorsubmit}>
						<input type="text" ref={newColor} placeholder="Add a color..." />
					</form>
				</div>
			) : null}
		</div>
	);
};

export default ColorPicker;
