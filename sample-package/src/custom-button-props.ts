import { MouseEvent, KeyboardEvent, CSSProperties } from 'react';

/**
 * This interface provides a number of properties which can be set when creating a
 * standard custom styled button.
 *
 * @export
 * @interface CustomButtonProps
 */
export interface CustomButtonProps {
    /**
     * The text to be displayed on the button.
     *
     * @type {string}
     * @memberof CustomButtonProps
     */
    text: string;
    /**
     * The action to take when the button is clicked.
     *
     * @memberof CustomButtonProps
     */
    onClick: (event: MouseEvent | KeyboardEvent) => void;
    /**
     * Any css properties need to add a custom style to the button.
     *
     * @type {CSSProperties}
     * @memberof CustomButtonProps
     */
    style?: CSSProperties;
}

export default CustomButtonProps;
