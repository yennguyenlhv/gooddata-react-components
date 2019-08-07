// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { ScatterPlot, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    projectId,
    franchiseFeesIdentifier,
    franchisedSalesIdentifier,
    locationResortIdentifier,
} from "../utils/fixtures";

export class ScatterChartExportExample extends Component {
    render() {
        const xMeasure = Model.measure(franchiseFeesIdentifier).format("#,##0");

        const yMeasure = Model.measure(franchisedSalesIdentifier).format("#,##0");

        const locationResort = Model.attribute(locationResortIdentifier);

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-scatter-plot">
                        <ScatterPlot
                            projectId={projectId}
                            xAxisMeasure={xMeasure}
                            yAxisMeasure={yMeasure}
                            attribute={locationResort}
                            onExportReady={onExportReady}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default ScatterChartExportExample;
