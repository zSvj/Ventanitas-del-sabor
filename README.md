# 🍕 Ventanitas del Sabor - Pizzería & Restaurante

Una página web moderna y responsive para el restaurante "Ventanitas del Sabor", diseñada con animaciones suaves, diseño atractivo y toda la información del menú organizada por categorías.

## 🌟 Características

- **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Efectos de hover, transiciones y animaciones de entrada
- **Menú Completo**: Todas las categorías organizadas:
  - Menú del Día
  - Pastas (Espaguetis & Penne)
  - Asados (Hamburguesa Artesanal, Brusqueta)
  - Pizzas Artesanales (más de 20 variedades)
  - Lasagnas (Familiar e Individual)
  - Maizitos
- **Información de Contacto**: Dirección, teléfono, puntos de referencia y servicios de delivery
- **Navegación Suave**: Scroll suave entre secciones
- **Optimización SEO**: Estructura semántica y meta tags apropiados

## 📱 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Animaciones, gradientes, y diseño responsive
- **JavaScript**: Interactividad, animaciones y efectos
- **Font Awesome**: Iconos para la interfaz
- **Google Fonts**: Tipografía Poppins

## 🚀 Cómo Usar

### Opción 1: GitHub Pages (Recomendado)

1. **Fork este repositorio**
2. **Ve a Settings** de tu repositorio
3. **Scroll hasta "Pages"** en el menú lateral
4. **Selecciona "Deploy from a branch"**
5. **Elige "main" branch** y carpeta "/ (root)"
6. **Haz clic en "Save"**
7. Tu página estará disponible en: `https://tuusuario.github.io/nombre-del-repo`

### Opción 2: Servidor Local

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/ventanitas-del-sabor.git

# Navega al directorio
cd ventanitas-del-sabor

# Abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Luego visita: http://localhost:8000
```

### Opción 3: Netlify (Deploy Automático)

1. **Conecta tu repositorio de GitHub** a Netlify
2. **Configuración automática**: Netlify detectará los archivos estáticos
3. **Deploy instantáneo**: Cada push a main actualizará la página automáticamente

## 📂 Estructura del Proyecto

```
ventanitas-del-sabor/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # JavaScript e interactividad
└── README.md           # Este archivo
```

## 🎨 Personalización

### Colores Principales
```css
--primary-color: #FF8C00    /* Naranja principal */
--secondary-color: #0066CC  /* Azul secundario */
--accent-color: #FFC600     /* Amarillo acento */
```

### Modificar Información del Restaurante

1. **Datos de Contacto**: Edita la sección `#contacto` en `index.html`
2. **Precios**: Actualiza los precios en cada sección del menú
3. **Nuevos Platillos**: Agrega nuevos elementos siguiendo la estructura existente
4. **Logo**: Reemplaza el SVG en el header por tu logo

### Agregar Nuevas Secciones

```html
<div class="menu-category">
    <h3 class="category-title">Nueva Categoría</h3>
    <div class="menu-grid">
        <div class="menu-item">
            <div class="menu-item-content">
                <h4>Nombre del Plato</h4>
                <p class="menu-price">$XX.XXX</p>
                <p class="menu-description">Descripción del plato</p>
            </div>
        </div>
    </div>
</div>
```

## 📋 Menú Incluido

### 🍽️ Menú del Día
- Res, Cerdo, Pechuga (desde $15.000)
- Incluye: Sopa, ensalada, papas, jugo

### 🍝 Pastas
- Espaguetis & Penne
- Salsas: Carbonara, Alfredo, Bolognesa ($17.500)

### 🍔 Asados
- **Hamburguesa Artesanal** ($23.000): 200g de carne + acompañamientos
- **Brusqueta** ($16.000): 6 panes con ingredientes frescos

### 🍕 Pizzas Artesanales
Más de 20 variedades incluyendo:
- Clásicas: Queso, Jamón, Salami, Hawaina
- Especiales: Beto's, De la Casa, Tios, Tilita
- Gourmet: Dulce July, Mexicana, Griega, Artesanal
- Y muchas más...

### 🥘 Lasagnas
- Familiar: Bolognesa, Combinada ($70.000)
- Individual: Con gaseosa ($16.500) o sola ($15.000)

### 🌽 Maizitos
- Gratinados ($16.000)
- Tradicionales: Personal, Mediana, Grande

## 📞 Información de Contacto

- **Dirección**: Calle 47 Sur # 41A - 17
- **Teléfono**: 314 545 51 35
- **Delivery**: DiDi Food + Domicilios directos
- **Puntos de Referencia**: Iglesia El Trianon, Acopio Taxis, Panadería Zalema

## 🔧 Funcionalidades JavaScript

- **Navegación móvil**: Menú hamburguesa responsivo
- **Scroll suave**: Navegación entre secciones
- **Animaciones de entrada**: Elementos aparecen al hacer scroll
- **Efectos hover**: Interacciones visuales atractivas
- **Búsqueda de menú**: Filtrado dinámico de platos
- **Header dinámico**: Cambia al hacer scroll
- **Efecto parallax**: En la sección hero

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles iOS/Android

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar la página:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Ventanitas del Sabor** por el menú delicioso
- **Font Awesome** por los iconos
- **Google Fonts** por la tipografía Poppins
- **Comunidad de desarrolladores** por las inspiraciones

---

**¡Disfruta tu nueva página web! 🎉**

Para soporte o preguntas, contacta al desarrollador o abre un issue en GitHub.
