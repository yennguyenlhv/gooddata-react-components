// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, treemapVisualizationUri, Stg3TreeMapVisualizationUri } from "../utils/fixtures";
import { CUSTOM_COLOR_PALETTE } from "../utils/colors";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-treemap">
                <Visualization
                    projectId={projectId}
                    //uri={treemapVisualizationUri}
                    uri={Stg3TreeMapVisualizationUri}
                    config={{ colorPalette: CUSTOM_COLOR_PALETTE, legend: { position: "bottom" } }}
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default VisualizationTable;
