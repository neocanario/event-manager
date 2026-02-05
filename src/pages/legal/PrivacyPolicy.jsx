import './LegalPage.css';

export function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>Política de Privacidad</h1>
                <p className="last-updated">Última actualización: 5 de febrero de 2026</p>

                <section className="legal-section">
                    <h2>1. Introducción</h2>
                    <p>
                        En Event Manager, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política 
                        de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información 
                        cuando utilizas nuestra plataforma.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Información que Recopilamos</h2>
                    <h3>2.1 Información que Proporcionas</h3>
                    <ul>
                        <li>Nombre y datos de contacto (email, teléfono)</li>
                        <li>Información de la cuenta (nombre de usuario, contraseña)</li>
                        <li>Datos de eventos que creas y gestionas</li>
                        <li>Información de pago (procesada de forma segura por terceros)</li>
                    </ul>

                    <h3>2.2 Información Recopilada Automáticamente</h3>
                    <ul>
                        <li>Dirección IP y ubicación geográfica</li>
                        <li>Tipo de navegador y dispositivo</li>
                        <li>Páginas visitadas y tiempo de navegación</li>
                        <li>Cookies y tecnologías similares</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. Cómo Usamos tu Información</h2>
                    <p>Utilizamos la información recopilada para:</p>
                    <ul>
                        <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                        <li>Procesar transacciones y enviar confirmaciones</li>
                        <li>Comunicarnos contigo sobre tu cuenta y actualizaciones</li>
                        <li>Personalizar tu experiencia en la plataforma</li>
                        <li>Analizar el uso y mejorar nuestros servicios</li>
                        <li>Prevenir fraudes y garantizar la seguridad</li>
                        <li>Cumplir con obligaciones legales</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Compartir tu Información</h2>
                    <p>
                        No vendemos tu información personal. Podemos compartir tu información en las siguientes 
                        circunstancias:
                    </p>
                    <ul>
                        <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                        <li>Cuando sea requerido por ley o proceso legal</li>
                        <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                        <li>Con tu consentimiento explícito</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. Seguridad de los Datos</h2>
                    <p>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                    </p>
                    <ul>
                        <li>Cifrado de datos en tránsito y en reposo</li>
                        <li>Controles de acceso estrictos</li>
                        <li>Monitoreo regular de sistemas</li>
                        <li>Auditorías de seguridad periódicas</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>6. Tus Derechos</h2>
                    <p>Tienes derecho a:</p>
                    <ul>
                        <li>Acceder a tu información personal</li>
                        <li>Rectificar datos incorrectos o incompletos</li>
                        <li>Solicitar la eliminación de tus datos</li>
                        <li>Oponerte al procesamiento de tus datos</li>
                        <li>Solicitar la portabilidad de tus datos</li>
                        <li>Retirar el consentimiento en cualquier momento</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>7. Retención de Datos</h2>
                    <p>
                        Conservamos tu información personal solo durante el tiempo necesario para los fines 
                        descritos en esta política, a menos que la ley requiera o permita un período de retención 
                        más largo.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Cookies y Tecnologías Similares</h2>
                    <p>
                        Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Para más información, 
                        consulta nuestra Política de Cookies.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Transferencias Internacionales</h2>
                    <p>
                        Tu información puede ser transferida y procesada en países fuera de tu país de residencia. 
                        Aseguramos que tales transferencias cumplan con las leyes de protección de datos aplicables.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Menores de Edad</h2>
                    <p>
                        Nuestro servicio no está dirigido a menores de 16 años. No recopilamos intencionalmente 
                        información de menores. Si descubrimos que hemos recopilado datos de un menor, los 
                        eliminaremos inmediatamente.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>11. Cambios a esta Política</h2>
                    <p>
                        Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre 
                        cambios significativos publicando la nueva política en esta página y actualizando la 
                        fecha de "Última actualización".
                    </p>
                </section>

                <section className="legal-section">
                    <h2>12. Contacto</h2>
                    <p>
                        Para ejercer tus derechos o si tienes preguntas sobre esta Política de Privacidad:
                    </p>
                    <ul>
                        <li>Email: privacy@eventmanager.com</li>
                        <li>Teléfono: +34 900 123 456</li>
                        <li>Dirección: Event Manager Privacy Office</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
