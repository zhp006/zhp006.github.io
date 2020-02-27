
var color = false;
function myFunction(){

	let bg_color = document.getElementById("bg-color");
	let bg_bw = document.getElementById("bg-bw2");
	let logo_color = document.getElementsByClassName("logo-color");

	if(!color){
		color = true;
	

		bg_bw.style.opacity = 0;
		bg_color.style.animation = "none";
		bg_bw.style.animation = "none";
		for(let i = 0; i < logo_color.length; i++){
			logo_color[i].style.opacity = 1;
		}
	}
	else{
		color = false;
	
		bg_bw.style.opacity = 1;
		bg_color.style.animation = "ripple 2s linear infinite";
		bg_bw.style.animation = "ripple2 2s linear infinite";
		for(let i = 0; i < logo_color.length; i++){
			logo_color[i].style.opacity = 0;
		}
	}
}

/* Home */
var home_tl = gsap.timeline()

home_tl.to("#eraser1", {duration: 0.5, x: -800})
home_tl.to("#eraser2", {duration: 0.5, x: 800})
home_tl.to("#eraser3", {duration: 0.5, x: -800})
home_tl.to("#eraser4", {duration: 0.5, x: 800})

const home_controller = new ScrollMagic.Controller()
var home_scene = new ScrollMagic.Scene({
	triggerElement: "#home",
	triggerHook: 1.0,
})
.setTween(home_tl)
.addTo(home_controller)


/* About*/
var about_tl = gsap.timeline()

about_tl.from(".profile-img", {duration: 1, y: -300, opacity: 0})
about_tl.from("#about_me", {duration: 1, opacity: 0})
about_tl.from(".intro", {duration: 1, opacity: 0})
about_tl.from(".feather-pen", {duration: 1, x: -300, opacity: 0})

const about_controller = new ScrollMagic.Controller()
var about_scene = new ScrollMagic.Scene({
	triggerElement: "#about",
	triggerHook: 0.7,
})
.setTween(about_tl)
.addTo(about_controller)

/* Education */
var edu_tl = gsap.timeline()

edu_tl.from(".ucsd-logo", {duration: 1, x: -300, opacity: 0, scale: 0.5})
edu_tl.from(".ucsd-intro", {duration: 1, y: -100, opacity: 0})
edu_tl.from(".usc-logo", {duration: 1, x: 300, opacity: 0, scale: 0.5})
edu_tl.from(".usc-intro", {duration: 1, y: 300, opacity: 0})

const education_controller = new ScrollMagic.Controller()
var edu_scene = new ScrollMagic.Scene({
	triggerElement: "#education",
	triggerHook: 0.7,
})
.setTween(edu_tl)
.addTo(education_controller)

/* Skill */
var skill_tl = gsap.timeline()

skill_tl.fromTo(".bg-bw", {ClipPath: 'circle(1%)'},{duration: 3, ClipPath:'circle(50%)'})
skill_tl.from("#ps", {duration: 1,y:-10, opacity: 0})
skill_tl.from("#java", {duration: 3, y:-30, opacity: 0},4.9)
skill_tl.from("#windows", {duration: 3,y:-20, opacity: 0},4.3)
skill_tl.from("#git", {duration: 3,y:-50, opacity: 0},4)
skill_tl.from("#html5", {duration: 3, y:-30, opacity: 0},4.7)
skill_tl.from("#css3", {duration: 3, y:-40, opacity: 0},4.8)
skill_tl.from("#js", {duration: 3, y:-50, opacity: 0},4.9)
skill_tl.from("#cpp", {duration: 3,y:-20, opacity: 0},4.5)
skill_tl.from("#python", {duration: 3,y:-40, opacity: 0},4.1)
skill_tl.from("#skill-btn", {duration: 2, opacity: 0},5.5)

skill_tl.eventCallback("onComplete", startRipple);

const skill_controller = new ScrollMagic.Controller()
var skill_scene = new ScrollMagic.Scene({
	triggerElement: "#skills",
	triggerHook: 0.7,
})
.setTween(skill_tl)
.addTo(skill_controller)


function startRipple(){
	let bg_color = document.getElementById("bg-color");
	let bg_bw    = document.getElementById("bg-bw2");

	bg_color.style.opacity = 1;
	bg_bw.style.opacity = 1;

	bg_color.style.animation = "ripple 2s linear infinite";
	bg_bw.style.animation = "ripple2 2s linear infinite";

}

/* ---------------- Pojects ----------------  */

/* Project cover */
var proj0_tl = gsap.timeline()

proj0_tl.from(".cover_title", {duration: 3, opacity: 0})
proj0_tl.from("#cover_next", {duration: 1, opacity: 0})

const proj0_controller = new ScrollMagic.Controller()
var proj0_scene = new ScrollMagic.Scene({
	triggerElement: "#cover_next",
	triggerHook: 1,
})
.setTween(proj0_tl)
.addTo(proj0_controller)

/* Project 1 */
var proj1_tl = gsap.timeline()

proj1_tl.from("#proj1_left", {duration: 1, x: -300, opacity: 0})
proj1_tl.from("#proj1_right", {duration: 1,x: 300, opacity: 0})

const proj1_controller = new ScrollMagic.Controller({vertical:false})
var proj1_scene = new ScrollMagic.Scene({
	triggerElement: "#proj1_right",
	triggerHook: 1,
})
.setTween(proj1_tl)
.addTo(proj1_controller)

/* Project 2 */
var proj2_tl = gsap.timeline()

proj2_tl.from("#proj2_left", {duration: 1, x: -300, opacity: 0})
proj2_tl.from(".screen3", {duration: 0.3,x: 300, opacity: 0})
proj2_tl.from(".screen2", {duration: 0.3,x: 300, opacity: 0})
proj2_tl.from(".screen1", {duration: 0.3,x: 300, opacity: 0})

const proj2_controller = new ScrollMagic.Controller({vertical:false})
var proj2_scene = new ScrollMagic.Scene({
	triggerElement: "#proj2_right",
	triggerHook: 1,
})
.setTween(proj2_tl)
.addTo(proj2_controller)

/* Project 3 */
var proj3_tl = gsap.timeline()

proj3_tl.from("#proj3_left", {duration: 1, x: -300, opacity: 0})
proj3_tl.from("#proj3_right", {duration: 1.5,x: 300, opacity: 0})

const proj3_controller = new ScrollMagic.Controller({vertical:false})
var proj3_scene = new ScrollMagic.Scene({
	triggerElement: "#proj3_left",
	triggerHook: 0.5,
})
.setTween(proj3_tl)
.addTo(proj3_controller)
