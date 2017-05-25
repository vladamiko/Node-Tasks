class Timer {
	provideResponse () {
		var date = new Date(),
		    now = '';
			
        now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

		return '{current-time: ' + now + '}';
	}
}
module.exports = new Timer();