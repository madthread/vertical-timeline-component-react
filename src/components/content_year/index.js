import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YearComponent = styled.div`
  color: #002a3a;
  font-size: 1em;
  font-weight: 400;
  padding-right: 15px;
  position: relative;
  width: 40px;

  &::after {
    background: #BDBDBD;
    border-radius: 50%;
    content: '';
    position: absolute;
    right: 5px;
    top: 6px;
    height: 6px;
    width: 6px;
  }
`;

const ContentYear = (props) => {
  const {
    children,
    value, status
  } = props;

  return (
    <YearComponent className={`year-component${(value <= status?" active": "")}`}>
    { value === status && children }
    </YearComponent>
  );
};

ContentYear.propTypes = {
  year: PropTypes.string.isRequired,
};

export default ContentYear;
