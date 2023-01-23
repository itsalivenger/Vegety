import './footer.scss';
import logo from '../comps/logoComponent';
import LogoImage from '../comps/image';

export default function Footer() {
  return (
    <footer className="footerTag text-center text-lg-start text-white">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3 footerContentContainer">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 logoInFooter">
            <LogoImage src={logo} classname={""} alt={'logo in fooer'} />
            <p>
            Bienvenue chez Vegety, votre destination unique pour tous vos
            besoins en matière de courses.
            </p>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Disponibilitée</h6>
            <p>Lundi-Samedi &nbrs; 8AM-8PM</p>
            <p>Les commandes proches en nuit sont acceptés</p>
            <p>Fermé en week-end</p>
            
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Liens</h6>
            <p>
              <a href="#!" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Se Connecter
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Services
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                A Propos
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fa fa-home me-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fa fa-phone me-3"></i> + 01 234 567 88
            </p>
            <span className='socialFooterContainer'>
              {/* <i className="fa fa-facebook me-3"></i>
              <i className="fa fa-instagram me-3"></i>
              <i className="fa fa-google me-3"></i>               */}
            </span>
          </div>
        </div>
      </div>
      <div
        className="text-center p-4 CopyrightContent"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://CremDev.com/">
          CremDev.com
        </a>
      </div>
    </footer>
  );
}
