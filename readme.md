#1. 安装生成器
```
npm install express-generator -g
```
#2. 生成项目
```
express mock-server
```
#3.进入项目并安装依赖
```
cd mock-server && npm install
```
#4.启动项目
```
npm start
```
#5.通过浏览器访问
http://localhost:3000/

#提交到github
```
touch .gitignore

> node_modules
> .idea
> lib

git init
git add -A
git commit -m"1. 创建mock-server"
git remote add origin https://github.com/zhufengnodejs/zhufengmall201509.git
git push origin master
```