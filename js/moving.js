function Mario() {
    this.x = 0;
    this.y = 0;

    //向上移动 0上 1右 2下 3左
    this.move = function (dir) {
        switch (dir) {//dir没有写居然影响下面marioMove中的输出
            case 0:
                var mymario = document.getElementById('mymario');
                var top = mymario.style.top;
                top = parseInt(top.substring(0, top.length - 2));
                if ((top - 10) >= 0) {
                    mymario.style.top = top - 10 + "px";
                }
                break;
            case 1:
                //alert("向右边移动");
                //为了改变img的left和top先得到img
                var mymario = document.getElementById('mymario');
                // alert(mymario.style.left);
                //把mymario.style.top中的px去掉，然后再转成数字
                var left = mymario.style.left;
                left = parseInt(left.substring(0, left.length - 2));
                if ((left + 10) <= 450) {
                    mymario.style.left = left + 10 + "px";
                }
                break;
            case 2:
                var mymario = document.getElementById('mymario');
                var top = mymario.style.top;
                top = parseInt(top.substring(0, top.length - 2));
                if ((top + 10) <= 350) {
                    mymario.style.top = top + 10 + "px";
                }
                break;
            case 3:
                var mymario = document.getElementById('mymario');
                var left = mymario.style.left;
                left = parseInt(left.substring(0, left.length - 2));
                if ((left - 10) >= 0) {
                    mymario.style.left = left - 10 + "px";
                }
                break;
        }
    }
}
//创建Mairo对象
var mario = new Mario();

//全局函数
function marioMove(dir) {
    //window.alert("aaa");
    switch (dir) {
        case 0:
            mario.move(dir);
            break;
        case 1:
            mario.move(dir);
            //alert(dir);
            break;
        case 2:
            mario.move(dir);
            break;
        case 3:
            mario.move(dir);
            break;
    }
}
