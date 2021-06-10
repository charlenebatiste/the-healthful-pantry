import React from "react";
import {
	makeStyles,
	Input,
	InputLabel,
	MenuItem,
	FormControl,
	ListItemText,
	Select,
	Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	noLabel: {
		marginTop: theme.spacing(3),
	},
}));

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

const FormField = () => {
	return (
		<FormControl
			className={classes.formControl}
		>
			<InputLabel id="intolerance-checkbox-label">
				Intolerances
			</InputLabel>
			<Select
				labelId="intolerance-checkbox-label"
				id="intolerance-checkbox"
				multiple
				value={userIntolerance}
				onChange={handleChange}
				input={<Input />}
				renderValue={(selected) =>
					selected.join(", ")
				}
				MenuProps={MenuProps}
			>
				{intolerances.map(
					(intolerance) => (
						<MenuItem
							key={intolerance}
							value={intolerance}
						>
							<Checkbox
								checked={
									userIntolerance.indexOf(
										intolerance
									) > -1
								}
							/>
							<ListItemText
								primary={
									intolerance
								}
							/>
						</MenuItem>
					)
				)}
			</Select>
		</FormControl>
	);
};

export default FormField;
