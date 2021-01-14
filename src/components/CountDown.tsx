import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
`;

const CountDown: React.FC<{ updateWeather: () => void }> = ({
  updateWeather,
}) => {
  const [remainingSec, setremainingSec] = useState(10);

  const tickTimer = async () => {
    await setTimeout(() => {
      console.log(
        `the bool remaining sec ${remainingSec} being less that 0 is `,
        remainingSec < 1,
        typeof remainingSec
      );
      if (remainingSec < 1) {
        console.log("we're done");
        updateWeather();
        setremainingSec(10);
      } else {
        setremainingSec((remainingSec) => remainingSec - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    tickTimer();
  }, [remainingSec]);

  return (
    <StyledDiv>
      <h3>Refreshing In:</h3>
      <p>{remainingSec} seconds</p>
    </StyledDiv>
  );
};
export default CountDown;
