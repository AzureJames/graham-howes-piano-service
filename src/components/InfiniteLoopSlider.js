import React from 'react';
import '../scss/components/_infiniteLoopSlider.scss'
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♬', '♪', '♩', '♭', '♮', '♩', '♬', '♪', '♭', '♮', '♩', '♬', '♪'];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 29;

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

export const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

export const Tag = ({ text }) => (
  <div className='tag'>{text}</div>
);


