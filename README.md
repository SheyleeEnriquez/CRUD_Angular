# Angular CRUD Application

## Descripción

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Angular. La aplicación permite gestionar una lista de productos, incluyendo la funcionalidad de agregar, editar y eliminar productos.

## Características

- **Crear Producto:** Permite agregar nuevos productos con nombre y precio.
- **Leer Productos:** Muestra una lista de productos disponibles.
- **Actualizar Producto:** Permite editar la información de un producto existente.
- **Eliminar Producto:** Permite eliminar un producto de la lista.

## Tecnologías Utilizadas

- **Angular:** Framework principal para la construcción de la aplicación.
- **JSON Server:** Simula una API REST para el almacenamiento de productos.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Angular CLI](https://angular.io/cli) (versión 12 o superior)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Instalación y Configuración

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
3. **Tener instalado json-server**
    ```bash
    npm install -g json-server
    ```
3. **Iniciar json-server**
    ```bash
    npx json-server db.json
    ```

## Uso

### Crear un Producto

1. Navega a la sección de agregar productos.
2. Completa el formulario con el nombre y precio del producto.
3. Haz clic en el botón "Add Product" para agregar el nuevo producto a la lista.

### Editar un Producto

1. En la lista de productos, haz clic en el botón "Edit" junto al producto que deseas editar.
2. Realiza los cambios necesarios en el formulario.
3. Haz clic en el botón "Update" para guardar los cambios.

### Eliminar un Producto

1. En la lista de productos, haz clic en el botón "Delete" junto al producto que deseas eliminar.
2. Confirma la eliminación en el cuadro de diálogo que aparece.