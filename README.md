# Tarjeta de invitación · Pulse Night

Personalizador de entradas para un evento ficticio, hecho con React y CSS. Permite escribir el nombre del asistente y elegir entre una entrada General o VIP, con una vista previa que se actualiza al instante.

Este proyecto forma parte de mi práctica de React. La idea es entender cómo se conectan los inputs con el estado y cómo se comparten los datos entre componentes.

## Qué puedes hacer

- Escribir el nombre del asistente y verlo en la entrada.
- Elegir el tipo de entrada: General o VIP.
- Ver el diseño en pantallas de escritorio y dispositivos móviles.

Es una práctica de interfaz: no genera entradas válidas ni guarda los datos al recargar la página.

## Qué practiqué

- Manejo de estado con `useState`.
- Uso de `onChange` para responder a cambios en los campos.
- Paso de valores y funciones mediante props.
- Separación de la interfaz en componentes.
- Diferencia entre los nombres de las props de un componente y los eventos reconocidos por React en elementos HTML.

## Cómo se organiza

- `App.jsx`: guarda el nombre y la categoría de la entrada, y define las funciones que actualizan esos estados.
- `HeaderEntrada.jsx`: muestra el encabezado.
- `FormularioEntrada.jsx`: recibe los datos y las funciones para responder a los cambios del formulario.
- `VistaPreviaEntrada.jsx`: recibe el nombre y la categoría para mostrarlos en la entrada.
- `index.css`: contiene los estilos y la adaptación a pantallas pequeñas.

El recorrido de los datos es: cambio en el formulario → actualización del estado en `App` → nuevos valores en la vista previa.

## Tecnologías

React, JavaScript, JSX, CSS y Vite. El proyecto también incluye ESLint para revisar el código.

## Ejecutar en local

Necesitas Node.js y npm instalados. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que Vite muestre en la terminal.

## Otros comandos

```bash
npm run build    # Genera la versión de producción en dist
npm run preview  # Sirve localmente la versión generada
npm run lint     # Revisa el código con ESLint
```

Antes de usar `npm run preview`, ejecuta `npm run build`.
