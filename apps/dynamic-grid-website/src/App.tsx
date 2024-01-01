import { useState } from 'react';
import styled from '@emotion/styled';

import { Button } from './components/button';

import './styles.scss';

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <ButtonContainer>
      <Button
        disabled={isDisabled}
        onClick={() => setIsDisabled(!isDisabled)}
        radius="round"
        variant="tonal"
        color="primary"
        size="compact"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z" />
        </svg>
      </Button>
      <Button
        onClick={() => setIsDisabled(!isDisabled)}
        radius="round"
        variant="tonal"
        color="primary"
        size="compact"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z" />
        </svg>
      </Button>
    </ButtonContainer>
  );
}

export default App;
