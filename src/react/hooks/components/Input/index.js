import React from 'react';
import {string, func} from 'prop-types';

const InputText = ({label, ...props}) => {
  return (
    <label>
      <input type="text" {...props} />
      {label}
    </label>
  );
};

InputText.displayName = 'InputText';

InputText.propTypes = {
  name: string,
  onChange: func,
  label: string,
};

export default InputText;
