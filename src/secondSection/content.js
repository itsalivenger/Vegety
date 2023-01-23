import images from './images';

let content = [
    {
        title: 'Fruits',
        src: '',
        alt: '',
        desc: 'Nous avons des fruits pour tous les goûts, des pommes croquantes aux fraises juteuses en passant par les agrumes acidulés.'
    },{
        title: 'Légumes',
        src: '',
        alt: '',
        desc: ' Nous avons des légumes pour tous les goûts, des légumes verts croquants aux légumes racines tendres en passant par les légumes exotiques'
    },{
        title: 'Herbes',
        src: '',
        alt: '',
        desc: 'Nous avons des herbes pour tous les goûts, des herbes aromatiques à feuilles vertes aux herbes racines en passant par les herbes exotiques.'
    },
]
content.forEach((e, i)=>{
    return e.src = images[i];
})

export default content;