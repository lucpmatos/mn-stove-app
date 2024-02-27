import React, {useContext} from "react";

// Contexts
//
import StoveContext from "@/src/contexts/StoveContext";

// Components
//
import Burner from "@/src/components/Stove/Burner";
import BurnerButton from "@/src/components/Stove/BurnerButton";

export default function StoveTop(){
	const {burners, setBurners, oven, setOven} = useContext(StoveContext);

	return (
		<React.Fragment>
			<div className='stoveTop'>

				<div className="row">
					<div className="col">
						<Burner burning={burners.tl}/>
					</div>
					<div className="col">
						<Burner burning={burners.tr}/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<Burner burning={burners.bl}/>
					</div>
					<div className="col">
						<Burner burning={burners.br}/>
					</div>
				</div>
			</div>

			<div className="stoveTopButtons">
				<div className="row">
					<div className="col">
						<BurnerButton
							burning={oven.burning}
							onCLick={() => {
								setOven({...oven, burning: oven.burning !== true})
							}}
						/>
					</div>
					<div className="col">
						<BurnerButton
							burning={burners.tl}
							onCLick={() => {
								setBurners({...burners, tl: burners.tl !== true})
							}}
						/>
					</div>
					<div className="col">
						<BurnerButton
							burning={burners.tr}
							onCLick={() => {
								setBurners({...burners, tr: burners.tr !== true})
							}}
						/>
					</div>
					<div className="col">
						<BurnerButton
							burning={burners.bl}
							onCLick={() => {
								setBurners({...burners, bl: burners.bl !== true})
							}}
						/>
					</div>
					<div className="col">
						<BurnerButton
							burning={burners.br}
							onCLick={() => {
								setBurners({...burners, br: burners.br !== true})
							}}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
