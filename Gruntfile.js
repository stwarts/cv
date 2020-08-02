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
      },
      pdf: {
        files: {
          'pdf_index.html': ['index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('compilecss', ['concat', 'uncss', 'cssmin', 'processhtml:dist']);

  grunt.registerTask('convertslim', 'Convert slim to html', function () {
    let options = {
      cmd: 'slimrb',
      args: [
        'index.html.slim',
        'index.html',
        '--pretty'
      ]
    };

    grunt.util.spawn(options, function(error, result, code) {
      if (code !== 0) { grunt.warn(error, code); }
    });
  });

  grunt.registerTask('generatepdf', 'Generate PDF', function () {
    let htmlPath = 'file://' + __dirname + '/pdf_index.html';
    let options = {
      cmd: 'chromehtml2pdf',
      args: [
        '--out=./resource/Stewart_Nguyen.pdf',
        '--format=A4',
        '--printBackground=true',
        htmlPath
      ]
    };

    grunt.util.spawn(options, function (error, result, code) {
      console.log(result);
      if (code !== 0) { grunt.warn(error, code); }
    });
  });
}
