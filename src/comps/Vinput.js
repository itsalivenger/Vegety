import './style/VInput.scss';

function VInput({type, placeholder, icon}) {

    return (
        <div className="VInputContainer">
          {icon}
          <input type={type} placeholder={placeholder}  />
        </div>
)   
}

export default VInput