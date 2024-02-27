import React, {useContext} from "react";

// Contexts
//
import StoveContext from "@/src/contexts/StoveContext";

export default function LampButton(){
	const {oven, setOven} = useContext(StoveContext);

	return (
		<button
			className="lampButton"
			onClick={() => {
				setOven({...oven, lamp: oven.lamp !== true})
			}}
		/>
	)
}
