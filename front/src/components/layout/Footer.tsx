import logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">

                {/* Marca */}
                <div className="footer__brand">
                    <img
                        src={logo}
                        alt="Excelsum Sport Group"
                        className="footer__logo"
                    />

                    <p>
                        Arquitectura estratégica para el alto rendimiento deportivo.
                    </p>
                </div>

                {/* Columnas */}
                <div className="footer__columns">

                    <div>
                        <h5>SERVICIOS</h5>
                        <ul>
                            <li>Legal Advocacy</li>
                            <li>Sports Psychology</li>
                            <li>Wealth Management</li>
                        </ul>
                    </div>

                    <div>
                        <h5>COMPAÑÍA</h5>
                        <ul>
                            <li>Sobre Nosotros</li>
                            <li>Política de Privacidad</li>
                            <li>Términos</li>
                        </ul>
                    </div>

                    <div>
                        <h5>CONTACTO</h5>
                        <p>hq@excelsum-sport.com</p>
                    </div>

                </div>
            </div>

            <div className="footer__bottom">
                © 2026 Excelsum Sport Group — Elite Performance Architecture
            </div>
        </footer>
    );
}

export default Footer;