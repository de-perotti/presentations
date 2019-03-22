import React from 'react';

export class Button extends React.Component<{ style?: any }> {
public render() {
    return (
      <button {...this.props}>
        {this.props.children || 'A button'}
      </button>
    );
  }
}
