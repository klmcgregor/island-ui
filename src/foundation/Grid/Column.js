import React from 'react';
import Box from './Box';

const Column = (props) => (
  <Box
    px={['columnGap.0', 'columnGap.1']}
    flex='0 0 auto'
    {...props}
  />
);

export default Column;