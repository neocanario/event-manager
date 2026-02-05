import './LegalPage.css';

export function TermsConditions() {
    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>Términos y Condiciones</h1>
                <p className="last-updated">Última actualización: 5 de febrero de 2026</p>

                <section className="legal-section">
                    <h2>1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar Event Manager, aceptas estar sujeto a estos términos y condiciones. 
                        Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestra plataforma.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Uso del Servicio</h2>
                    <p>
                        Event Manager es una plataforma diseñada para la gestión y organización de eventos. 
                        Te comprometes a utilizar el servicio únicamente para fines legales y de acuerdo con estos términos.
                    </p>
                    <ul>
                        <li>No utilizar el servicio para actividades ilegales o no autorizadas</li>
                        <li>No intentar acceder a áreas restringidas del sistema</li>
                        <li>No interferir con el funcionamiento normal de la plataforma</li>
                        <li>Mantener la confidencialidad de tu cuenta y contraseña</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Cuenta de Usuario</h2>
                    <p>
                        Para utilizar ciertas funciones de Event Manager, debes crear una cuenta. Eres responsable de:
                    </p>
                    <ul>
                        <li>Proporcionar información precisa y actualizada</li>
                        <li>Mantener la seguridad de tu contraseña</li>
                        <li>Todas las actividades realizadas bajo tu cuenta</li>
                        <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Contenido del Usuario</h2>
                    <p>
                        Mantienes todos los derechos sobre el contenido que creas y publicas en Event Manager. 
                        Sin embargo, nos otorgas una licencia para usar, almacenar y mostrar dicho contenido 
                        en la medida necesaria para proporcionar el servicio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Propiedad Intelectual</h2>
                    <p>
                        Todo el contenido, características y funcionalidad de Event Manager son propiedad exclusiva 
                        de la empresa y están protegidos por leyes internacionales de derechos de autor, marcas 
                        registradas y otras leyes de propiedad intelectual.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Limitación de Responsabilidad</h2>
                    <p>
                        Event Manager se proporciona "tal cual" y "según disponibilidad". No garantizamos que el 
                        servicio será ininterrumpido, seguro o libre de errores. No seremos responsables de ningún 
                        daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad 
                        de usar el servicio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Modificaciones del Servicio</h2>
                    <p>
                        Nos reservamos el derecho de modificar o descontinuar, temporal o permanentemente, 
                        el servicio (o cualquier parte del mismo) con o sin previo aviso. No seremos responsables 
                        ante ti ni ante terceros por cualquier modificación, suspensión o descontinuación del servicio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Terminación</h2>
                    <p>
                        Podemos terminar o suspender tu acceso al servicio inmediatamente, sin previo aviso, 
                        por cualquier motivo, incluyendo, sin limitación, si incumples los Términos y Condiciones.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Ley Aplicable</h2>
                    <p>
                        Estos Términos se regirán e interpretarán de acuerdo con las leyes del país donde 
                        opera Event Manager, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Contacto</h2>
                    <p>
                        Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos a través de:
                    </p>
                    <ul>
                        <li>Email: legal@eventmanager.com</li>
                        <li>Teléfono: +34 900 123 456</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
