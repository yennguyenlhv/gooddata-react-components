// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { Treemap, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";

import {
    numberOfChecksIdentifier,
    locationCityDisplayFormIdentifier,
    locationStateDisplayFormIdentifier,
    projectId,
} from "../utils/fixtures";

export class TreeMapChartExportExample extends Component {
    render() {
        const numberOfChecks = Model.measure(numberOfChecksIdentifier)
            .format("#,##0")
            .alias("# Checks");

        const locationState = Model.attribute(locationStateDisplayFormIdentifier);

        const locationCity = Model.attribute(locationCityDisplayFormIdentifier);

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-tree-map">
                        <Treemap
                            projectId={projectId}
                            measures={[numberOfChecks]}
                            viewBy={locationState}
                            segmentBy={locationCity}
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

export default TreeMapChartExportExample;
