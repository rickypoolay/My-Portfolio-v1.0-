$(function () {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  console.log(top);

  if (top <= 100) {
    () => {
      $(".logo").css("color", "#000");
    };
  }

  //Installing Gsap Plugins //
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  //Function to changing Navbar text color on scroll triggers //
  function scrollChangeNavText(navLink) {
    $(".nav-links li a").each(() => {
      $(".nav-links li a").css("color", "");
      $(".mobile-links li a").css("color", "");
      $(".logo").css("color", "");
    });
    $(navLink).css("color", "#000");
  }

  //Creating TimeLines for each Section //
  var homeTL = gsap.timeline();
  var aboutTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "center center",
    },
  });
  var projectsTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top center",
      end: "center center",
    },
  });
  var contactTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
      end: "center center",
    },
  });
  var menuTL = gsap.timeline();

  //Animate Pages adding to Timelines //
  //Home
  homeTL
    .from(".logo", { duration: 0.5, opacity: 0, delay: 0.25 })
    .from(".nav-links li", {
      duration: 0.5,
      x: 100,
      ease: "power1",
      stagger: 0.1,
    })
    .from(
      "#hero .name",
      { duration: 0.5, x: -100, opacity: 0, ease: "power1" },
      "-=.5"
    )
    .from(
      "#hero .title",
      { duration: 0.5, x: 100, opacity: 0, ease: "power1" },
      "-=.5"
    );

  //About
  aboutTL
    .from(".content-about, .content-skills", {
      duration: 0.5,
      transformOrigin: "top center",
      boxShadow: "none",
      backgroundColor: "#000",
      scaleY: 0,
      ease: "power1",
      stagger: 0.25,
    })
    .from(
      ".content-about h2, .content-about p, .content-skills h2,.content-skills .skills-list",
      { duration: 0.5, y: 100, opacity: 0, ease: "power1" },
      "-=.25"
    );

  //Project
  projectsTL
    .from("#projects .header-bg", {
      duration: 0.5,
      scaleX: 0,
      opacity: 0,
      transformOrigin: "center center",
      backgroundColor: "#000",
    })
    .from(
      ".project",
      {
        duration: 0.5,
        scaleX: 0,
        scaleY: 0,
        backgroundColor: "#000",
        stagger: 0.1,
        ease: "back",
        opacity: 0,
      },
      "-=.25"
    )
    .from("#projects .btn", { duration: 0.5, opacity: 0, ease: "back" });

  //Contact
  contactTL.from("#contact .text-wrapper", {
    duration: 0.75,
    opacity: 0,
    y: 200,
    ease: "power1",
  });

  //On click submit form.
  $("#form-submit").click(() => {
    if (
      $("#fullName")[0].value &&
      $("#email")[0].value &&
      $("#message")[0].value
    ) {
      $(".contact-form").submit();
    } else {
      alert("Fill all inputs");
    }
  });

  //Auto Scroll from navbar //

  //Click logo, scroll to hero section

  $(".logo").click(() => {
    gsap.to(window, 0.5, { ease: "power1", scrollTo: `#hero` });
  });

  //Scroll by clicking nav-link to section

  $(".nav-links li, .mobile-links li").click((e) => {
    const clicked = e.target.innerText.toLowerCase();
    if (clicked == "resume") {
      return;
    } else {
      gsap.to(window, 0.5, { ease: "power1", scrollTo: `#${clicked}` });
    }
  });

  //Change nav links to active color when scrolling to section //

  //Create Logo Trigger
  ScrollTrigger.create({
    trigger: "#hero",
    start: "center center",
    end: "bottom center",
    onEnter: () => {
      scrollChangeNavText(".logo");
    },
    onEnterBack: () => {
      scrollChangeNavText(".logo");
    },
  });

  //Create each nav-link trigger

  $("section").each((i) => {
    let sectionID = $("section")[i].getAttribute("id");

    ScrollTrigger.create({
      trigger: `#${sectionID}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        scrollChangeNavText(`.nav-${sectionID}`);
      },
      onEnterBack: () => {
        scrollChangeNavText(`.nav-${sectionID}`);
      },
      // markers: true,
    });
  });

  //Mobile Hamburger Toggle

  //Animation
  menuTL.paused(true);
  menuTL
    .to(".nav-dropdown", {
      duration: 0.2,
      clipPath: "circle(150% at top right)",
      ease: "power2",
    })
    .from(
      ".mobile-links li",
      { duration: 0.5, x: 1000, ease: "power1", stagger: 0.05 },
      "-=.5"
    );

  //If hamburger is clicked
  $(".hamburger").click(() => {
    $(".hamburger").toggleClass("is-active");

    //If hamburger has 'active' class
    if ($(".hamburger").hasClass("is-active")) {
      menuTL.play();

      //If logo is clicked while menu is opened
      $(".logo").click(() => {
        if ($(".hamburger").hasClass("is-active")) {
          menuTL.reverse();
          $(".hamburger").toggleClass("is-active");
        }
      });

      //If Hamburger is deactivated
    } else {
      menuTL.reverse();
    }
  });

  //If any mobile link is clicked it will deactivate
  $(".mobile-links").click(() => {
    menuTL.reverse();
    $(".hamburger").toggleClass("is-active");
  });
});
