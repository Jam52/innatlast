import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DefaultDropdown } from './nav/MenuElements';

const Dropdown = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [content, setContent] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    getHeight();
  }, []);

  const getHeight = () => {
    setHeight(ref.current.clientHeight);
  };

  const handelToggleOpen = () => {
    if (!isOpen) {
      setContent(<div className="content">{props.children}</div>);
      setTimeout(() => {
        getHeight();
      }, 0);
    } else {
      setTimeout(() => {
        setContent(null);
      }, 500);
    }
    toggleOpen(!isOpen);
  };

  return (
    <Wrapper onClick={handelToggleOpen}>
      <div className="dropdown">
        <h3>{props.header}</h3>
        <DefaultDropdown
          isOpen={isOpen}
          onClick={handelToggleOpen}
          color="accent"
        >
          <div />
          <div />
        </DefaultDropdown>
      </div>
      <div
        className="content_container"
        style={isOpen ? { maxHeight: height + 50 + 'px' } : null}
      >
        <div ref={ref}>{content}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: var(--gradient-light);
  padding 1rem 1rem 2rem 1rem;
  .dropdown {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .content_container {
    transition: max-height 0.4s ease-out;
    height: auto;
    max-height: 1px;
    overflow-y: hidden;
    margin: 0;
  }

  .content {
    padding-top: 1rem;
  }
`;

export default Dropdown;
