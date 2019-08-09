// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, barVisualizationUri, Stg3BarVisualizationUri } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-bar">
                <Visualization
                    projectId={projectId}
                    //Demo
                    //uri={barVisualizationUri}
                    //Staging 3
                    uri={Stg3BarVisualizationUri}
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default VisualizationTable;
