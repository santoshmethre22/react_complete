
function coustemRender(reactElement,container){

 /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)

}


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const reactElement={

    type:'a',
    props:{
        href:'https://github.com/santoshmethre22',
        target:'_blank'
    },
    children:'click me to visit gitghub'

}


const maincontainer=document.querySelector('#root');
coustemRender(reactElement,maincontainer)