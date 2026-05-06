import Button from "../components/ui/Button";
import heroImage from "../assets/images/hero.png";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">

                {/* TEXTO */}
                <div className="hero__content">
                    <span className="hero__tag">
                        ELITE PERFORMANCE ARCHITECTURE
                    </span>

                    <h1 className="hero__title">
                        Protegemos tu talento y aseguramos tu futuro
                    </h1>

                    <p className="hero__text">
                        Combinamos asesoría legal estratégica, psicología de alto rendimiento y mentoría en liderazgo para potenciar carreras deportivas y proteger el patrimonio del atleta.
                    </p>

                    <div className="hero__buttons">
                        <Button text="AGENDAR UNA CONSULTORÍA" />
                        <Button text="EXPLORAR ECOSISTEMA" variant="secondary" />
                    </div>
                </div>

                {/* IMAGEN */}
                <div className="hero__visual">
                    <img src={heroImage} alt="athlete" />
                    <div className="hero__overlay" />
                    <div className="hero__glow" />
                </div>

            </div>
        </section>
    );
}

export default Hero;