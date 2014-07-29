# 17173前端开发模版 #

## 文件结构说明 ##
前端开发项目文件初始化结构如下：

	+--demo
	|	+--img
	|	+--js
	|		+--lib
	|	+--index.html
	+--dist
	|	+--css
	|		+--lib
	|		+--style.css
	|		+--style.min.css
	|	+--js
	|		+--min
	|		+--main.js
	+--doc
	+--node_modules
	+--src
	|	+--css
	|		+--sass
	|		+--style.css
	|	+--js
	|		+--coffee
	|		+--main.js
	+--test
	+--.jshintrc
	+--bower.json
	+--.bowerrc
	+--Gruntfile.js
	+--pakage.json
	+--README.md

demo：效果预览目录；

demo/js/lib：bower开发包默认存放目录；

dist：静态资源发布版本目录；

dist/js/min：JS压缩未合并版本目录；

doc：YUIDoc文档存放目录；

node_modules：nodejs模块默认存放目录；

src：静态资源开发版本目录；

test：单元测试脚本存放目录；

.jshintrc：jshint默认配置文件，用于编辑器jshint配置，自动化的jshint代码审查配置在Gruntfile.js中配置；

bower.json：开发包管理配置文件；

.bowerrc：bower配置文件；

Gruntfile.js：grunt任务管理配置文件；

package.json：grunt项目配置文件；

README.md：说明文档；