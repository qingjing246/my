var gulp=require('gulp');
var rev = require('gulp-rev');//版本更新
var revReplace = require('gulp-rev-replace'); //引用更新
var useref = require('gulp-useref'); //所有CSS,JS文件合并
var filter = require('gulp-filter');//压缩CSS,JS文件
var uglify = require('gulp-uglify');//压缩JS代码
var csso = require('gulp-csso');//压缩CSS代码


gulp.task('default',function(){
    var jsFile = filter('**/*.js',{restore:true});
    var cssFile = filter('**/*.css',{restore:true});
    var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true});

    return gulp.src('src/index.html')
        .pipe(useref())//获取页面标识的所有JS.CSS文件
        .pipe(jsFile)//所有JS文件
        .pipe(uglify())//压缩所有JS代码
        .pipe(jsFile.restore)//把压缩后的代码返回文件流中
        .pipe(cssFile)//获取CSS文件
        .pipe(csso())//压缩CSS代码
        .pipe(cssFile.restore)//返回CSS文件
        .pipe(indexHtmlFilter)//排除HTML文件
        .pipe(rev())//给JS.CSS文件打版本号
        .pipe(indexHtmlFilter.restore)//返回HTML文件
        .pipe(revReplace())//文件引用更新
        .pipe(gulp.dest('dist'));//任务结束，文件返回到dist文件下
});