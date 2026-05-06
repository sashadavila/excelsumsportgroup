import Button from "../components/ui/Button";

function CTA() {
    return (
        <section className="cta">
            <div className="container cta__container">
                <span className="cta__tag">STRATEGIC CONSULTING</span>

                <h2>¿Estás listo para elevar tu legado al siguiente nivel?</h2>

                <p>
                    No dejes tu futuro al azar. Construyamos la estructura legal, mental
                    y estratégica que tu talento merece.
                </p>

                <div className="cta__buttons">
                    <Button text="AGENDAR CONSULTORÍA" />
                    <Button text="CONOCER EL EQUIPO →" variant="secondary" />
                </div>
            </div>
        </section>
    );
}

export default CTA;