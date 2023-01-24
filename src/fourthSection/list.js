import './list.scss';

export default function List({content}) {
  return (
    <div className="list">
        <div className='iconContainer'>
          <i className="material-symbols-outlined">Check</i>
        </div>
        <p>
            {content}
        </p>
    </div>
  )
}
