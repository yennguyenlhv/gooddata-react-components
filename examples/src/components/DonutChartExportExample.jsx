// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { DonutChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    projectId,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
} from "../utils/fixtures";

export class DonutChartExportExample extends Component {
    render() {
        const measures = [
            Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
            Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
            Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
        ];
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-donut-chart">
                        <DonutChart
                            projectId={projectId}
                            measures={measures}
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

export default DonutChartExportExample;
