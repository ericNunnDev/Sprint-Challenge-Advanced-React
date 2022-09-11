import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

function ThemeBtn() {
    const [ theme, toggleTheme ] = useDarkMode();
    return (
        <div className='App' style={{background: theme === 'dark' ? '#000' : '#FFF',
        color: theme === 'dark' ? '#FFF' : '#000'}}>
          <button type='button' onClick={toggleTheme}>Switch to Dark Mode</button>
        </div>
    )
}

export default ThemeBtn;