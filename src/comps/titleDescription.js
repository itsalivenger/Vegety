import './style/titleDescription.scss';


export default function TitleDescription({ title, description}) {
  return (
    <div className='titleAndDescription'>
        <h2 className='title'>{title}</h2>
        <p className='descriptionText'>{description}</p>
    </div>
  )
}
