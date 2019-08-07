// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { Heatmap, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    projectId,
    totalSalesIdentifier,
    menuCategoryAttributeDFIdentifier,
    locationStateDisplayFormIdentifier,
} from "../utils/fixtures";

export class HeatmapChartExportExample extends Component {
    render() {
        const totalSales = Model.measure(totalSalesIdentifier)
            .format("#,##0")
            .alias("$ Total Sales");

        const menuCategory = Model.attribute(menuCategoryAttributeDFIdentifier);

        const locationState = Model.attribute(locationStateDisplayFormIdentifier);

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-heat-map">
                        <Heatmap
                            projectId={projectId}
                            measure={totalSales}
                            rows={locationState}
                            columns={menuCategory}
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

export default HeatmapChartExportExample;
