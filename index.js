$(function () {

    //Installing Gsap Plugin

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    

    //Creating TimeLines for each Section

    var homeTL = gsap.timeline();
    var aboutTL = gsap.timeline({scrollTrigger: {trigger:'#about', start: "top center", end: "center center"}});
    var projectsTL = gsap.timeline();

    //Animate Pages

        //Home
    homeTL.from('.logo', {duration:.5, opacity:0, delay:.25})
        .from('.nav-links li', {duration: .5, x:100, ease:'power1', stagger:.1})
        .from('#hero .name', {duration:.5, x:-100, opacity:0, ease:'power1'}, "-=.5")
        .from('#hero .title', {duration:.5, x:100, opacity:0, ease:'power1'}, "-=.5")

        //About
        aboutTL.from('.content-about, .content-skills' , {duration:.5,transformOrigin:'top center', boxShadow:'none', backgroundColor:'#1E152A', scaleY:0, ease:'power1', stagger:.25})
        .from('.content-about h2, .content-about p, .content-skills h2, .skills-list' , {duration: .5, y:100, opacity:0, ease:'power1'}, '-=.25')

        //Project

    //Auto Scroll from navbar and text color setting
        
    $('.logo').click(() => {
        $('.logo').css('color', '#1E152A');
        $('.nav-links li a').each(() => {
            $('.nav-links li a').css('color', 'hsla(0, 0%, 100%, 0.75)');
        })
        gsap.to(window, .5, {ease: 'power1', scrollTo:(`#hero`)})
    })
    
        //Auto Scroll by fetching innerText of clicked nav-link and inputing to gsap Scroll to

    $('.nav-links li').click((e) => {
        const clicked = e.target.innerText.toLowerCase();
        if (clicked == 'resume') {
            return;
        } else {
            //Scroll
            gsap.to(window, .5, {ease: 'power1', scrollTo:(`#${clicked}`)})

            //Set Each Nav link to reset
            $('.nav-links li a').each(() => {
                $('.nav-links li a').css('color', 'hsla(0, 0%, 100%, 0.75)');
                $('.logo').css('color', 'hsla(0, 0%, 100%, 0.75)');
            })

            //set new color
            $(e.target).css('color', '#1E152A');
        }
    })

    // Scroll Trigger nav link updates

    // gsap.to('nav-link')









































    
})