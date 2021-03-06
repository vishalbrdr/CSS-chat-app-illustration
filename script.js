const timeline = gsap.timeline()
timeline.from(".left-design", { y: "-150%", ease: "ease-out" })
        .from(".right-design", { y: "150%", ease: "ease-out" }, "<")
        .from(".phone", {scale: 0, duration: 1, opacity: 0, ease: "back"})
        .from(".content>*",{opacity:0, stagger: .4})
        .from(".attribution",{opacity:0, y:"10px"})
        .from(".chat", {scale:0, stagger: 1})