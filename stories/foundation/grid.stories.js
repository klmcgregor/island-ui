import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Wrapper,
  Row,
  Column,
} from '../../src/foundation';

export default {
  title: 'Foundation/Grid System',
};

export const gridStory = () => {
  const Content = (props) => (
    <Box
      width="100%"
      bg="white"
      height="50vh"
      display="flex"
      justifyContent="center"
      {...props}
    />
  );

  const ColText = (props) => (
    <Box
      display="flex"
      alignSelf="center"
      color="black"
      textAlign="center"
      {...props}
    />
  );

  const columnsArray = [];

  for (let i = 0; i < 12; i += 1) {
    let color = 'wisteria';
    if (i % 2 === 0) {
      color = 'belizehole';
    }

    columnsArray.push(
      <Column
        key={i}
        width={1 / 12}
        bg={color}
      >
        <Content>
          <ColText>
            {`Col ${i + 1}`}
          </ColText>
        </Content>
      </Column>,
    );
  }

  return (
    <Wrapper bg="midnightblue">
      <Row>{columnsArray}</Row>
    </Wrapper>
  );
};

gridStory.story = {
  name: 'Grid',
};


export const boxStory = () => (
  <Box
    bg="#nephritis"
    height="25px"
  />
);

boxStory.story = {
  name: 'Box',
};

export const wrapperStory = () => (
  <Wrapper bg="midnightblue">
    <Box height="25px" />
  </Wrapper>
);

wrapperStory.story = {
  name: 'Wrapper',
};

export const rowStory = () => (
  <Wrapper>
    <Row bg="nephritis">
      <Box height="25px" />
    </Row>
  </Wrapper>
);

rowStory.story = {
  name: 'Row',
};

export const columnStory = () => (
  <Wrapper>
    <Row py={['columnGap.0', 'columnGap.1']}>
      <Column width={[1, 1/2]}>
        <Box
          bg="greensea"
          height="25px"
        />
      </Column>
      <Column width={[1, 1/2]}>
        <Box
          bg="greensea"
          height="25px"
        />
      </Column>
    </Row>
  </Wrapper>
);

columnStory.story = {
  name: 'Column',
};

export const columnResponsiveWidthsStory = () => {
  const columnsArray = [];

  for (let i = 0; i < 6; i += 1) {
    columnsArray.push(
      <Column
        key={i}
        width={[1, 1 / 2, 1 / 4, 1 / 6]}
      >
        <Box
          bg="greensea"
          height="25px"
        />
      </Column>,
    );
  }

  return (
    <Wrapper>
      <Row>
        {columnsArray}
      </Row>
    </Wrapper>
  );
};

columnResponsiveWidthsStory.story = {
  name: 'Column with Responsive Widths',
};
