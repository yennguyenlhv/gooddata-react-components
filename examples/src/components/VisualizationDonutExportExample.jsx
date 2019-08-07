import React, { Component } from "react";
import { Model, Visualization } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import { donutVisualizationIdentifier, projectId } from "../utils/fixtures";

export class VisualizationDonutExportExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-chart">
                        <Visualization
                            projectId={projectId}
                            identifier={donutVisualizationIdentifier}
                            onExportReady={onExportReady}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationDonutExportExample;
