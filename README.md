# BDT Hackathon Nuwe 🏆

En esta Hackathon he decidido realizar la sección de Frontend haciendo uso para ello de tecnologías como ReactJs y NextJs.

## Desarrollo

Como he mencionado anteriormente para la realización de este hackathon he hecho uso de las tecnologías ReactJs y NextJs. Además, a fin de mantener un mismo formato a lo largo de todo el proyecto y validar la calidad del código desarrollado he configurado en el proyecto los paquetes **eslint** (haciendo uso del estilo Standard) y **prettier**. Tambien he puesto **husky** para que se verifique el estilo del código antes de poder realizar cualquier commit.

Para la gestión del SEO he uso de **next-seo** configurando así los metadatos necesarios para optimizar el posicionamiento en buscadores.

Como paquetes adicionales a los mencionados anteriormenete, tambien he hecho uso de **jssha** para garantizar la integridad de las contraseñas y que estas sean almacenadas encriptadas mediante el algoritmo SHA256 y **react-modal** para gestionar los modales tanto de error como de cuenta creada correctamente.

Para el almacenamiento de los datos he hecho uso del **local storage**, siendo este tipo de almacenamiento usado tanto para almacenar los usuarios registrados en el sistema como para reducir el número de peticiones a servicios extenernos a forma de memoria cache.

### Estructura del proyecto

La estructura del proyecto es la siguiente:

- **components**: Directorio donde se almacenan todos los componentes desarrollados y de los que se nutre la aplicación. Aqui se pueden encontrar diferentes tipos de componentes como iconos, inputs personalizados,... De forma que los componentes resulten reutilizables a lo largo de toda la aplicación y está resulte más modularizable.
- **pages**: Directorio por defecto creado por NextJS a fin de gestionar las diferentes páginas que componen la aplicación. En este caso la página es una única página formada por diferentes componentes.
- **public**: Lugar donde se recogen los recursos públicos de la aplicación como imágenes, iconos,...
- **styles**: Carpeta donde se recogen los aspectos comunes al estilo general de la aplicación. En este caso aqui se recogen los colores principales que componen la aplicación, las fuentes a utilizar de forma general, los breakpoints asociados al diseño responsive,... De esta forma realizar cambios generalizados sobre la aplicación resultaría más sencillo.
- **utils**: Carpeta en la cual se recogen los archivos con funciones o constantes a utilizar por toda la aplicación. De forma que las funciones propias del negocio resulten más aisladas.
- **tests**: Lugar donde se recogen los teses desarrollados. Para los teses he empleado Jest y react-testing-library.

### APIS externas

Para la recuperación de datos he hecho uso de la API REST pública https://restcountries.eu/ con el objetivo de recuperar los paises que componen este planeta y recuperar sus prefijos de telefono y los códigos asociados a cada pais. Estos códigos resultan útiles para recuperar las banderas de los paises asociados a cada prefijo telefónico. En concreto, he hecho uso de un endpoint:

- **/rest/v2/all**: Este endpoint permite recuperar más información de la mencionada en la parte superior. Es por eso que se realiza un procesado al recibir la información para únicamente hacer uso de los parámetros necesarios.

Además, a fin de reducir el número de llamadas a realizar a la API y que las cargas resulten más rapidas se cachean los datos procesados en el local storage para que a partir de la primera petición las posteriores resulten más rapidas y proporcionar de esta forma una mejor experiencia al usuario.

## Verificaciones contempladas

Para garantizar la integridad de los datos a lo largo del proceso de registro se han contemplado una serie de verificaciones. En caso de no cumplir con las verificaciones establecidas el usuario visualizará un modal, el cual resulta reutilizable para los distintos errores, que le indicará el error en concreto acontecido. Las validaciones contempladas son las siguientes:

- **Nombre**: El nombre no se puede dejar en blanco.
- **Correo electrónico**: La dirección de correo no puede estar vacia y además ha de poseer un formato valido.
- **Dirección**: La dirección no puede estar vacia.
- **Teléfono**: El número de teléfono no puede estar vacio.
- **Número tarjeta de crédito**: Para verificar la integridad del número introducido se hace uso de una expresión regular que verifica que verdaderamente se trata de una tarjeta de crédito.
- **CVV**: Al igual que con el número de tarjeta de crédito, este campo se verifica mediante el uso de una expresión regular.

En el caso de estos dos últimos campos, además del modal de error correspondiente se proporciona una retroalimentación visual sobre la correción de los datos introducidos al abandonar el campo.

### Despliegue

Para el despliegue se ha hecho uso de la plataforma **Vercel**.
