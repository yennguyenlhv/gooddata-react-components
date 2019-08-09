// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, tableVisualizationUri, Stg3PivotTableVisualizationUri } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-table">
                <Visualization
                    projectId={projectId}
                    //uri={tableVisualizationUri}
                    uri={Stg3PivotTableVisualizationUri}
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default VisualizationTable;
