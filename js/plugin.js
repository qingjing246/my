var index = function (all){
    this.name = document.getElementsByClassName(all.name)[0].offsetTop;
    this.sTop = document.body.scrollTop;
    this.WH = window.innerHeight * 0.8 ;
    this.obj = document.getElementById(all.name);
    this.hr1 = document.getElementById(all.hr1);
    this.hr2 = document.getElementById(all.hr2);
    this.winHight = this.name - this.sTop;
    if( all.other ){
        this.other =  document.getElementById(all.other.obj);
        this.animation = all.other.animation;
        if(this.winHight <= 500 && this.winHight > 0){
            this.other.className = this.animation;
        }
    }
    if(this.winHight <= this.WH && this.winHight > -200){
        this.obj.className = 'a-swing';
        this.hr1.className = 'hr-animation';
        this.hr2.className = 'hr-animation';
    }else{
        this.obj.className = '';
        this.hr1.className = '';
        this.hr2.className = '';
    }
    console.log(this.WH);
};

