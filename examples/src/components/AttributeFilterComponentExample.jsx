// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { AttributeFilter, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import { employeeNameIdentifier, employeeNameDisplayFormUri, projectId } from "../utils/fixtures";

export class AttributeFilterComponentExample extends Component {
    onApply(...params) {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterComponentExample onApply", ...params);
    }

    render() {
        return (
            <div>
                <div>attribute defined by identifier</div>
                <div className="s-tested-component">
                    <AttributeFilter
                        projectId={projectId}
                        identifier={employeeNameIdentifier}
                        onApply={this.onApply}
                    />
                </div>
                <div>attribute defined by display form uri</div>
                <AttributeFilter
                    projectId={projectId}
                    uri={employeeNameDisplayFormUri}
                    onApply={this.onApply}
                />
                <br />
                <div>attribute defined by filter definition, including selection</div>
                <AttributeFilter
                    projectId={projectId}
                    filter={Model.positiveAttributeFilter(employeeNameIdentifier, ["Abbie Adams"], true)}
                    onApply={this.onApply}
                    locale="fr-FR"
                />
            </div>
        );
    }
}

export default AttributeFilterComponentExample;
