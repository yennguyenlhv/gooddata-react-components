import React, { Component } from "react";
import { Model, Visualization } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import { bubbleVisualizationUri, projectId } from "../utils/fixtures";

export class VisualizationBubbleExportExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-bubble">
                        <Visualization
                            projectId={projectId}
                            uri={bubbleVisualizationUri}
                            onExportReady={onExportReady}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationBubbleExportExample;
