import './style/button.scss';

export default function VButton({ content = 'click Me' , color = '', callback = ()=>{}, classname = '' }) {
  return (
    <span>
        <button onClick={callback} className={`VegetyButton ${color} ${classname}`}>{content}</button>
    </span>
  )
}
