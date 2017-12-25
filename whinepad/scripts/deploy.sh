rm -rf __deployme
mkdir __deployme

sh scripts/build.sh

uglify -d bundle.js -o __deployme/bundle.js

cssshrink bundle.css > __deployme/bundle.css

cp index.html __deployme/index.html
cp -r images/ __deployme/images/

date; echo;
