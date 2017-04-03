/**
 * Created by Administrator on 2017-02-19.
 */
window.onload = function() {
    //轮播图
    var oUl = document.getElementById('slider-list');
    var oLi = oUl.getElementsByTagName('li');
    var bgUl = document.getElementById('slider-bg');
    var bgLi = bgUl.getElementsByTagName('li');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oSlider = document.getElementById('slider');
    var timer = null;
    var mun = 0;
    //初始化图片显示
    bgLi[mun].className = 'bg';
    oLi[0].style.opacity = 1;
    clearInterval(timer);
    time();

    //移入停止滚动
    oSlider.onmousemove = function() {
        clearInterval(timer);
        oNext.style.display = 'block';
        oPrev.style.display = 'block';
        console.log(mun);
    };

    //移入继续滚动
    oSlider.onmouseout = function() {
        clearInterval(timer);
        oNext.style.display = 'none';
        oPrev.style.display = 'none';
        time();
    };

    //点击切换下一张
    oNext.onclick = function() {
        mun++;
        if (mun >= 5) {
            mun = 0;
        }
        change(oLi, bgLi, mun);
    };

    //点击切换上一张
    oPrev.onclick = function() {
        mun--;
        if (mun <= -1) {
            mun = 4;
        }
        change(oLi, bgLi, mun);
    };
    //下面条形选择栏事件
    for (var i = 0; i < bgLi.length; i++) {
        bgLi[i].index = i;

        bgLi[i].onmousemove = function() {
            mun = this.index;
            clearInterval(timer);
            change(oLi, bgLi, this.index);
        };
        bgLi[i].onmouseout = function() {
            clearInterval(timer);
            time();
        }
    }

    //轮播定时器
    function time() {
        clearInterval(timer);
        timer = setInterval(function() {
            mun++;
            if (mun == 5) {
                mun = 0;
            }
            change(oLi, bgLi, mun);
        }, 1000);
    }
};


function change(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        b[i].className = '';
        a[i].style.opacity = 0;
    }
    b[c].className = 'bg';
    a[c].style.opacity = 1;
}