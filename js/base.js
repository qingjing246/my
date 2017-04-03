/**
 * Created by Administrator on 2017-04-02.
 */

window.onscroll = function (){

    skillsAnimation ();

    //about
    var t1 = {
        name:'about',
        hr1:'hr1',
        hr2:'hr2'
    };
    new index(t1);
    //skills
    var t2 = {
        name:'skills',
        hr1:'hr3',
        hr2:'hr4'
    };
    new index(t2);
    //work
    var t3 = {
        name:'work',
        hr1:'hr5',
        hr2:'hr6',
        other:{
            obj:'kuaidi',
            animation:'kuaidi'
        }
    };
    new index(t3);
    //portfolio
    var t4 = {
        name:'portfolio',
        hr1:'hr7',
        hr2:'hr8'

    };
    new index(t4);
    //about-me
    var t5 = {
        name:'web',
        hr1:'hr9',
        hr2:'hr10'
    };
    new index(t5);
};

function skillsAnimation (){
    var mySkills = document.getElementsByClassName('skills')[0].offsetTop;
    var sTop = document.body.scrollTop;
    var skills = document.getElementsByClassName('skills-text')[0];
    var p = skills.getElementsByTagName('p');
    var WH = window.innerHeight * 0.8 ;
    for(var i =0 ; i < p.length;i++){
        if(mySkills-sTop < WH && mySkills-sTop > -200){
            skills.style.opacity = '1';
            p[i].className = 'rollIn'+i ;


        }
    }
}

