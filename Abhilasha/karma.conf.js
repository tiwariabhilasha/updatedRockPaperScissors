
/*Karma config*/
module.exports = function (config) {

	config.set({
		
		basePath: 'test/choices.js',

		frameworks: ['jasmine'],

		files: ['test/choices.js'],

		preprocessors: {
			'test/choices.js': ['choices']
		},

		reporters: ['jasmine'],

		port: 8000,

	    colors: true,
	    
	    logLevel: config.LOG_INFO,
	    
	    autoWatch: true,
	    
	    browsers: ['Chrome'],
	    
	    singleRun: false,
	    
	    concurrency: Infinity
	});
};
