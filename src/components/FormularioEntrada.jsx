export function FormularioEntrada({ value, onLoquesea, onSelect }) {
  return (
    <section className="editor" aria-labelledby="editor-title">
      <p className="eyebrow">TU PRÓXIMO PLAN</p>

      <h1 id="editor-title">
        La noche
        <br />
        empieza contigo.
      </h1>

      <p className="intro">
        Personaliza tu entrada y prepárate para cantar hasta quedarte sin voz.
      </p>

      <div className="ticket-fields">
        <div className="field">
          <label htmlFor="attendee">Nombre del asistente</label>
          <input
            id="attendee"
            name="nombre"
            type="text"
            value={value}
            onChange={onLoquesea}
            placeholder="Ej. Alex Rodríguez"
            maxLength={60}
          />
        </div>

        <div className="field">
          <label htmlFor="ticket-type">Tipo de entrada</label>
          <select
            id="ticket-type"
            name="tipo"
            defaultValue="general"
            onChange={onSelect}
          >
            <option value="General">General</option>
            <option value="Vip">VIP</option>
          </select>
        </div>
      </div>

      <p className="editor-note">
        Tu entrada se actualizará mientras completas los datos.
      </p>
    </section>
  );
}
