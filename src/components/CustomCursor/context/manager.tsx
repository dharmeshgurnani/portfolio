import React, { useState, FC } from 'react';
import CustomCursorContext, { CursorLookType } from './CustomCursorContext';

interface Props {
  // any props that come into the component
}

const CustomCursorManager: FC<Props> = ({ children }) => {
  const [type, setType] = useState<CursorLookType>('default');

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
