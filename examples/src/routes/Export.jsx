// (C) 2007-2019 GoodData Corporation
import React from "react";

import ExampleWithSource from "../components/utils/ExampleWithSource";
import BarChartExportExample from "../components/BarChartExportExample";
import TableExportExample from "../components/TableExportExample";
import PivotTableExportExample from "../components/PivotTableExportExample";
import AreaChartExportExample from "../components/AreaChartExportExample";
import BubbleChartExportExample from "../components/BubbleChartExportExample";
import VisualizationStackAreaExportExample from "../components/VisualizationStackAreaExportExample";
import VisualizationColumnChartExportExample from "../components/VisualizationColumnChartExportExample";
import VisualizationBubbleExportExample from "../components/VisualizationBubbleExportExample";
import HeadlineExportExample from "../components/HeadlineExportExample";

import BarChartExportExampleSRC from "!raw-loader!../components/BarChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import TableExportExampleSRC from "!raw-loader!../components/TableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PivotTableExportExampleSRC from "!raw-loader!../components/PivotTableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import AreaChartExportExampleSRC from "!raw-loader!../components/AreaChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import BubbleChartExportExampleSRC from "!raw-loader!../components/BubbleChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationStackAreaExportExampleSRC from "!raw-loader!../components/VisualizationStackAreaExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationColumnChartExportExampleSRC from "!raw-loader!../components/VisualizationColumnChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationBubbleExportExampleSRC from "!raw-loader!../components/VisualizationColumnChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import HeadlineExportExampleSRC from "!raw-loader!../components/HeadlineExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const Export = () => (
    <div>
        <h1>Export</h1>
        <p>
            These examples show how to export data for components like
            <code>ColumnChart, Table/Pivot Table or Visualization</code>.
        </p>

        <hr className="separator" />

        <h2>Export Chart Data</h2>
        <ExampleWithSource for={BarChartExportExample} source={BarChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Table Data</h2>
        <ExampleWithSource for={TableExportExample} source={TableExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Pivot Table Data</h2>
        <ExampleWithSource for={PivotTableExportExample} source={PivotTableExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Visualization Data</h2>
        <ExampleWithSource
            for={VisualizationColumnChartExportExample}
            source={VisualizationColumnChartExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Bubble Visualization </h2>
        <ExampleWithSource
            for={VisualizationBubbleExportExample}
            source={VisualizationBubbleExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Area Chart</h2>
        <ExampleWithSource for={AreaChartExportExample} source={AreaChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Bubble Chart</h2>
        <ExampleWithSource for={BubbleChartExportExample} source={BubbleChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Headline Data</h2>
        <ExampleWithSource for={HeadlineExportExample} source={HeadlineExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Area Visualization</h2>
        <ExampleWithSource
            for={VisualizationStackAreaExportExample}
            source={VisualizationStackAreaExportExampleSRC}
        />
    </div>
);

export default Export;
