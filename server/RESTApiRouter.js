var routes = {
        '/get-time': require('./rest/Timer'),
        '/get-names': require('./rest/Group'),
        '/get-enemy': require('./rest/EnemyGenerator') 
    };
	
class RESTApiRouter {
    constructor () {
	 
	}

    isItRest (route) {
		let routeNumber = Object.keys(routes).indexOf(route);
		return (routeNumber < 0)? false: true;
	}	
	
	resolve (route, response) {
        let processor = routes[route];       
		
		console.log('processor for %s was defined', route);
		
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(processor.provideResponse());        
	}
}

module.exports = RESTApiRouter;