module.exports = function ( config ) {
    config.set( {
        basePath: '.',

        files: [
            { pattern: 'www/main-test.js', included: true },
            { pattern: 'www/**/*.js', included: false },
            { pattern: 'www/js/**/*.spec.js', included: false }
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        // web server port
        port: 9876,
        // cli runner port
        runnerPort: 9100,
        frameworks: ['jasmine', 'requirejs'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};

