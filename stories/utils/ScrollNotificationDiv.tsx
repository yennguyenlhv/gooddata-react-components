// (C) 2007-2019 GoodData Corporation
import * as React from "react";

interface IScrollNotificationDiv {
    style?: React.CSSProperties;
}

export class ScrollNotificationDiv extends React.PureComponent<IScrollNotificationDiv> {
    private divRef: any;

    constructor(props: IScrollNotificationDiv) {
        super(props);
        this.divRef = (React as any).createRef();
    }

    public render() {
        return (
            <div ref={this.divRef} onScroll={this.onScroll} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    private onScroll = () => {
        if (this.divRef) {
            const node = this.divRef.current;
            node.dispatchEvent(new CustomEvent("goodstrap.scrolled", { bubbles: true }));
        }
    };
}
