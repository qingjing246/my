window.onscroll = function () {
    about();
    skills();
    work();
    portfolio();




    //作品动画
    function portfolio(){
        var portfolio = document.getElementsByClassName('portfolio')[0].offsetTop;
        var sTop = document.body.scrollTop;
        var portfolioTitle = document.getElementById('portfolio-title');
        var hr7 = document.getElementById('hr7');
        var hr8 = document.getElementById('hr8');
        var kuaidi = document.getElementById('kuaidi');
        var h = portfolio - sTop;
        console.log(h);
        if (h <= 500 && h > 0) {
            portfolioTitle.className = 'a-swing';
            hr7.className = 'hr-animation';
            hr8.className = 'hr-animation';
            kuaidi.className = 'kuaidi';
        } else {
            portfolioTitle.className = '';
            hr7.className = '';
            hr8.className = '';
        }
    }
    //个人经历介绍动画
    function work(){
        var workExperience = document.getElementsByClassName('work-experience')[0].offsetTop;
        var sTop = document.body.scrollTop;
        var work = document.getElementById('work');
        var hr5 = document.getElementById('hr5');
        var hr6 = document.getElementById('hr6');
        var kuaidi = document.getElementById('kuaidi');
        var h = workExperience - sTop;
        if (h <= 500 && h > 0) {
            work.className = 'a-swing';
            hr5.className = 'hr-animation';
            hr6.className = 'hr-animation';
            kuaidi.className = 'kuaidi';
        } else {
            work.className = '';
            hr5.className = '';
            hr6.className = '';
        }
    }
    //技能介绍
    function skills(){
        var mySkills = document.getElementsByClassName('skills')[0].offsetTop;
        var sTop = document.body.scrollTop;
        var skills = document.getElementById('skills');
        var hr3 = document.getElementById('hr3');
        var hr4 = document.getElementById('hr4');
        var h = mySkills - sTop;
        if (h <= 500 && h > 0) {
            skills.className = 'a-swing';
            hr3.className = 'hr-animation';
            hr4.className = 'hr-animation';
        } else {
            skills.className = '';
            hr3.className = '';
            hr4.className = '';
        }
    }
    //个人介绍动画
    function about(){
        var me = document.getElementsByClassName('me')[0].offsetTop;
        var sTop = document.body.scrollTop;
        var about = document.getElementById('about');
        var hr1 = document.getElementById('hr1');
        var hr2 = document.getElementById('hr2');
        var h = me - sTop;
        if (h <= 500 && h > 0) {
            about.className = 'a-swing';
            hr1.className = 'hr-animation';
            hr2.className = 'hr-animation';
        } else {
            about.className = '';
            hr1.className = '';
            hr2.className = '';
        }
    }

};


