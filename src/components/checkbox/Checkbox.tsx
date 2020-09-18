import React, {FunctionComponent} from 'react';
import './checkbox.css';
import {Label} from "../label/Label";

export const Checkbox: FunctionComponent<{isChecked: boolean, label: string}> = ({isChecked = false, label}) => {
      return (
          <div className="checkbox">
              <input type="checkbox" checked={isChecked}/>
              <Label label={label}/>
          </div>
      )
};