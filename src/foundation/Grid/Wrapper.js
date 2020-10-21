import React from 'react';
import Box from './Box';

const Wrapper = (props) => (
  <Box
    maxWidth="maxWidth"
    px={['columnGap.0', 'columnGap.1']}
    m="0 auto"
    {...props}
  />
);

export default Wrapper;