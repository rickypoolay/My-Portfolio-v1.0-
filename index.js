$(function () {

    //Installing Gsap Plugin

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    
    //Function to changing Navbar text color on scroll triggers 

    function scrollChangeNavText (navLink) {
        $('.nav-links li a').each(() => {
            $('.nav-links li a').css('color', 'hsla(0, 0%, 100%, 0.75)');
            $('.logo').css('color', 'hsla(0, 0%, 100%, 0.75)');
        })
        $(navLink).css('color', '#1E152A');
    }

    //Creating TimeLines for each Section
    var homeTL = gsap.timeline();
    var aboutTL = gsap.timeline({scrollTrigger: {trigger:'#about', start: "top center", end: "center center"}});
    var projectsTL = gsap.timeline({scrollTrigger: {trigger:'#projects', start: "top center", end: "center center"}});
    var contactTL = gsap.timeline({scrollTrigger: {trigger:'#contact', start: "top center", end: "center center"}});

    //Animate Pages adding to Timelines

        //Home
    homeTL.from('.logo', {duration:.5, opacity:0, delay:.25})
        .from('.nav-links li', {duration: .5, x:100, ease:'power1', stagger:.1})
        .from('#hero .name', {duration:.5, x:-100, opacity:0, ease:'power1'}, "-=.5")
        .from('#hero .title', {duration:.5, x:100, opacity:0, ease:'power1'}, "-=.5")

        //About
    aboutTL.from('.content-about, .content-skills' , {duration:.5,transformOrigin:'top center', boxShadow:'none', backgroundColor:'#1E152A', scaleY:0, ease:'power1', stagger:.25})
        .from('.content-about h2, .content-about p, .content-skills h2, .skills-list' , {duration: .5, y:100, opacity:0, ease:'power1'}, '-=.25')

        //Project
    projectsTL.from('#projects .header-bg', {duration:.5, scaleX:0, opacity:0, transformOrigin:'center center' , backgroundColor: '#1E152A'})
        .from('.project', {duration:.5, scaleX:0, scaleY:0, backgroundColor: '#1E152A', stagger:.1, ease:'back', opacity:0}, '-=.25')
        .from('#projects .btn', {duration:.5, opacity:0, ease:'back'})

        //Contact
    contactTL.from('#contact .text-wrapper', {duration:.75, opacity:0, y:200, ease:'power1'})
        .fromTo('#contact .btn', {scaleX:0, scaleY:0}, {duration:.5, scaleX:1, scaleY:1, ease:'back'})

    //Auto Scroll from navbar

        //Click logo, scroll to hero section
        
    $('.logo').click(() => {
        gsap.to(window, .5, {ease: 'power1', scrollTo:(`#hero`)})
    })
    
        //Scroll by clicking nav-link to section

    $('.nav-links li').click((e) => {
        const clicked = e.target.innerText.toLowerCase();
        if (clicked == 'resume') {
            return;
        } else {
            gsap.to(window, .5, {ease: 'power1', scrollTo:(`#${clicked}`)})
        }
    })

    //Change nav links to active color when scrolling to section

    //Logo Trigger
    ScrollTrigger.create({
        trigger: "#hero",
        start:"top center",
        end:"bottom center",
        onEnter: () => { scrollChangeNavText('.logo') },
        onEnterBack: () => { scrollChangeNavText('.logo') },
    })
    
    //About Trigger
    ScrollTrigger.create({
        trigger: "#about",
        start:"top center",
        end:"bottom center",
        onEnter: () => { scrollChangeNavText('.nav-about') },
        onEnterBack: () => { scrollChangeNavText('.nav-about') },
    })

    //Projects Trigger
    ScrollTrigger.create({
        trigger: "#projects",
        start:"top center",
        end:"bottom center",
        onEnter: () => { scrollChangeNavText('.nav-projects') },
        onEnterBack: () => { scrollChangeNavText('.nav-projects') },
    })

    //Contact Trigger
    ScrollTrigger.create({
        trigger: "#contact",
        start:"top center",
        end:"bottom center",
        onEnter: () => { scrollChangeNavText('.nav-contact') },
        onEnterBack: () => { scrollChangeNavText('.nav-contact') },
    })



































    
})