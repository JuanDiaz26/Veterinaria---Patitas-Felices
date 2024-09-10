# Veterinaria Patitas Felices

**Veterinaria Patitas Felices** es una página web desarrollada para ofrecer servicios veterinarios, planes de atención, especialistas y productos para mascotas. Esta aplicación está construida utilizando React y varias bibliotecas adicionales para proporcionar una experiencia de usuario dinámica y moderna.

## **Tecnologías Utilizadas**

- **React**: Biblioteca principal utilizada para la creación de la interfaz de usuario.
- **React Bootstrap**: Utilizado para el diseño y estilización de componentes con un enfoque responsivo.
- **React Bootstrap Icons**: Íconos utilizados para mejorar la interfaz gráfica.
- **Email.js**: Integración para enviar correos electrónicos desde formularios directamente desde la página sin necesidad de un backend.

## **Estructura de Componentes**

### **1. TopBar**
- Barra superior que incluye información de contacto rápido y enlaces adicionales.

### **2. Navbar**
- Componente de navegación principal que incluye enlaces a las secciones de la página como Inicio, Sobre Mi, Contacto, Productos y tambien botones que incluyen el Registro e Inicio de Sesión. 
- Utiliza estilos de React Bootstrap y React Bootstrap Icons para mejorar la navegación.

### **3. Portada**

La portada del sitio web es una sección visualmente atractiva que recibe a los visitantes. Esta sección incluye:

- **Imagen Principal**: Una imagen destacada que refleja la identidad de la veterinaria y da la bienvenida a los usuarios.
- **Botón de Redirección**: Un botón prominente que permite a los usuarios navegar rápidamente a la sección de especialistas, facilitando el acceso a la información sobre el equipo veterinario.

La portada está diseñada para captar la atención del visitante desde el primer momento y guiarlo hacia las áreas más importantes del sitio.

### **4. ChatBot (`Chatbot.jsx`)**

El componente `Chatbot.jsx` integra un asistente virtual basado en **Voiceflow**, una herramienta para crear chatbots de manera sencilla:

- **Asistente Virtual**: El chatbot proporciona asistencia básica a los visitantes del sitio, respondiendo preguntas frecuentes sobre la veterinaria.
- **Enlaces Informativos**: Incluye algunos enlaces a secciones relevantes del sitio, ofreciendo una manera rápida de acceder a más información.
- **Propósito**: No pretende ser un sistema profesional de soporte, sino una adición moderna al proyecto final para mejorar la experiencia de usuario.

Este chatbot es un ejemplo de cómo se pueden integrar elementos interactivos en un sitio web para agregar valor y modernidad, manteniendo la experiencia del usuario dinámica y accesible.


### **5. Componente de Planes (`Planes.jsx`)**
- Sección donde se muestran los diferentes planes disponibles para las mascotas, categorizados por necesidades y edades.
- Los planes incluyen un enlace a una página de detalle específica para cada uno.

### **6. Componente de Especialistas (`Especialistas.jsx`)**
- Muestra una lista de los especialistas veterinarios que forman parte del equipo, con información de sus áreas de experiencia.
- Cada especialista se presenta con su foto y breve descripción.

### **7. Banner de Marcas (`LogoBanner.jsx`)**
- Un banner que muestra las marcas de productos disponibles en la veterinaria.

### **8. Cupón Banner (`CuponBanner.jsx`)**
- Sección donde los usuarios pueden obtener cupones de descuento para servicios o productos.
- Utiliza **Email.js** para enviar un correo electrónico al usuario con el cupón.

### **9. Detalle de Planes (`DetallePlanes.jsx`)**
- Incluye un formulario donde los usuarios pueden enviar sus datos e intereses sobre un plan en particular, utilizando **Email.js** para la comunicación.

### **10. Footer**
- Pie de página con enlaces a redes sociales, información de contacto y otros enlaces relevantes de la página.
