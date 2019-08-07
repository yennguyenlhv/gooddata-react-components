import React, { Component } from "react";
import { Visualization } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import { scatterVisualizationIdentifier, projectId } from "../utils/fixtures";

export class VisualizationScatterExportExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-chart">
                        <Visualization
                            projectId={projectId}
                            identifier={scatterVisualizationIdentifier}
                            onExportReady={onExportReady}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationScatterExportExample;
