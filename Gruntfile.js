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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
}
