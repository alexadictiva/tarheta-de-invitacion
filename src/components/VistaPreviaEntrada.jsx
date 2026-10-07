export function VistaPreviaEntrada({valueAsistant, category}) {
  return (
    <section className="preview" aria-labelledby="preview-title">
      <h2 id="preview-title" className="preview-label">
        TU ENTRADA
      </h2>

      <article className="ticket">
        <div className="ticket-top">
          <span className="event-category">LIVE MUSIC EXPERIENCE</span>
          <span className="ticket-badge">{category}</span>
        </div>

        <div className="event-art">
          <span className="orbit orbit-one" aria-hidden="true" />
          <span className="orbit orbit-two" aria-hidden="true" />
          <span className="orbit orbit-three" aria-hidden="true" />

          <h3>
            PULSE
            <br />
            NIGHT
          </h3>

          <p>SUBE EL VOLUMEN.</p>
        </div>

        <div className="event-info">
          <div>
            <span className="detail-label">FECHA</span>
            <p>14 NOV, 2026</p>
          </div>
          <div>
            <span className="detail-label">APERTURA</span>
            <p>20:00 H</p>
          </div>
          <div className="event-location">
            <span className="detail-label">LUGAR</span>
            <p>Club Central · Buenos Aires</p>
          </div>
        </div>

        <div className="ticket-bottom">
          <div className="attendee-info">
            <span className="detail-label">ASISTENTE</span>
            <p className="attendee-name">{valueAsistant || 'Nombre del asistente'}</p>
          </div>

          <div className="barcode" aria-hidden="true" />
          <p className="ticket-code">PULSE — 001 — 2026</p>
        </div>
      </article>

      <p className="preview-note">Evento ficticio · Diseño de práctica</p>
    </section>
  );
}
