# Portfolio Personal - Alejandro Boattini

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 moderno (Flexbox & Grid)
- JavaScript vanilla (ES6+)
- Font Awesome para iconos
- Google Fonts (Inter)

## Estructura del Proyecto

```
CV/
├── index.html          # Página principal con toda la estructura
├── styles.css          # Estilos CSS con diseño responsive
├── script.js           # JavaScript para animaciones e interactividad
├── profile.jpg         # Foto de perfil (requerida)
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## Configuración Inicial

### 1. Agregar Foto de Perfil

Coloca tu foto de perfil en la carpeta raíz del proyecto con el nombre `profile.jpg`. Asegúrate de que:

- Sea cuadrada (relación 1:1)
- Tenga buena resolución (mínimo 400x400px)
- Sea menor a 500KB para mejor rendimiento

### 2. Personalizar Contenido

Edita `index.html` para actualizar:

- Información personal
- Proyectos destacados
- Servicios ofrecidos
- Enlaces de contacto

### 3. Personalizar Colores (Opcional)

Edita `styles.css` en la sección de variables CSS:

```css
:root {
    --color-primary: #A8D5E2;      /* Azul pastel */
    --color-secondary: #B5E8D3;    /* Verde menta */
    --color-accent: #FFB5A7;       /* Coral */
    /* Personaliza estos colores según tu preferencia */
}
```

## Secciones del Portfolio

### 1. Hero Section

- Foto de perfil circular con animación
- Nombre y título profesional
- Descripción personal
- Credenciales académicas
- Botones de contacto (Ver CV, LinkedIn y Telegram)

### 2. Proyectos Destacados

- 3 proyectos principales con descripción
- Tecnologías utilizadas
- Impacto/resultados medibles

### 3. Servicios

- 3 servicios principales ofrecidos
- Cards clickables que redirigen a Telegram
- Descripciones detalladas

### 4. Contacto

- Email, teléfono, Telegram y CV
- Enlaces directos para comunicación

### 5. Footer

- Enlaces a redes sociales (CV, LinkedIn, Telegram, Email)
- Copyright

## Mantenimiento

### Actualizar Proyectos

Edita la sección `#proyectos` en `index.html`:

```html
<article class="proyecto-card">
    <div class="proyecto-header">
        <div class="proyecto-icon">
            <i class="fas fa-chart-line"></i>
        </div>
        <h3 class="proyecto-title">Nombre del Proyecto</h3>
        <span class="proyecto-company">Nombre de la Empresa</span>
    </div>
    <p class="proyecto-description">
        Descripción del proyecto...
    </p>
    <div class="proyecto-tech">
        <span class="tech-tag">Tecnología 1</span>
        <span class="tech-tag">Tecnología 2</span>
    </div>
    <div class="proyecto-impact">
        <i class="fas fa-arrow-up"></i>
        <span>Impacto medible</span>
    </div>
</article>
```

### Actualizar Servicios

Edita la sección `#servicios` en `index.html` siguiendo la misma estructura de las cards existentes.

## Mejoras Futuras

Posibles mejoras que puedes implementar:

- [ ] Agregar sección de testimonios
- [ ] Integrar blog con artículos
- [ ] Agregar modo oscuro
- [ ] Integrar formulario de contacto
- [ ] Agregar Google Analytics
- [ ] Implementar animaciones más complejas
- [ ] Agregar certificaciones
- [ ] Galería de screenshots de proyectos

## Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como plantilla para tu propio portfolio.

## Contacto

**Alejandro Boattini**

- LinkedIn: [linkedin.com/in/alejandroboattini](https://www.linkedin.com/in/alejandroboattini/)
- Telegram: [@aleboa](https://t.me/aleboa)
- Email: boattiniad@gmail.com

---

Hecho con ❤️ y datos
