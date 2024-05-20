import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent, entity) => {
  return function WithLikeCounter(props) {
    const [counter, setCounter] = useState(0);

    const handleCount = () => {
      setCounter(counter + 1);
    };

    return <WrappedComponent counter={counter} handleCount={handleCount} entity={entity} {...props} />;
  };
};

export default withLikeCounter;
