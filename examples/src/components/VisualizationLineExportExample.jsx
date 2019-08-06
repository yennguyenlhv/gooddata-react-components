import React, { Component } from "react";
import { Model, Visualization } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import { lineVisualizationIdentifier, projectId } from "../utils/fixtures";

export class VisualizationLineExportExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-chart">
                        <Visualization
                            projectId={projectId}
                            identifier={lineVisualizationIdentifier}
                            onExportReady={onExportReady}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationLineExportExample;
