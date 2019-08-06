// (C) 2019 GoodData Corporation
export type AxisType = "xaxis" | "yaxis" | "secondary_xaxis" | "secondary_yaxis";

export interface IAxisProperties {
    name: AxisType;
    title: string;
    subtitle?: string;
    primary: boolean;
    visible: boolean;
}
