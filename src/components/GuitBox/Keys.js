import React from 'react';
import styled from 'styled-components';
import { buttonStyles } from '../../styles/_mixins';
import { breakpoints } from '../../styles/_breakpoints';

const KeyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;

const Key = styled.div`
		align-items: center;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 200px;
    transition: all 0.07s ease;
    width: 100%;

    @media (max-width: ${breakpoints.small}) {
			width: 100px;
			height:100px;
    }

    kbd {
      ${buttonStyles}
      align-items: center;
      display: flex;
      font-size: 0.8em;
      font-family: inherit;
      text-transform: uppercase;
      justify-content: center;
      padding: 0.25rem;
      width: 6rem;
      height: 6rem;
      @media (max-width: ${breakpoints.small}) {
        width: 100%;
      }
    }

    // &.playing {
    //   border-color: $wesbos;
    //   border-radius: 4px;
    //   box-shadow: 0 0 1rem $wesbos;
    //   transform: translate(4px, 4px);
    //   img {
    //     opacity: 1;
    //   }
    // }
  }
`;

export default function Keys({ playSound }) {
  return (
    <KeyGrid>
      <Key
        data-key="81"
        onMouseDown={() => playSound({ keyCode: 81 })}
        onTouchStart={() => playSound({ keyCode: 81 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>Q</kbd>
      </Key>
      <Key
        data-key="87"
        onMouseDown={() => playSound({ keyCode: 87 })}
        onTouchStart={() => playSound({ keyCode: 87 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>W</kbd>
      </Key>
      <Key
        data-key="69"
        onMouseDown={() => playSound({ keyCode: 69 })}
        onTouchStart={() => playSound({ keyCode: 69 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>E</kbd>
      </Key>
      <Key
        data-key="82"
        onMouseDown={() => playSound({ keyCode: 82 })}
        onTouchStart={() => playSound({ keyCode: 82 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>R</kbd>
      </Key>
      <Key
        data-key="84"
        onMouseDown={() => playSound({ keyCode: 84 })}
        onTouchStart={() => playSound({ keyCode: 84 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>T</kbd>
      </Key>
      <Key
        data-key="89"
        onMouseDown={() => playSound({ keyCode: 89 })}
        onTouchStart={() => playSound({ keyCode: 89 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>Y</kbd>
      </Key>
      <Key
        data-key="85"
        onMouseDown={() => playSound({ keyCode: 85 })}
        onTouchStart={() => playSound({ keyCode: 85 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>U</kbd>
      </Key>
      <Key
        data-key="73"
        onMouseDown={() => playSound({ keyCode: 73 })}
        onTouchStart={() => playSound({ keyCode: 73 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>I</kbd>
      </Key>
      <Key
        data-key="79"
        onMouseDown={() => playSound({ keyCode: 79 })}
        onTouchStart={() => playSound({ keyCode: 79 })}
        onTouchEnd={(e) => e.preventDefault()}
      >
        <kbd>O</kbd>
      </Key>
    </KeyGrid>
  );
}
