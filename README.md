# React + Vite

## **PROYECTO CARRITO DE COMPRAS**

Rquisitos previos para el funcionamiento del proyecto
Tener instalado **node.js**, para verificar esto podes ejecutar el siguiente comando en la terminal: 
*node --version*
Si no tenes instalado, podes descargarlo desde si sitio oficial [pagina oficila Node JS](https://nodejs.org/en).

## **CONFIGURACION DEL PROYECTO**

Una vez que tenemos node.js en nuestra computadora, pasamos a la creacion del proyecto.
En nuestro caso usamos [Vite](https://vitejs.dev/guide/), este mejora el tiempo de inicio del servidor de desarrollo dividiendo primero los módulos de una aplicación en dos categorías: dependencias y código fuente.

Creamos una carpeta para el proyecto y una vez dentro de la misma, ejecutamos el siguiente comando:. 
*npm create vite@latest*.

nos pide un nombre para nuestro ptoyecto, escribimos el de nuestra preferencia "carrito-compras" por ejemplo ( el nombre no puede tener espacios en blanco).

luego seleccionamos las opciones **React y JavaScript**, sleccionado esto, se estara creando la estructura de nuestro proyectos.

Al completarse la creacion del proyecto, tenemos que acceder a la carpeta mediante el comando
*cd carrito-compras*.

y una vez adentro de nuestra carpeta tenemos que instalar las dependencias mediante
*npm install*

## **COMPONENTES**

El componente principal de nuestra aplicacion de app.jsx, use el NOMBRE que viene por defecto al crear el proyecto, si uno desea puede modificar si nombre. Dentro de este se deberan importar y llamar los componentes necesarios para que el proyecto funcione correctamente

Los componentes **CarritoPage** y **ComprasPage** representan las paginas principales en donde se muestran los productos que se pueden agregar al carrito para luego realizar la compra.

#### ComprasPage
[![imagen-Seccion-Productos.png](https://i.postimg.cc/vBMmPtBp/imagen-Seccion-Productos.png)](https://postimg.cc/jWgK2NyX)

### CarritoPage
[![imagen-Carrito.png](https://i.postimg.cc/5032DQQj/imagen-Carrito.png)](https://postimg.cc/S2n4Msrp)

El componente **ProductosProvider** sera quien sirva como proveedor de los productos, en este caso se eligio realizar un fetch a una api para traer los mismos y luego decidir que datos mostrar de los mismos. La Api que se uso es [FakeStoreApi](https://fakestoreapi.com/products)

El componente **CarritoContext** sera quien contenga el contexto para el carrito de compras. El componente **CarritoProvider** sera quien provea el carrito de compras.

Pro ultimo tenemos los componentes **Card, FormCompra y NavBar**. 
El componente **Card** sirve para determinar la forma en que se mostrara cada prouctos. En este decidimos mostrar la foto, titulo, descripcion y precio del producto. Asi mismo se agrega un boton *agregar al carrito* el cual cambia a producto agregado al carrito una vez que el mismo fue agregado
**NavBar** nos muestra la barra de navegacion superior
**FormCompra** se utiliza cuando al apretar el boton *COMPRAR* de **CarritoPage**, si se cumple una serie de requisitos, aparezca nuestro formulario de compras.

Cuando un componente se utiliza dentro de otro componente, el mismo debe importarte en su componente padre. 

## ESTRUCTURA

[![estructura.png](https://i.postimg.cc/6psVrk0p/estructura.png)](https://postimg.cc/w7VsHbZC)

<!-- Carrito/
|-- node_modules/
|-- src/
|   |-- components/
|   |   |-- FormCompra.jsx
|   |   |-- NavBar.jsx
|   |   |-- Card.jsx
|   |
|   |-- context/
|   |   |-- productosContext.jsx
|   |   |-- productosProvider.jsx
|   |   |-- CarritoContext.jsx
|   |   |-- CarritoProvider.jsx
|   |
|   |-- pages/
|   |   |-- CarritoPage.jsx
|   |   |-- ComprasPage.jsx
|   |
|   |-- styles/
|   |   |-- card.css
|   |   |-- comprasPage.css
|   |
|   |-- app.jsx
|   |-- app.css
|   |-- main.jsx
|   |-- iconoCarrito.jsx
|
|-- .eslintrx.cjs
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- vite.config.js
 -->


## INSTALACION DE DEPENDENCIAS

#### Emotion (Estilos en React):
npm install@emotion/react y npm install@emotion/styled.

#### Material-UI (Componentes de interfaz de usuario):
npm install@mui/icons-material y npm install@mui/material.

#### React (Biblioteca principal):
npm install react y npm install react-dom.

#### React Bootstrap (Componentes de Bootstrap en React):
npm install react-bootstrap.

#### React Router (Enrutamiento en React):
npm installreact-router-dom.
