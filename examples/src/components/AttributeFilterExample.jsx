// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import {
    LineChart,
    AreaChart,
    BarChart,
    BubbleChart,
    AttributeFilter,
    Model,
    ErrorComponent,
} from "@gooddata/react-components";
import { AFM } from "@gooddata/typings";

import "@gooddata/react-components/styles/css/main.css";

import {
    totalSalesIdentifier,
    locationResortIdentifier,
    projectId,
    franchiseFeesIdentifier,
    franchisedSalesIdentifier,
    averageCheckSizeByServer,
} from "../utils/fixtures";

const xMeasure = Model.measure(franchiseFeesIdentifier).format("#,##0");

const yMeasure = Model.measure(franchisedSalesIdentifier).format("#,##0");

const totalSales = Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales");

const locationResort = Model.attribute(locationResortIdentifier);

export class AttributeFilterExample extends Component {
    constructor(props) {
        super(props);

        this.onApply = this.onApply.bind(this);
        this.state = {
            filters: [],
            error: null,
        };
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }

    onApply(filter) {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterExample onApply", filter);
        const isPositiveFilter = AFM.isPositiveAttributeFilter(filter);
        const inType = isPositiveFilter ? "in" : "notIn";
        const filterItems = isPositiveFilter
            ? filter.positiveAttributeFilter[inType]
            : filter.negativeAttributeFilter[inType];

        if (!filterItems.length) {
            if (isPositiveFilter) {
                this.setState({
                    error: "The filter must have at least one item selected",
                });
            } else {
                this.setState({ filters: [], error: null });
            }
        } else {
            this.setState({ filters: [filter], error: null });
        }
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }

    render() {
        const { filters, error } = this.state;
        return (
            <div className="s-attribute-filter">
                <AttributeFilter
                    projectId={projectId}
                    //filter={Model.negativeAttributeFilter(locationResortIdentifier, [])}
                    // filter={{
                    //     positiveAttributeFilter: {
                    //         displayForm: {
                    //             uri: "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2207"
                    //         },
                    //         in: ['Aventura'],
                    //         textFilter: true
                    //     }
                    // }}
                    // filter={{
                    //     negativeAttributeFilter: {
                    //         displayForm: {
                    //             identifier: locationResortIdentifier
                    //         },
                    //         notIn: ['Dallass'],
                    //         textFilter: true
                    //     }
                    // }}
                    filter={{
                        positiveAttributeFilter: {
                            displayForm: {
                                identifier: locationResortIdentifier,
                            },
                            in: ["Dallass"],
                            textFilter: true,
                        },
                    }}
                    // filter={{
                    //     positiveAttributeFilter: {
                    //         displayForm: {
                    //             uri: "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2207"
                    //         },
                    //         in: ['/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2206/elements?id=63401140', '/gdc/md/mbuumy476p78ybcceiru61hcyr8i8lo8/obj/2206/elements?id=6340130'],
                    //         textFilter: fasle
                    //     }
                    // }}
                    onApply={this.onApply}
                />
                <div style={{ height: 300 }} className="s-line-chart">
                    {error ? (
                        <ErrorComponent message={error} />
                    ) : (
                        <BarChart
                            projectId={projectId}
                            measures={[totalSales]}
                            viewBy={locationResort}
                            stackBy={locationResort}
                            filters={filters}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                            locale="fr-FR"
                        />
                        // <BubbleChart
                        //     projectId={projectId}
                        //     xAxisMeasure={xMeasure}
                        //     yAxisMeasure={yMeasure}
                        //     //size={totalSales}
                        //     viewBy={locationResort}
                        //     filters={filters}
                        //     onLoadingChanged={this.onLoadingChanged}
                        //     onError={this.onError}
                        //     locale="fr-FR"
                        // />
                    )}
                </div>
            </div>
        );
    }
}

export default AttributeFilterExample;
