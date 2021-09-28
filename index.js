$(function () {

    //Installing Gsap Plugin

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    

    //Custom Eases
    const easeInOut = ("custom", "M0,0 C0.196,0 0.336,0.082 0.507,0.512 0.626,0.812 0.666,1 1,1 ");

    //Creating TimeLines for each Section

    var homeTL = gsap.timeline();
    var aboutTL = gsap.timeline();

    //Animate Landing Page

        //Home
    homeTL.from('.logo', {duration:.5, opacity:0, delay:.25})
        .from('.nav-links li', {duration: .5, x:100, ease:'power1', stagger:.1})
        .from('.name', {duration:.5, x:-100, opacity:0, ease:'power1'}, "-=.5")
        .from('.title', {duration:.5, x:100, opacity:0, ease:'power1'}, "-=.25")

        //About
    aboutTL.from('.content-about', {scrollTrigger: {trigger:'.content-about', start:"top center"}, duration:.5, x:-100, opacity:0, ease:'power1'})
        .from('.content-skills', {duration:.5, x:100, opacity:0, ease:'power1'}, "-=.25")


    //Auto Scroll by fetching innerText of clicked nav-link and inputing to gsap Scroll to

    $('.logo').click(() => {
        $('.logo').css('color', '#1E152A');
        $('.nav-links li a').each(() => {
            $('.nav-links li a').css('color', 'hsla(0, 0%, 100%, 0.75)');
        })
    })

    $('.nav-links li').click((e) => {
        const clicked = e.target.innerText.toLowerCase();
        if (clicked == 'resume') {
            return;
        } else {
            //Scroll
            gsap.to(window, .5, {ease: 'expo', scrollTo:(`#${clicked}`)})

            //Set Each Nav link to reset
            $('.nav-links li a').each(() => {
                $('.nav-links li a').css('color', 'hsla(0, 0%, 100%, 0.75)');
                $('.logo').css('color', 'hsla(0, 0%, 100%, 0.75)');
            })

            //set new color
            $(e.target).css('color', '#1E152A');
        }
    })


































})