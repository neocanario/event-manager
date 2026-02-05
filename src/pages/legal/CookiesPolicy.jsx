import './LegalPage.css';

export function CookiesPolicy() {
    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>Política de Cookies</h1>
                <p className="last-updated">Última actualización: 5 de febrero de 2026</p>

                <section className="legal-section">
                    <h2>1. ¿Qué son las Cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
                        un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más 
                        eficiente y para proporcionar información a los propietarios del sitio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. ¿Cómo Usamos las Cookies?</h2>
                    <p>
                        Event Manager utiliza cookies para diversos fines, incluyendo mejorar tu experiencia, 
                        recordar tus preferencias y analizar cómo utilizas nuestro sitio.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Tipos de Cookies que Utilizamos</h2>
                    
                    <h3>3.1 Cookies Estrictamente Necesarias</h3>
                    <p>
                        Estas cookies son esenciales para que puedas navegar por el sitio y utilizar sus funciones. 
                        Sin estas cookies, no podemos proporcionar los servicios solicitados.
                    </p>
                    <ul>
                        <li>Cookies de sesión de usuario</li>
                        <li>Cookies de seguridad</li>
                        <li>Cookies de autenticación</li>
                    </ul>

                    <h3>3.2 Cookies de Rendimiento</h3>
                    <p>
                        Recopilan información sobre cómo los usuarios utilizan nuestro sitio, como qué páginas 
                        visitan con más frecuencia. Toda la información es agregada y anónima.
                    </p>
                    <ul>
                        <li>Google Analytics</li>
                        <li>Cookies de análisis de uso</li>
                        <li>Cookies de medición de velocidad</li>
                    </ul>

                    <h3>3.3 Cookies de Funcionalidad</h3>
                    <p>
                        Permiten que el sitio recuerde las elecciones que haces y proporcionen características 
                        mejoradas y más personalizadas.
                    </p>
                    <ul>
                        <li>Preferencias de idioma</li>
                        <li>Configuración de visualización</li>
                        <li>Datos de eventos guardados localmente</li>
                    </ul>

                    <h3>3.4 Cookies de Publicidad</h3>
                    <p>
                        Se utilizan para entregar anuncios más relevantes para ti y tus intereses. También se 
                        utilizan para limitar el número de veces que ves un anuncio.
                    </p>
                    <ul>
                        <li>Cookies de remarketing</li>
                        <li>Cookies de seguimiento de conversiones</li>
                        <li>Cookies de redes sociales</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Cookies de Terceros</h2>
                    <p>
                        Además de nuestras propias cookies, también utilizamos cookies de terceros:
                    </p>
                    <ul>
                        <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento</li>
                        <li><strong>Redes Sociales:</strong> Para integración de contenido social</li>
                        <li><strong>Proveedores de Pago:</strong> Para procesar transacciones seguras</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. Duración de las Cookies</h2>
                    <p>Utilizamos dos tipos de cookies según su duración:</p>
                    
                    <h3>5.1 Cookies de Sesión</h3>
                    <p>
                        Son temporales y se eliminan cuando cierras el navegador. Se utilizan para mantener 
                        tu sesión activa mientras navegas.
                    </p>

                    <h3>5.2 Cookies Persistentes</h3>
                    <p>
                        Permanecen en tu dispositivo durante un período de tiempo establecido o hasta que las 
                        elimines. Se utilizan para recordar tus preferencias entre visitas.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Gestión de Cookies</h2>
                    <p>
                        Puedes controlar y gestionar las cookies de varias maneras:
                    </p>
                    
                    <h3>6.1 Configuración del Navegador</h3>
                    <p>La mayoría de los navegadores te permiten:</p>
                    <ul>
                        <li>Ver qué cookies tienes y eliminarlas individualmente</li>
                        <li>Bloquear cookies de terceros</li>
                        <li>Bloquear cookies de sitios específicos</li>
                        <li>Bloquear todas las cookies</li>
                        <li>Eliminar todas las cookies al cerrar el navegador</li>
                    </ul>

                    <h3>6.2 Herramientas de Configuración</h3>
                    <p>
                        Puedes gestionar tus preferencias de cookies directamente en nuestro sitio mediante 
                        el panel de configuración de cookies disponible en el pie de página.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Consecuencias de Desactivar Cookies</h2>
                    <p>
                        Ten en cuenta que si desactivas ciertas cookies, es posible que no puedas utilizar 
                        todas las funciones de Event Manager. Algunas áreas del sitio pueden no funcionar 
                        correctamente o en absoluto.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Actualizaciones de esta Política</h2>
                    <p>
                        Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en 
                        las cookies que utilizamos o por otras razones operativas, legales o regulatorias.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Más Información</h2>
                    <p>Para obtener más información sobre cómo utilizamos cookies, puedes:</p>
                    <ul>
                        <li>Consultar nuestra Política de Privacidad</li>
                        <li>Contactarnos en: cookies@eventmanager.com</li>
                        <li>Visitar: www.allaboutcookies.org</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>10. Contacto</h2>
                    <p>
                        Si tienes preguntas sobre el uso de cookies en Event Manager:
                    </p>
                    <ul>
                        <li>Email: cookies@eventmanager.com</li>
                        <li>Teléfono: +34 900 123 456</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
