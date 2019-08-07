// (C) 2007-2019 GoodData Corporation
import React from "react";

import ExampleWithSource from "../components/utils/ExampleWithSource";
import BarChartExportExample from "../components/BarChartExportExample";
import TableExportExample from "../components/TableExportExample";
import PivotTableExportExample from "../components/PivotTableExportExample";
import LineChartExportExample from "../components/LineChartExportExample";
import AreaChartExportExample from "../components/AreaChartExportExample";
import BubbleChartExportExample from "../components/BubbleChartExportExample";
import ScatterChartExportExample from "../components/ScatterChartExportExample";
import ComboChartExportExample from "../components/ComboChartExportExample";
import PieChartExportExample from "../components/PieChartExportExample";
import DonutChartExportExample from "../components/DonutChartExportExample";
import HeadlineExportExample from "../components/HeadlineExportExample";
import TreeMapExportExample from "../components/TreeMapChartExportExample";
import HeatMapExportExample from "../components/HeatmapChartExportExample";
import VisualizationStackAreaExportExample from "../components/VisualizationStackAreaExportExample";
import VisualizationColumnChartExportExample from "../components/VisualizationColumnChartExportExample";
import VisualizationBubbleExportExample from "../components/VisualizationBubbleExportExample";
import VisualizationScatterChartExportExample from "../components/VisualizationScatterExportExample";
import VisualizationLineExportExample from "../components/VisualizationLineExportExample";
import VisualizationPieChartExportExample from "../components/VisualizationPieExportExample";
import VisualizationDonutChartExportExample from "../components/VisualizationDonutExportExample";
import VisualizationTreeMapChartExportExample from "../components/VisualizationTreeMapExportExample";
import VisualizationHeatMapChartExportExample from "../components/VisualizationHeatMapExportExample";

import BarChartExportExampleSRC from "!raw-loader!../components/BarChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import TableExportExampleSRC from "!raw-loader!../components/TableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PivotTableExportExampleSRC from "!raw-loader!../components/PivotTableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import LineChartExportExampleSRC from "!raw-loader!../components/LineChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import AreaChartExportExampleSRC from "!raw-loader!../components/AreaChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import BubbleChartExportExampleSRC from "!raw-loader!../components/BubbleChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import ComboChartExportExampleSRC from "!raw-loader!../components/ComboChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import ScatterChartExportExampleSRC from "!raw-loader!../components/ScatterChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PieChartExportExampleSRC from "!raw-loader!../components/PieChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DonutChartExportExampleSRC from "!raw-loader!../components/DonutChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import HeadlineExportExampleSRC from "!raw-loader!../components/HeadlineExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import TreeMapExportExampleSRC from "!raw-loader!../components/TreeMapChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import HeatMapExportExampleSRC from "!raw-loader!../components/HeatmapChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationStackAreaExportExampleSRC from "!raw-loader!../components/VisualizationStackAreaExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationColumnChartExportExampleSRC from "!raw-loader!../components/VisualizationColumnChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationBubbleExportExampleSRC from "!raw-loader!../components/VisualizationBubbleExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationScatterChartExportExampleSRC from "!raw-loader!../components/VisualizationScatterExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationLineExportExampleSRC from "!raw-loader!../components/VisualizationLineExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationPieChartExportExampleSRC from "!raw-loader!../components/VisualizationPieExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationDonutChartExportExampleSRC from "!raw-loader!../components/VisualizationDonutExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationTreeMapChartExportExampleSRC from "!raw-loader!../components/VisualizationTreeMapExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationHeatMapChartExportExampleSRC from "!raw-loader!../components/VisualizationHeatMapExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

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

        <h2>Export Line Data</h2>
        <ExampleWithSource for={LineChartExportExample} source={LineChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Area Data</h2>
        <ExampleWithSource for={AreaChartExportExample} source={AreaChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Bubble Data</h2>
        <ExampleWithSource for={BubbleChartExportExample} source={BubbleChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Scatter Data</h2>
        <ExampleWithSource for={ScatterChartExportExample} source={ScatterChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Headline Data</h2>
        <ExampleWithSource for={HeadlineExportExample} source={HeadlineExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Combo Data</h2>
        <ExampleWithSource for={ComboChartExportExample} source={ComboChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Pie Chart Data</h2>
        <ExampleWithSource for={PieChartExportExample} source={PieChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Donut Chart Data</h2>
        <ExampleWithSource for={DonutChartExportExample} source={DonutChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Tree Map Chart Data</h2>
        <ExampleWithSource for={TreeMapExportExample} source={TreeMapExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Heat Map Chart Data</h2>
        <ExampleWithSource for={HeatMapExportExample} source={HeatMapExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Column Visualization Data</h2>
        <ExampleWithSource
            for={VisualizationColumnChartExportExample}
            source={VisualizationColumnChartExportExampleSRC}
        />

        <h2>Export Line Visualization Data</h2>
        <ExampleWithSource for={VisualizationLineExportExample} source={VisualizationLineExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Area Visualization Data</h2>
        <ExampleWithSource
            for={VisualizationStackAreaExportExample}
            source={VisualizationStackAreaExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Bubble Visualization Data</h2>
        <ExampleWithSource
            for={VisualizationBubbleExportExample}
            source={VisualizationBubbleExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Visualization Scatter Data</h2>
        <ExampleWithSource
            for={VisualizationScatterChartExportExample}
            source={VisualizationScatterChartExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Visualization Scatter Data</h2>
        <ExampleWithSource
            for={VisualizationScatterChartExportExample}
            source={VisualizationScatterChartExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Visualization Pie Data</h2>
        <ExampleWithSource
            for={VisualizationPieChartExportExample}
            source={VisualizationPieChartExportExampleSRC}
        />

        <hr className="separator" />
        <h2>Export Visualization Donut Data</h2>
        <ExampleWithSource
            for={VisualizationDonutChartExportExample}
            source={VisualizationDonutChartExportExampleSRC}
        />

        <hr className="separator" />
        <h2>Export Visualization Tree Map Data</h2>
        <ExampleWithSource
            for={VisualizationTreeMapChartExportExample}
            source={VisualizationTreeMapChartExportExampleSRC}
        />

        <hr className="separator" />
        <h2>Export Visualization Heat Map Data</h2>
        <ExampleWithSource
            for={VisualizationHeatMapChartExportExample}
            source={VisualizationHeatMapChartExportExampleSRC}
        />
    </div>
);

export default Export;
