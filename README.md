# 🔐 Encriptador de Texto – Alura Latam

Un encriptador de texto desarrollado como parte del **reto de Alura Latam**, que permite cifrar y descifrar mensajes usando un conjunto de reglas simples. Ideal para practicar **manipulación de strings**, **eventos en JavaScript**, y el desarrollo de interfaces **responsive** con HTML y CSS.

![Vista del encriptador](./img/mockup.png)

> ⚠️ **Nota**: Este encriptador no usa algoritmos criptográficos reales. Está diseñado con fines educativos.

---

## 📋 Reglas de Encriptación

El sistema sigue las siguientes reglas de reemplazo:

| Letra original | Reemplazo |
|----------------|-----------|
| `e`            | `enter`   |
| `i`            | `imes`    |
| `a`            | `ai`      |
| `o`            | `ober`    |
| `u`            | `ufat`    |

- Solo se encriptan letras **minúsculas**.
- No se permiten acentos ni caracteres especiales (el encriptador los ignora o los deja intactos según la implementación).

---

## ✨ Funcionalidades

- **Encriptar**: Transforma el texto ingresado según las reglas definidas.
- **Desencriptar**: Convierte el texto encriptado de vuelta a su forma original.
- **Copiar**: Permite copiar el resultado al portapapeles con un solo clic.
- **Diseño responsive**: Funciona en móviles, tablets y escritorio.
- **Validación visual**: Muestra mensajes si el campo está vacío o contiene caracteres no permitidos.

---

## 📁 Estructura del Proyecto

    encriptador-Alura/
    ├── index.html
    ├── app.js
    ├── style.css
    └── img/
      └── mockup.png (opcional: puedes agregar tus propias imágenes)

---

## ▶️ Cómo Ejecutar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DIEGOJGS/encriptador-Alura.git
   
2. Abre el archivo index.html en tu navegador.

3. ¡Escribe un mensaje, encripta, desencripta o copia el resultado!
💡 Consejo: Para una mejor experiencia (especialmente al copiar al portapapeles), ejecútalo en un servidor local:
    npx serve
   
## 🛠️ Tecnologías Utilizadas
- HTML5
- CSS3 (con enfoque en diseño responsive)
- JavaScript (manipulación de strings, eventos, DOM)
- Google Fonts (opcional, según tu implementación)

## 📚 Inspirado en
Reto de programación de Alura Latam – Fundamentos de Programación en JavaScript


---
¡Gracias por visitar el proyecto! 🚀

### 📌 Notas adicionales:

- Si tienes una imagen de tu interfaz (por ejemplo, exportada de Figma), guárdala en la carpeta `img/` y llámala `mockup.png` para que coincida con el `README`.
- Si usaste fuentes de Google Fonts o íconos, puedes personalizar la sección de tecnologías.
- Si deseas, puedo ayudarte a generar una **demo en GitHub Pages** o a mejorar la lógica de encriptación/desencriptación.

¿Quieres que adapte algo específico de tu implementación real (por ejemplo, cómo manejas mayúsculas o acentos)? ¡Solo dime!
