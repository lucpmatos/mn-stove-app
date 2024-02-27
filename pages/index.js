import React from "react";

// Components
//
import Stove from "@/src/components/Stove/Stove";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Stove brand='Consul' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
