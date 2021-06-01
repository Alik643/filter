var div1 = document.querySelector('.div1')
var div2 = document.querySelector('.div2')
var div3 = document.querySelector('.div3')

var black1 = document.querySelector('.black1-2')
var black2 = document.querySelector('.black2-2')
var black3 = document.querySelector('.black3-2')

var divForColPic1 = document.querySelector('.divForColPic1')
var divForColPic2 = document.querySelector('.divForColPic2')
var divForColPic3 = document.querySelector('.divForColPic3')
var magic = document.querySelector('.focus-pocus')
var divNoColors1 = document.querySelector('.divNoColors1')

var listener = function (e) {
    magic.style.left = e.pageX - 160 + "px";
    if(magic.getBoundingClientRect().right >= div1.getBoundingClientRect().left){
        divForColPic1.style.width = magic.getBoundingClientRect().right - div1.getBoundingClientRect().left + 'px';
    };
    if(magic.getBoundingClientRect().right >= div1.getBoundingClientRect().right){
        black1.style.width = magic.getBoundingClientRect().left - div1.getBoundingClientRect().left + 'px';
    }
    if(magic.getBoundingClientRect().right >= div2.getBoundingClientRect().left){
        divForColPic2.style.width = magic.getBoundingClientRect().right - div2.getBoundingClientRect().left + 'px';
    };
    if(magic.getBoundingClientRect().right >= div2.getBoundingClientRect().right){
        black2.style.width = magic.getBoundingClientRect().left - div2.getBoundingClientRect().left + 'px';
    }

    if(magic.getBoundingClientRect().right >= div3.getBoundingClientRect().left){
        divForColPic3.style.width = magic.getBoundingClientRect().right - div3.getBoundingClientRect().left + 'px';
    };
    if(magic.getBoundingClientRect().right >= div3.getBoundingClientRect().right){
        black3.style.width = magic.getBoundingClientRect().left - div3.getBoundingClientRect().left + 'px';
    }
};
magic.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", listener);
});

magic.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", listener);
});

