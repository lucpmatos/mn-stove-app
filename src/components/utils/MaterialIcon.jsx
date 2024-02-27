import React from "react"

const MaterialIcon = (
	{
		name,
		customClasses,
		fontSize = 'inherit',
		color = 'inherit',
	}
)=>{

	return <span
		className={`material-icons-outlined ${customClasses ? customClasses : ''}`}
		style={{
			fontSize: fontSize,
			color: color
		}}
	>{name}</span>

}

export default MaterialIcon
