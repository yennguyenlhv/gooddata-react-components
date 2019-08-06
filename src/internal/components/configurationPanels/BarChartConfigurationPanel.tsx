// (C) 2019 GoodData Corporation
import BaseChartConfigurationPanel from "./BaseChartConfigurationPanel";
import { BAR_CHART_AXIS_CONFIG } from "../../constants/axis";

export default class BarChartConfigurationPanel extends BaseChartConfigurationPanel {
    protected getAxesConfiguration(type: string): any[] {
        return BAR_CHART_AXIS_CONFIG[type];
    }
}
