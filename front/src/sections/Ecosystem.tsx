import basquetImage from "../assets/images/basquet.png";
import brandBlue from "../assets/images/brand-blue.png";

function Ecosystem() {
    return (
        <section className="ecosystem section" id="ecosystem">
            <div className="container ecosystem__container">

                <div className="ecosystem__visual">
                    <img
                        className="ecosystem__image"
                        src={basquetImage}
                        alt="Athlete in motion"
                    />

                    <img
                        className="ecosystem__brand-bg"
                        src={brandBlue}
                        alt="Excelsum brand"
                    />

                    <div className="ecosystem__badge">
                        <span>15+</span>
                        <p>AÑOS DE EXPERIENCIA</p>
                    </div>
                </div>

                <div className="ecosystem__content">
                    <h2>
                        Excelsum Sport Group, ecosistema del alto rendimiento
                    </h2>

                    <p>
                        En el deporte de élite, el margen de error es inexistente. Las demandas actuales exigen una visión 360° que no solo se enfoque en el campo de juego, sino en la solidez de las bases que sostienen al atleta.
                    </p>

                    <p>
                        Nuestro ecosistema nace como respuesta a esta necesidad crítica, integrando áreas fundamentales que históricamente han operado de forma aislada. Construimos la arquitectura necesaria para que el talento solo se preocupe por rendir.
                    </p>

                    <div className="ecosystem__line">
                        <span>THE ELITE STANDARD</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Ecosystem;