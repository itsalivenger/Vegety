import './style/image.scss';
import { Suspense } from 'react';
import Loading from './loading';

function LogoImage({src, alt, classname}) {
    return ( 
        <div className="logoContainerInNav">
        <Suspense fallback={<Loading />}>
          <a href='./home.html'>
            <img src={src} alt={alt} className={"img rspImage " + classname} />
          </a>
        </Suspense>
      </div>
    );
}

export default LogoImage;