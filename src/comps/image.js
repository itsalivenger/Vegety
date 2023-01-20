import './image.scss';

function LogoImage({src, alt, classname}) {
    return ( 
        <img src={src} alt={alt} className={"img rspImage " + classname} />
    );
}

export default LogoImage;