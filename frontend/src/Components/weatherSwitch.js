import React from 'react';
import classNames from 'classnames';
import {useActions, useAppState} from "../State/overmind";

const CheckedIcon = () => <>C</>;
const UncheckedIcon = () => <>F</>;

const WeatherSwitch = ( props ) => {

    const { disabled, className } = props;
    const {temperatureType} = useAppState()
    const actions = useActions()

    const triggerToggle = () => {
        if ( disabled ) {
            return;
        }

        actions.toggleTemperature();
    }

    const toggle = temperatureType === 'C';

    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled
    }, className);

    return (
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span><CheckedIcon/></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span><UncheckedIcon /></span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input type="checkbox" aria-label="Toggle Button" className="wrg-toggle-input" />
        </div>
    );
}

export default WeatherSwitch;


