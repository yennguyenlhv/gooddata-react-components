// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, donutVisualizationUri, Stg3DonutVisualizationUri } from "../utils/fixtures";
import { CUSTOM_COLOR_PALETTE } from "../utils/colors";
export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-donut">
                <Visualization
                    projectId={projectId}
                    //uri={donutVisualizationUri}
                    uri={Stg3DonutVisualizationUri}
                    experimentalVisExecution={true}
                    config={{ colorPalette: CUSTOM_COLOR_PALETTE }}
                />
            </div>
        );
    }
}

export default VisualizationTable;
