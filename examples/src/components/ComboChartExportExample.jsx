// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { ComboChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    projectId,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    locationResortIdentifier,
} from "../utils/fixtures";

export class ComboChartExportExample extends Component {
    render() {
        const columnMeasures = [
            Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
                .format("#,##0")
                .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
        ];

        const lineMeasures = [
            Model.measure(franchiseFeesAdRoyaltyIdentifier)
                .format("#,##0")
                .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
        ];

        const locationResort = Model.attribute(locationResortIdentifier).localIdentifier("location_resort");

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-combo-chart">
                        <ComboChart
                            projectId={projectId}
                            primaryMeasures={columnMeasures}
                            secondaryMeasures={lineMeasures}
                            viewBy={locationResort}
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

export default ComboChartExportExample;
