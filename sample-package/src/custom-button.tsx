import React from 'react';
import CustomButtonProps from './custom-button-props';
import styled, { StyledComponent } from '@emotion/styled';
import { StyleConstants } from '@sample-api/constants';

/**
 * Represents a standard Custom button with a default style.
 *
 * @export
 * @class CustomButton
 * @public
 * @extends {React.PureComponent<CustomButtonProps>}
 */
export class CustomButton extends React.PureComponent<CustomButtonProps> {
    /**
     *Creates an instance of CustomButton.
     * @param {CustomButtonProps} props
     * @memberof CustomButton
     */
    public constructor(props: CustomButtonProps) {
        super(props);
    }

    /**
     * A React button, generated from @emotion/styled, to have a default style applied.
     *
     * @private
     * @type {StyledComponent<any, any, any>}
     * @memberof CustomButton
     */
    // eslint-disable-next-line
    private DefaultButton: StyledComponent<any, any, any> = styled.button`
        height: 2rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        ${StyleConstants.defaultButton}
    `;

    /**
     * Returns a React button, using either the default button style, or a custom style provided
     * by the props.
     *
     * @returns {React.ReactNode}
     * @memberof CustomButton
     */
    public render(): React.ReactNode {
        if (this.props.style) {
            return (
                <button style={this.props.style} onClick={this.props.onClick}>
                    {this.props.text}
                </button>
            );
        }
        return <this.DefaultButton onClick={this.props.onClick}>{this.props.text}</this.DefaultButton>;
    }
}

export default CustomButton;
