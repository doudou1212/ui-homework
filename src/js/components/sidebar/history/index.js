import History from './view';
import convertStringToNode from '../../../util/converStringToNode';
import style from './style.scss';

export default () => {
    const html = convertStringToNode(History());
    return html;
};