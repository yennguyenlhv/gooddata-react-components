// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { AttributeFilter } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import { employeeNameIdentifier, projectId } from "../utils/fixtures";

export class AttributeFilterOld extends Component {
    onApply(params) {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterExample onApply", ...params);
    }

    render() {
        return (
            <div>
                <AttributeFilter
                    identifier={employeeNameIdentifier}
                    projectId={projectId}
                    fullscreenOnMobile={false}
                    onApply={this.onApply}
                />
            </div>
        );
    }
}

export default AttributeFilterOld;
