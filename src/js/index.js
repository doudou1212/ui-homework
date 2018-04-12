import * as A from '../styles/main.scss'
import * as B from '../../resource/font-icons/style.css'

import Sidebar from './components/sidebar';

window.onload = function () {
    const parent = document.getElementsByClassName('crulse-body')[0];
    parent.appendChild(Sidebar());

}
