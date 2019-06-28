// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { ComboChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    projectId,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    locationResortIdentifier,
} from "../utils/fixtures";

export class ComboChartExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("ComboChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("ComboChartExample onError", ...params);
    }

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
            <div style={{ height: 300 }} className="s-combo-chart">
                <ComboChart
                    projectId={projectId}
                    primaryMeasures={columnMeasures}
                    secondaryMeasures={lineMeasures}
                    viewBy={locationResort}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    config={
                        {                            
                            dualAxis: true,
                            primaryChartType: 'column', // string
                            secondaryChartType: 'column', // string    
                            secondary_yaxis: {
                                visible: true,
                                labelsEnabled: true,
                                rotation: '', // ('60'/ '90'/ '30'/ 'auto')
                                min: '300000',
                                max: '',
                                 measures: ["S1", "S2", "S3"]     
                             },
             xaxis: {
                     visible: true, // boolean
                     labelsEnabled: true, // boolean
                     rotation: '60', // 'auto' or numeral string
                     min: '', // numeral string
                     max: '' // numeral string
                 },
                 
                 yaxis: {
                     visible: true, // boolean
                     labelsEnabled: true, // boolean
                     rotation: '60', // string
                     min: '10000', // numeral string
                     max: '' // numeral string
                 },
                 legend: {
                     enabled: true, // boolean
                     position: 'left', // 'top' | 'left' | 'right' | 'bottom'
                 },
                 dataLabels: {
                     visible: 'true' // 'auto' | true | false
                 },
                 grid: {
                     enabled: false // boolean
                 },
                 separators: {
                     thousand: ',',
                     decimal: '.'
                 }                    
                        }
                    }
                />
            </div>
        );
    }
}

export default ComboChartExample;
