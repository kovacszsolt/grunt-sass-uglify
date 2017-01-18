module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                options: {
                    mangle: true
                },
                files: {
                    'public/js/script.min.js': ['app/js/*.js']
                }
            }
        },
        jshint: {
            all: {
                src: 'app/js/*.js',
                options: {
                    reporterOutput: '',
                    bitwise: true,
//                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    noempty: true,
                    nonew: true,
                    quotmark: 'single',
                    regexp: true,
//                    undef: true,
                    unused: true,
                    trailing: true,
                    maxlen: 120,
                    force: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: "app/sass",
                    src: ['*.scss'],
                    dest: 'public/css/',
                    ext: '.css'
                }]
            }
        },
        concat_css: {
            options: {
            
            },
            all: {
                src: ["public/css/*.css"],
                dest: "public/css/style.min.css"
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concat-css');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'concat_css']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('js', ['jshint']);
};