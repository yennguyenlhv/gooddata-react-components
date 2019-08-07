import React, { Component } from "react";
import { Visualization } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import { treemapVisualizationIdentifier, projectId } from "../utils/fixtures";

export class VisualizationTreeMapExportExample extends Component {
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-treemap">
                        <Visualization
                            projectId={projectId}
                            identifier={treemapVisualizationIdentifier}
                            onExportReady={onExportReady}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationTreeMapExportExample;
