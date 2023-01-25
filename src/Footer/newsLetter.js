import VButton from "../comps/Vbutton";
import VInput from "../comps/Vinput";
import "./newsLetter.scss";

export default function NewsLetter() {
  return (
    <div className="newsLetterContainer">
      <span>Abonnez-vous: </span>
      <VInput
        type={"email"}
        placeholder={"Votre Email"}
        icon={<i className="material-symbols-outlined IconInInput">mail</i>}
      />
      <VButton content={"S'inscrire"} color={"secondary"} />
    </div>
  );
}
