//although this runs fine, but we dont prefer this way because say i have to add 100 attributes the i have to manually add them
function customRender(reactElem,mainContainer)
{
    // const domelem=document.createElement(reactElem.type);
    // domelem.innerHTML=reactElem.children;
    // domelem.setAttribute('href',reactElem.props.href);
    // domelem.setAttribute('target',reactElem.props.target);
    // mainContainer.appendChild(domelem);
    // If reactElem.type is an <h1>, <img>, or <div>, those elements do not have href or target attributes.
    // It requires manual updates for every new attribute

    const domelem=document.createElement(reactElem.type);
    domelem.innerHTML=reactElem.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElem={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'click me to visit Google'

}

const mainContainer=document.querySelector('#root')
customRender(reactElem,mainContainer);