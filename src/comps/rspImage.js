
import { Suspense } from 'react';
import Loading from './loading';
import './style/image.scss'

export default function RspImage({ src, classname = '', alt}) {
  return (
    <Suspense fallback={<Loading />}>
        <img src={src} alt={alt} className={"img rspImage " + classname} />
    </Suspense>
  )
}
