const express = require('express');
const menssage = require('../components/messages/network');
const user = require('../components/user/network');

/** aqui centralizaremos todas nuestras rutas  */
const routes = function (server){

    /** aqui le pasamos las rutas de messages y le pasamos el componente network 
     * al poner el /message, todos las rutas que estemos llamando tendran por delante
     * el /message/ cualquier cosa que pongamos
    */
    server.use('/message', menssage );
    server.use('/user', user);
}


module.exports = routes;