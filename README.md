# ContactList_Carvajal

## Developed by 🛠️
* **Jaime Andrés Mayor Aldana**  [AndresMayor](https://github.com/AndresMayor)🚀

## Requerimientos

-Node instalado.

-NPM instalado.

-Una base de datos MySQl corriendo en el purto 3306 con  nombre PTCarvajal y con un determinado  usuario y contraseña 

-Ingrese las credenciales creadas en el bancked/config.js

## Herramientas Usadas

-Node.js.

-React.

-Sequelize.

-MySQL.

-MVC.

-API-REST.

## Script para iniciar el backend

    npm install 

    npm run dev

### Script para iniciar el frontend

    cd frontendcl
    
    npm install
    
    npm start

# Diagrama Entidad - Relacion

![Diagrama Entidad - Relacion ](./Documentacion/DEntidadRelacion.drawio.svg "Diagrama base de datos")

# Diagrama de secuencia Login y Registrar Usurario

![Diagrama de secuencua Login y Registar Usario ](./Documentacion/DsUpdateContact.drawio.svg "Login y Registar Usuario")


# Diagrama de secuencia añadir contacto  y eliminar contacto

![Diagrama de secuencua Login y Registar Usario ](./Documentacion/DsCreatedContactDeleteContact.drawio.svg "Añadir y eliminar contacto ")

# Diagrama de secuencia actualizar datos de un contacto

![Diagrama de secuencua Login y Registar Usario ](./Documentacion/DsLoginRegisterUser.drawio.svg "Actualizar contacto")

#Docker

## Script para contruir imagen y iniciar  el contenedor del Frontend

    docker build -t andres192715/frontend .   
    
    docker run -t -d andres192715/frontend

## Script para constuir el contenedor del Backend
