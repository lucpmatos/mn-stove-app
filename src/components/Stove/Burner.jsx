import React from "react";

export default function Burner({ burning }){

	return (
		<div
			className={`burner ${burning ? `burning`:``}`}
		/>
	)
}
