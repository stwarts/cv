module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['style/*.css'],
        dest: 'style/index.css',
      },
    },
    uncss: {
      dist: {
        files: {
          'style/index.uncss': 'index.html'
        }
      }
    },
    cssmin: {
      options: {
        report: 'min'
      },
      target: {
        files: {
          'style/index.min.css': ['style/index.uncss']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('compilecss', ['concat', 'uncss', 'cssmin']);
}
