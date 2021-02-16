import React from 'react';

import cg1P from '../../assets/guitar/c-min-penta/cg-1.wav';
import cg2P from '../../assets/guitar/c-min-penta/cg-2.wav';
import cg3P from '../../assets/guitar/c-min-penta/cg-3.wav';
import cg4P from '../../assets/guitar/c-min-penta/cg-4.wav';
import cg5P from '../../assets/guitar/c-min-penta/cg-5.wav';
import cg6P from '../../assets/guitar/c-min-penta/cg-6.wav';
import cg7P from '../../assets/guitar/c-min-penta/cg-7.wav';
import cg8P from '../../assets/guitar/c-min-penta/cg-8.wav';
import cg9P from '../../assets/guitar/c-min-penta/cg-9.wav';

import cg1T from '../../assets/guitar/c-min-triad/cg-1.wav';
import cg2T from '../../assets/guitar/c-min-triad/cg-2.wav';
import cg3T from '../../assets/guitar/c-min-triad/cg-3.wav';
import cg4T from '../../assets/guitar/c-min-triad/cg-4.wav';
import cg5T from '../../assets/guitar/c-min-triad/cg-5.wav';
import cg6T from '../../assets/guitar/c-min-triad/cg-6.wav';
import cg7T from '../../assets/guitar/c-min-triad/cg-7.wav';
import cg8T from '../../assets/guitar/c-min-triad/cg-8.wav';
import cg9T from '../../assets/guitar/c-min-triad/cg-9.wav';

export default function Audio({ mode, refs }) {
  const { qRef, wRef, eRef, rRef, tRef, yRef, uRef, iRef, oRef } = refs;
  return (
    <>
      <audio
        data-mode="c-min-penta"
        data-key="81"
        src={cg1P}
        ref={mode === 0 ? qRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="87"
        src={cg2P}
        ref={mode === 0 ? wRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="69"
        src={cg3P}
        ref={mode === 0 ? eRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="82"
        src={cg4P}
        ref={mode === 0 ? rRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="84"
        src={cg5P}
        ref={mode === 0 ? tRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="89"
        src={cg6P}
        ref={mode === 0 ? yRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="85"
        src={cg7P}
        ref={mode === 0 ? uRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="73"
        src={cg8P}
        ref={mode === 0 ? iRef : null}
      />
      <audio
        data-mode="c-min-penta"
        data-key="79"
        src={cg9P}
        ref={mode === 0 ? oRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="81"
        src={cg1T}
        ref={mode === 1 ? qRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="87"
        src={cg2T}
        ref={mode === 1 ? wRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="69"
        src={cg3T}
        ref={mode === 1 ? eRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="82"
        src={cg4T}
        ref={mode === 1 ? rRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="84"
        src={cg5T}
        ref={mode === 1 ? tRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="89"
        src={cg6T}
        ref={mode === 1 ? yRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="85"
        src={cg7T}
        ref={mode === 1 ? uRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="73"
        src={cg8T}
        ref={mode === 1 ? iRef : null}
      />
      <audio
        data-mode="c-min-triad"
        data-key="79"
        src={cg9T}
        ref={mode === 1 ? oRef : null}
      />
    </>
  );
}
