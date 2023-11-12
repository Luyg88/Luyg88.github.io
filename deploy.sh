# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 如果发布到 码云代码仓
git push -f https://github.com/Luyg88/Luyg88.github.io.git master:gh-pages

# 提交所有代码到github
cd ../../../
git add .
git cm -m 'update'
git push
