# Portfolio Personal - Alejandro Boattini

Portfolio profesional one-page diseñado como CV/Portfolio para mostrar experiencia, proyectos y servicios como Consultor BI & Analista de Datos.

## Características

- Diseño moderno y minimalista con paleta de colores pastel
- Totalmente responsive (mobile-first)
- Animaciones suaves al hacer scroll
- Optimizado para SEO y accesibilidad
- Performance optimizado
- Navegación smooth entre secciones
- Cards interactivas para proyectos y servicios

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

## Despliegue en GitHub Pages

### Opción 1: Despliegue Automático (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   # Inicializar git si aún no lo hiciste
   git init

   # Agregar todos los archivos
   git add .

   # Hacer commit inicial
   git commit -m "Initial commit: Portfolio website"

   # Crear repositorio en GitHub (reemplaza 'tu-usuario')
   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git

   # Subir al repositorio
   git branch -M main
   git push -u origin main
   ```

2. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages**
   - En **Source**, selecciona la rama `main` y carpeta `/ (root)`
   - Click en **Save**
   - Espera 1-2 minutos y tu sitio estará disponible en: `https://tu-usuario.github.io/`

### Opción 2: Repositorio Personalizado

Si prefieres un nombre de repositorio diferente:

```bash
# Crear repositorio con nombre personalizado
git remote add origin https://github.com/tu-usuario/portfolio.git
git push -u origin main
```

Luego en **Settings → Pages**, tu sitio estará en:
`https://tu-usuario.github.io/portfolio/`

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

## Optimizaciones Incluidas

### SEO
- Meta tags optimizados
- Open Graph para redes sociales
- Estructura semántica HTML5
- Alt texts en imágenes

### Performance
- CSS minificado mediante variables
- Lazy loading de secciones
- Throttling en eventos de scroll
- Fuentes optimizadas con preconnect

### Accesibilidad
- HTML semántico
- Navegación por teclado
- ARIA labels donde corresponde
- Contraste de colores adecuado

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

## Comandos Git Útiles

```bash
# Ver estado de cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios a GitHub
git push origin main

# Ver historial de commits
git log --oneline
```

## Troubleshooting

### La página no se muestra

1. Verifica que el archivo se llame exactamente `index.html`
2. Revisa la configuración de GitHub Pages en Settings
3. Espera 1-2 minutos después de hacer push
4. Revisa la consola del navegador por errores

### La imagen no se muestra

1. Verifica que `profile.jpg` esté en la raíz del proyecto
2. Asegúrate de que el nombre sea exactamente `profile.jpg` (minúsculas)
3. Si usas otro formato (PNG), actualiza el nombre en `index.html`

### Los estilos no se aplican

1. Verifica que `styles.css` esté en la raíz
2. Limpia la caché del navegador (Ctrl + Shift + R)
3. Revisa la consola del navegador por errores

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
