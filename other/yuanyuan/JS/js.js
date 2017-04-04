/**
 * Created by Administrator on 2017-02-23.
 */
window.onload =function (){
    var oLi = document.getElementsByClassName('list-img');
    var oUl = document.getElementById('nb-list');
    var oA =oUl.getElementsByTagName('a');
    oA[0].className = 'bg';
    oLi[0].style.display = 'block';
    var mun = 0;
    var timer = null;
    for(var i =0;i<oA.length;i++){
        oA[i].index = i ;
        oA[i].onmousemove =function (){
            clearInterval(timer);
            for (var i = 0; i < oLi.length; i++) {
                oLi[i].style.display = 'none';
                oA[i].className = '';
            }
            oLi[this.index].style.display = 'block';
            oA[this.index].className = 'bg';
            mun = this.index;
        };
        oA[i].onmouseout = function (){
            clearInterval(timer);
            time();
        }
    }
    time();

    function time() {
        clearInterval(timer);
        timer = setInterval(function () {
            mun++;
            for (var i = 0; i < oLi.length; i++) {
                oLi[i].style.display = 'none';
                oA[i].className = '';
            }
            if (mun == 3) {
                mun = 0;
            }
            oLi[mun].style.display = 'block';
            oA[mun].className = 'bg';
        }, 2000);
    }
};