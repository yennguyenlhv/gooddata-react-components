// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { AreaChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    projectId,
    monthDateIdentifier,
    franchiseFeesIdentifier,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
} from "../utils/fixtures";

export class AreaChartExportExample extends Component {    
    render() {
        const measures = [
            Model.measure(franchiseFeesIdentifier).format("#,##0"),
            Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
            Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
            Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
        ];

        const viewBy = Model.attribute(monthDateIdentifier);

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-area-chart">                        
                        <AreaChart
                            projectId={projectId}
                            measures={measures}
                            viewBy={viewBy}
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

export default AreaChartExportExample;
