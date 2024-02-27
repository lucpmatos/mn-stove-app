import React from "react";

export default function BurnerButton({ burning, onCLick }){
	return (
		<button
			className={`burnerButton ${burning ? `active`:``}`}
			onClick={onCLick}
		/>
	)
}
