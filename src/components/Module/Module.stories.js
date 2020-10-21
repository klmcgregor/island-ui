import React from 'react';
import {
  Wrapper,
  Row,
  Column,
} from '../../foundation';
import Module from './Module';

export default {
  title: 'Components/Module',
};

export const Default = () =>
  <Module bg='red'>
    <Wrapper>
      <Row bg='green'>
        <Column bg='purple'>
          Default Column Test
        </Column>
        <Column bg='purple'>
          Default Column Test
        </Column>
        <Column bg='purple'>
          Default Column Test
        </Column>
      </Row>
    </Wrapper>
  </Module>
