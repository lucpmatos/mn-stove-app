import React, {useContext} from "react";

// Contexts
//
import StoveContext from "@/src/contexts/StoveContext";

// Components
//
import MaterialIcon from "@/src/components/utils/MaterialIcon";
import LampButton from "@/src/components/Stove/LampButton";

export default function Oven({ brand }){
	const {oven, setOven} = useContext(StoveContext);

	return (
		<div className='oven'>
			<LampButton/>
			<div className={`ovenWindow ${oven.burning ? `burning`:``}`}>
				<MaterialIcon name='lightbulb' customClasses={`ovenLamp ${oven.lamp ? `active`:``}`} fontSize='30px' />
			</div>
			<h5 className="brandName">{brand}</h5>
		</div>
	)
}
