import React from "react";
import "./css/FormField.css";
import {
	Input,
	InputLabel,
	MenuItem,
	FormControl,
	ListItemText,
	Select,
	Checkbox,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight:
				ITEM_HEIGHT * 4.5 +
				ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const FormField = (props) => {
	// imports from Search.jsx
	const {
		labelId,
		inputLabelDisplay,
		id,
		selectValue,
		selectOnChange,
		option,
	} = props;
	return (
		<FormControl className="FormControl">
			<InputLabel id={labelId}>
				{inputLabelDisplay}
			</InputLabel>
			<Select
				labelId={labelId}
				id={id}
				multiple
				value={selectValue}
				onChange={selectOnChange}
				input={<Input />}
				// renderValue shows all selected items joined into a single array
				renderValue={(selected) =>
					selected.join(", ")
				}
				MenuProps={MenuProps}
			>
				{/* for each data option, this maps through them and displays a menu items with a corresponding checkbox */}
				{option.map((e) => (
					<MenuItem key={e} value={e}>
						<Checkbox
							checked={selectValue.includes(
								e
							)}
						/>
						<ListItemText
							primary={e}
						/>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FormField;
