// (C) 2007-2019 GoodData Corporation
import React from "react";
import ExampleWithSource from "../components/utils/ExampleWithSource";

import DatePickerExample from "../components/DatePickerExample";
import MonthPickerExample from "../components/MonthPickerExample";
import ExecuteVisualizationDatePickerExample from "../components/ExecuteVisualizationDatePickerExample";

import DatePickerExampleSRC from "!raw-loader!../components/DatePickerExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import MonthPickerExampleSRC from "!raw-loader!../components/MonthPickerExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import ExecuteVisualizationDatePickerExampleSRC from "!raw-loader!../components/ExecuteVisualizationDatePickerExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const DatePicker = () => (
    <div>
        <h1>Date Picker</h1>

        <p>
            This is an example of two custom date picker components filtering a visualization by absolute
            date.
        </p>

        <ExampleWithSource for={DatePickerExample} source={DatePickerExampleSRC} />

        <h1>Month Picker</h1>

        <p>
            This is an example of two custom month picker components filtering a visualization by relative
            date.
        </p>

        <ExampleWithSource for={MonthPickerExample} source={MonthPickerExampleSRC} />

        <h1>Execute visualization with Date Picker</h1>

        <p>This is an example check Execute visualization after reseclect date on Date Picker</p>

        <ExampleWithSource
            for={ExecuteVisualizationDatePickerExample}
            source={ExecuteVisualizationDatePickerExampleSRC}
        />
    </div>
);

export default DatePicker;
