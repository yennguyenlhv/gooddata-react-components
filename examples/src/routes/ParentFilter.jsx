// (C) 2007-2019 GoodData Corporation
import React from "react";

import ExampleWithSource from "../components/utils/ExampleWithSource";

import ParentFilterExample from "../components/ParentFilterExample";
import ExecuteVisualizationParentFilterExample from "../components/ExecuteVisualizationParentFilterExample";
import ParentFilterExampleSRC from "!raw-loader!../components/ParentFilterExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import ExecuteVisualizationParentFilterExampleSRC from "!raw-loader!../components/ExecuteVisualizationParentFilterExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const ParentFilter = () => (
    <div>
        <h1>Parent Filter Example</h1>

        <p>
            This example shows how to join two filters as parent-child filter so that values in the child
            filter are restricted by values of the parent filter.
        </p>

        <hr className="separator" />

        <ExampleWithSource for={ParentFilterExample} source={ParentFilterExampleSRC} />

        <hr className="separator" />

        <ExampleWithSource
            for={ExecuteVisualizationParentFilterExample}
            source={ExecuteVisualizationParentFilterExampleSRC}
        />
    </div>
);

export default ParentFilter;
