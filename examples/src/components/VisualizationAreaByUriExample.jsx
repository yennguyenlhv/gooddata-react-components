// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, areaVisualizationUri, Stg3AreaVisualizationUri } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-area">
                <Visualization
                    projectId={projectId}
                    //demo
                    //uri={areaVisualizationUri}
                    //Staging 3
                    uri={Stg3AreaVisualizationUri}
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default VisualizationTable;
