$("#easterEgg") .mouseover(function () {
   this.src= "../img/bio-fry.jpg"
}).mouseout(function () {
    this.src= "../img/bio-SimeonG.jpg"
});


/* EASTER EGG FUN*/
/* Make the container relative */
.swap-on-hover {
    position: relative;   
    margin:  0 auto;
    width: 200px;
    height: 200px;
    align-items: center;
}

.swap-on-hover img {
    position: absolute;
    top:0;
    left:0;
    overflow: hidden;
    width: 200px;
    height: 200px;
}

.swap-on-hover .swap-on-hover_front-image {
    z-index: 9999;
    transition: opacity .5s linear;
}

.swap-on-hover:hover > .swap-on-hover_front-image{
    opacity: 0;
}
