/**
 * Created by HenryCui on 15-1-3.
 */
module.exports=function(grunt){
      grunt.initConfig({
          pkg:grunt.file.readJSON('package.json'),
          uglify:{
              options: {
                  banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
              },
              build: {
                  src: 'src/<%=pkg.name %>.js',
                  dest: 'build/<%= pkg.name %>.min.js'
              }
          }
      });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认任务
    grunt.registerTask('default', ['uglify']);
};
