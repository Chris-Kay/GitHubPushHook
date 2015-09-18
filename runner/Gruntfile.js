module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        jshint: {
            app: {
                'files': { 
                    'src': '../source/*'
                }
            }
        }
    });

    grunt.registerTask('app', function() {
        grunt.task.run('jshint:app');
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};