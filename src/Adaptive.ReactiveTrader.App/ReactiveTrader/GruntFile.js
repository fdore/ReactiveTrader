module.exports = function (grunt) {

    grunt.initConfig({
        meta: {
            files: ['www/js/**/*.js'],
            specs: ['www/js/**/*.spec.js'],
            less: ['www/**/*.less']
        },
        watch: {
            dev: {
                files: ['<%= meta.files %>', '<%= meta.specs %>'],
                tasks: ['jshint', 'karma:continuous']
            },
            ui: {
                files: ['<%= meta.less %>'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['www/less'],
                    yuicompress: false
                },
                files: [
                    { 'www/css/app.css': 'www/less/app.less' }
                ]
            }
        },
        jshint: {
            all: ['GruntFile.js', '<%= meta.files %>', '<%= meta.specs %>'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                laxcomma: false,
                globals: {
                    Swipe: true,
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true,
                    beforeEach: true,
                    afterEach: true,
                    angular: true,
                    module: true,
                    inject: true,
                    gapi: true,
                    spyOn: true
                }
            }
        },
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js',
                    singleRun: true,
                    browsers: ['Chrome']
                }
            },
            continuous: {
                options: {
                    configFile: 'karma.conf.js',
                    singleRun: false,
                    browsers: ['Chrome']
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: './www',
                    mainConfigFile: 'www/main.js',
                    dir: 'build',
                    fileExclusionRegExp: 'node_modules|tests',
                    skipDirOptimize: false,
                    optimize: 'uglify2',
                    skipModuleInsertion: false,
                    onBuildRead: function (moduleName, path, contents) {
                        return contents;
                    },
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        mangle: false
                    },
                    modules: [
                        {
                            name: 'main'
                        }
                    ]
                }
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Default task.
    grunt.registerTask('default', 'jshint');
    grunt.registerTask('build', ['requirejs']);

};