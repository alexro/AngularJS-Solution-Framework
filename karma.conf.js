module.exports = function (config) {
    config.set({

        basePath: 'src/client',
        frameworks: ['jasmine'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],
        files: [
            'lib/jquery/dist/jquery.min.js',
            'lib/angular/angular.min.js',
            'lib/angular-mocks/angular-mocks.js',
            'build/**/*.js',
            'app/**/*.html',
            '../../test/client/app/**/*.spec.js'
        ],
        browsers: ['Chrome'],
        singleRun: true,
        reporters: ['progress'],
        preprocessors: {
            'app/**/*.html': ['ng-html2js']
        }

    });
};
