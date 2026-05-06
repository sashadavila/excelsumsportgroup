import { Scale, Brain, TrendingUp } from "lucide-react";

function Architecture() {
    return (
        <section className="architecture section" id="services">
            <div className="container">
                <div className="architecture__header">
                    <h2>Arquitectura de Éxito</h2>
                    <p>
                        Nuestros pilares fundamentales están diseñados para blindar y potenciar cada etapa de la carrera profesional.
                    </p>
                </div>

                <div className="architecture__cards">
                    <div className="architecture__card">
                        <div className="architecture__icon">
                            <Scale size={24} />
                        </div>
                        <h3>Sustento Legal</h3>
                        <p>
                            Defensa estratégica, revisión contractual milimétrica y protección jurídica integral para garantizar que tus derechos estén siempre a salvo.
                        </p>
                        <ul>
                            <li>Asesoría en transferencias</li>
                            <li>Propiedad intelectual</li>
                        </ul>
                    </div>

                    <div className="architecture__card architecture__card--featured">
                        <div className="architecture__icon">
                            <Brain size={24} />
                        </div>
                        <h3>Fortaleza Mental</h3>
                        <p>
                            Entrenamiento psicológico avanzado para la gestión de presión, resiliencia ante lesiones y optimización del enfoque competitivo.
                        </p>
                        <ul>
                            <li>Mindfulness competitivo</li>
                            <li>Biofeedback de rendimiento</li>
                        </ul>
                    </div>

                    <div className="architecture__card">
                        <div className="architecture__icon">
                            <TrendingUp size={24} />
                        </div>
                        <h3>Visión de Negocios</h3>
                        <p>
                            Estructuración de patrimonio, gestión de imagen de marca y preparación integral para la transición post-carrera deportiva.
                        </p>
                        <ul>
                            <li>Wealth management</li>
                            <li>Brand architecture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Architecture;