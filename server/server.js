'use strict';
var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
	RESTApiRouter = require('./RESTApiRouter'),
	StaticProvider = require('./StaticProvider'),
	staticProvider,
	restProvider;

staticProvider = new StaticProvider(fs);	
restProvider = new RESTApiRouter();	
	
http.createServer(onRequest).listen(3000);
console.log('Server started ...');

function onRequest (request, response) {
    var filePath = url.parse(request.url).pathname,        
        extname = '';

    if (filePath === '/'){
        filePath = '../client/index.html';
    }

    extname = path.extname(filePath);         
	
    if (restProvider.isItRest(filePath)) {
        restProvider.resolve(filePath, response);
    } else {
        staticProvider.get(filePath, extname, response);
    }

}