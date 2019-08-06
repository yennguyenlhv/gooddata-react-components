// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Model, Visualization } from "@gooddata/react-components";

import ExampleWithExport from "./utils/ExampleWithExport";

import { projectId, areaVisualizationIdentifier } from "../utils/fixtures";

export class VisualizationStackAreaExportExample extends Component {
    render() {       

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-visualization-chart">
                        <Visualization projectId={projectId} identifier={areaVisualizationIdentifier} 
                        onExportReady={onExportReady}                        
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default VisualizationStackAreaExportExample;
