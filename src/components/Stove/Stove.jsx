import React, {useState} from "react";

// Contexts
//
import StoveContext from "@/src/contexts/StoveContext";

// Components
//
import Oven from "@/src/components/Stove/Oven";
import StoveTop from "@/src/components/Stove/StoveTop";

export default function Stove({ brand }){
	const [burners, setBurners] = useState({ tl: false, tr: false, bl: false, br: false })
	const [oven, setOven] = useState({ burning: false, lamp: false });

	return (
		<React.Fragment>
			<StoveContext.Provider value={{ burners, setBurners, oven, setOven }}>
				<div className='stove'>
					<div className="row">
						<div className="col-12">
							<StoveTop/>
						</div>
						<div className="col-12">
							<Oven brand={brand} />
						</div>
					</div>
				</div>
			</StoveContext.Provider>
		</React.Fragment>
	)
}
