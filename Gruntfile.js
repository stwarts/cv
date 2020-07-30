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
          'index.css': 'index.html'
        }
      }
    },
    cssmin: {
      options: {
        report: 'min'
      },
      target: {
        files: {
          'index.min.css': ['index.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'index.html': ['index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml')

  grunt.registerTask('compilecss', ['concat', 'uncss', 'cssmin', 'processhtml']);
}
