"use strict";

const job = document.querySelector(".job");
const infoJob = document.querySelector(".info__job");
const body = document.querySelector("body");
const anchors = document.getElementsByTagName("a");
const workHeading = document.querySelector(".work-heading");
const educationSection = document.querySelector(".section-education");
const contactSection = document.querySelector(".section-contact");
const projectContainer = document.querySelector(".project-container");
const projectLinksArr = document.querySelectorAll(".project-links");
const certificateLinksArr = document.querySelectorAll(".certificate-links");
const certificate = document.querySelector(".certificate");

const educationArr = document.querySelectorAll(".education");
const educationInfoArr = document.querySelectorAll(".info");
const sectionEdu = document.querySelector(".section-edu");

const sectionContact = document.querySelector(".section-contact");

const subtitleCoder = document.querySelector(".subtitle__1");
const subtitleMotorcycle = document.querySelector(".subtitle__2");
const subtitleGamer = document.querySelector(".subtitle__3");
const wrenchIcon = document.querySelector(".icon__1");
const computerIcon = document.querySelector(".icon__2");
const motorcycleIcon = document.querySelector(".icon__3");
const controllerIcon = document.querySelector(".icon__4");

const linksArr = [...projectLinksArr, ...certificateLinksArr];

const fadeOut = (arr) => {
  arr.forEach((el) => el.classList.toggle("fade"));
};

job.addEventListener("mouseenter", () => {
  infoJob.classList.toggle("hidden");

  // linksArr.forEach((el) => el.classList.toggle("fade"));

  // [
  //   projectContainer,
  //   workHeading,
  //   educationSection,
  //   contactSection,
  //   ...linksArr,
  // ].forEach((el) => el.classList.toggle("fade"));
  fadeOut([
    projectContainer,
    workHeading,
    educationSection,
    contactSection,
    ...linksArr,
  ]);

  job.classList.toggle("highlighted");
});

job.addEventListener("mouseleave", () => {
  infoJob.classList.toggle("hidden");

  // linksArr.forEach((el) => el.classList.toggle("fade"));

  // [
  //   projectContainer,
  //   workHeading,
  //   educationSection,
  //   contactSection,
  //   ...linksArr,
  // ].forEach((el) => el.classList.toggle("fade"));
  fadeOut([
    projectContainer,
    workHeading,
    educationSection,
    contactSection,
    ...linksArr,
  ]);
  job.classList.toggle("highlighted");
});

educationArr.forEach((el, i) => {
  const eduNew = [...educationArr];
  eduNew.splice(eduNew.indexOf(educationArr[i]), 1);
  el.addEventListener("mouseenter", () => {
    educationInfoArr[i].classList.toggle("hidden");

    // linksArr.forEach((el) => el.classList.toggle("fade"));

    // [
    //   sectionEdu,
    //   projectContainer,
    //   workHeading,
    //   contactSection,
    //   job,
    //   certificate,
    //   ...linksArr,
    // ].forEach((el) => el.classList.toggle("fade"));
    fadeOut([
      sectionEdu,
      projectContainer,
      workHeading,
      contactSection,
      job,
      certificate,
      ...linksArr,
      ...eduNew,
    ]);

    educationArr[i].classList.toggle("highlighted");
    sectionContact.style.background = "#CBF3F0 ";

    // eduNew.forEach((el) => el.classList.toggle("fade"));
  });
  el.addEventListener("mouseleave", () => {
    educationInfoArr[i].classList.toggle("hidden");

    // linksArr.forEach((el) => el.classList.toggle("fade"));

    // [
    //   sectionEdu,
    //   projectContainer,
    //   workHeading,
    //   contactSection,
    //   job,
    //   certificate,
    //   ...linksArr,
    // ].forEach((el) => el.classList.toggle("fade"));
    fadeOut([
      sectionEdu,
      projectContainer,
      workHeading,
      contactSection,
      job,
      certificate,
      ...linksArr,
      ...eduNew,
    ]);
    educationArr[i].classList.toggle("highlighted");
    sectionContact.style.background = "#2EC4B6 ";
    // eduNew.forEach((el) => el.classList.toggle("fade"));
  });
});
