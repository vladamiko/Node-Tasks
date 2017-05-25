 var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.ico': 'text/plain'
    };
	
class StaticProvider {
    constructor (fs) {
	    this.fs = fs;
	}

    defineMimeType (extname) {
		return mimeTypes[extname];
	}	
	
	get (filePath, extname, response) {
		var contentType = this.defineMimeType(extname)
		
        this.fs.readFile('../client/' + filePath, function (error, content) {
            if (error) {
                console.log(' ERR:: file %s not found ...', filePath);
				
				this.notFound(response);				
            } else {
				console.log('file %s sent', filePath);
				
                response.writeHead(200, {'Content-Type': contentType});
                response.end(content);
            }
        }.bind(this));	
	}
	
	notFound (response) {
        this.fs.readFile('./404.html', function (error, content) {
            if (content) {                
				console.log('file ./404.html sent');
				
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(content);
            }
        }.bind(this));	
	}
}

module.exports = StaticProvider;