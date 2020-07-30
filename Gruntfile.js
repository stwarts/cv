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
          'style/index.min.css': 'index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss')

  grunt.registerTask('compilecss', ['concat', 'uncss']);
}
