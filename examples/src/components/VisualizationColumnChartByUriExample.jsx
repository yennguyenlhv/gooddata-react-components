// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import {
    projectId,
    columnVisualizationUri,
    Stg3ExecuteVisualizationUri,
    Stg3MufExecuteVisualizationUri,
} from "../utils/fixtures";
import { CUSTOM_COLOR_PALETTE } from "../utils/colors";

export class VisualizationColumnChartByIdentifierExample extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-chart">
                <Visualization
                    projectId={projectId}
                    //demo
                    //uri={columnVisualizationUri}
                    //staging3
                    uri={Stg3MufExecuteVisualizationUri}
                    experimentalVisExecution={true}
                    config={{ colorPalette: CUSTOM_COLOR_PALETTE }}
                />
            </div>
        );
    }
}

export default VisualizationColumnChartByIdentifierExample;
