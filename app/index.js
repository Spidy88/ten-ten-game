import React from 'react'
import { render } from 'react-dom';
import AppView from './app-view';

import Game from './game';
import { SmallBox, MediumLine, SmallCorner } from './pieces';

render(<AppView />, document.querySelector('#app'));