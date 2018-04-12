import Dashboard from './dashboard';
import History from './history';
import Sidebar from './view';
import convertStringToNode from '../../util/converStringToNode';
import style from './style.scss';

export default () => {
    const sidebar = convertStringToNode(Sidebar());
    sidebar.appendChild(Dashboard());
    sidebar.appendChild(History());

    return sidebar;
}