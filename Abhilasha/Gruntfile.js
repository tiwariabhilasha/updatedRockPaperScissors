
'use strict';

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '../static/sass/compvscomp.css': '../static/sass/compvscomp.scss'
            }
        }
    }
});

grunt.registerTask('default', ['sass','clean']);

