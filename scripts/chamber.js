// Datos de eventos
const events = [
    {
        title: "Networking Breakfast",
        date: "15 de Marzo, 2025",
        time: "8:00 AM - 10:00 AM",
        location: "Hotel Azalaï, Timbuktu",
        description: "Únase a nosotros para nuestro desayuno de networking mensual. Una oportunidad perfecta para conectar con otros empresarios locales."
    },
    {
        title: "Taller de Marketing Digital",
        date: "22 de Marzo, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Centro de Convenciones de Timbuktu",
        description: "Aprenda estrategias efectivas de marketing digital para hacer crecer su negocio en línea."
    }
];

// Cargar eventos en la página
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    
    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>No hay eventos programados actualmente. Vuelva a consultar pronto.</p>';
        return;
    }
    
    let eventsHTML = '';
    events.forEach(event => {
        eventsHTML += `
            <div class="event">
                <h3>${event.title}</h3>
                <p><strong>Fecha:</strong> ${event.date}</p>
                <p><strong>Hora:</strong> ${event.time}</p>
                <p><strong>Ubicación:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;
    });
    
    eventsContainer.innerHTML = eventsHTML;
}

// Modo oscuro/claro
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Cargar contenido al cargar la página
window.onload = () => {
    loadEvents();
};
