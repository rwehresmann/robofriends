import React from 'react';

interface IProps {
  children?: JSX.Element
}

const Scroll = (props: IProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;