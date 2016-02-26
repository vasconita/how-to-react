import React from 'react';
import ReactDOM from 'react-dom';

import UserCard from './components/UserCard'

ReactDOM.render(<UserCard avatar="assets/avatar1.png" name="Jose Cortes" telephone={636528963} age={29} githubUser="vasconita"/>,
    document.getElementById('app')
);