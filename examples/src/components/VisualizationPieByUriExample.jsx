// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, pieVisualizationUri, Stg3PieVisualizationUri } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-pie">
                <Visualization
                    projectId={projectId}
                    //uri={pieVisualizationUri}
                    uri={Stg3PieVisualizationUri}
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default VisualizationTable;
