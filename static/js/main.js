/**
 * Created by jizhihui on 2016/4/21.
 */
var timeID;
var image;
var current = 0;
var images = new Array(5);
function init() {
    for (var i = 1; i <= 5; i++) {
        images[i]     = new Image(1000, 438);
        images[i].src = "static/images/blog_1" + i + ".jpg";
    }
    image = document.images[0];
}
function setSrc(i) {
    current = i;
    //设置图片src的属性，实现图片的切换
    image.src = images[i].src;
}
function pre() {
    if (current <= 1) {
        setSrc(5);
    } else {
        current--;
        setSrc(current);
    }
}
function next() {
    if (current >= 5) {
        setSrc(1);
    } else {
        current++;
        setSrc(current);
    }
}
function play() {
    if (current >= 5) {
        current = 0;
    }
    setSrc(++current);
}