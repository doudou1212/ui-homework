export default (innerContent) => {
    let container = document.createElement('div');
    container.innerHTML=innerContent;
    return container.children[0];
}