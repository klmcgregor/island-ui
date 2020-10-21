import React from 'react';
import Box from './Box';

const Row = (props) => (
  <Box
    maxWidth='100%'
    display='flex'
    flexWrap='wrap'
    alignContent='flex-start'
    {...props}
  />
);

export default Row;