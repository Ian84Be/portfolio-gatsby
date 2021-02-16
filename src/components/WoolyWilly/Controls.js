import React from 'react';
import styled from 'styled-components';
import { noSelect } from '../../styles/_mixins';

const Container = styled.div`
  ${noSelect}
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  width: 100%;
`;

const Brushes = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 300px) {
    flex-wrap: wrap;
  }
`;

const BrushEmoji = styled.span`
  border-radius: 50%;
  cursor: pointer;
  font-size: 3rem;
  margin: 1rem;
  &:hover {
    background: var(--alert-green);
  }
`;

const ColorPicker = styled.section`
  text-align: center;
`;

const ColorPickerInput = styled.input`
  background-color: black;
  border-radius: 5rem;
  cursor: pointer;
  margin: 1rem;
  margin-bottom: 0;
  width: 4rem;
  height: 4rem;
  &:hover {
    background: var(--alert-green);
  }
`;

export default function Controls({ brush, changeBrush, colorPicker, hue }) {
  return (
    <Container>
      <Brushes>
        <BrushEmoji
          aria-label="pen"
          style={brush === 'pen' ? { background: hue } : null}
          role="button"
          onClick={() => changeBrush('pen')}
        >
          🖊
        </BrushEmoji>
        <BrushEmoji
          aria-label="crayon"
          style={brush === 'crayon' ? { background: hue } : null}
          role="button"
          onClick={() => changeBrush('crayon')}
        >
          🖍
        </BrushEmoji>
        <BrushEmoji
          aria-label="fire extinguisher"
          style={brush === 'fire extinguisher' ? { background: hue } : null}
          role="button"
          onClick={() => changeBrush('fire extinguisher')}
        >
          🧯
        </BrushEmoji>
        <BrushEmoji
          aria-label="erase"
          style={brush === 'erase' ? { background: hue } : null}
          role="button"
          onClick={() => changeBrush('erase')}
        >
          🧽
        </BrushEmoji>
      </Brushes>

      <ColorPicker>
        <ColorPickerInput type="color" value={hue} onChange={colorPicker} />
      </ColorPicker>
    </Container>
  );
}
