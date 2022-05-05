//let currentHash;

let selector_ru = document.getElementById("ruL");
let selector_eng = document.getElementById("engL");

let header_menu = document.getElementsByClassName("menu")[0];

let scrBtn = document.getElementById("scroller");

let text;

fetch("http://denvolk.github.io/test-site/json/text.json")
    .then(response => response.json())
    .then(data => text = data);

window.onload = function () {
    if (!window.location.hash) {
        window.location.hash = "#eng";
    }
    /*else    {
        if (currentHash)    {
            window.location.hash = currentHash;
        }
    }*/

    if (window.location.hash === "eng") {
        selector_eng.style.color = "#070707";
        selector_ru.style.color = "#828282";
    }
    else if (window.location.hash === "ru") {
        selector_eng.style.color = "#828282";
        selector_ru.style.color = "#070707";
    }
}

function changeLanguage(lang) {
    if (window.location.hash) {
        window.location.hash = lang;
    }

    if (window.location.hash === "#ru") {
        setTextToRu();
        /*document.getElementById("span-menu-home").innerHTML = language.ru.homeVar;
        document.getElementById("span-menu-about").innerHTML = language.ru.aboutmeVar;
        document.getElementById("span-menu-skills").innerHTML = language.ru.skillsVar;
        document.getElementById("span-menu-portfolio").innerHTML = language.ru.portfolioVar;
        document.getElementById("span-menu-contacts").innerHTML = language.ru.contactsVar;
        document.getElementById("span-name").innerHTML = language.ru.nameVar;
        document.getElementById("span-info").innerHTML = language.ru.infoVar;
        document.getElementById("span-about").innerHTML = language.ru.aboutmeVar;
        document.getElementById("span-about-p1").innerHTML = language.ru.aboutp1Var;
        document.getElementById("span-about-p2").innerHTML = language.ru.aboutp2Var;
        document.getElementById("span-about-p3").innerHTML = language.ru.aboutp3Var;
        document.getElementById("span-skills").innerHTML = language.ru.skillsVar;
        document.getElementById("span-skills-p").innerHTML = language.ru.skillsPVar;
        document.getElementById("span-portfolio").innerHTML = language.ru.portfolioVar;
        document.getElementById("span-contacts").innerHTML = language.ru.contactsVar;
        document.getElementById("span-contacts-p").innerHTML = language.ru.contactsPVar;
        document.getElementById("span-button").innerHTML = language.ru.buttonVar;
        document.getElementById("span-footer").innerHTML = language.ru.footerVar;*/
        document.getElementById("ruL").style.color = "#070707";
        document.getElementById("engL").style.color = "#828282";
        document.documentElement.setAttribute("lang", "ru");
    } else if (window.location.hash === "#eng") {
        setTextToEng();
        /*document.getElementById("span-menu-home").innerHTML = language.eng.homeVar;
        document.getElementById("span-menu-about").innerHTML = language.eng.aboutmeVar;
        document.getElementById("span-menu-skills").innerHTML = language.eng.skillsVar;
        document.getElementById("span-menu-portfolio").innerHTML = language.eng.portfolioVar;
        document.getElementById("span-menu-contacts").innerHTML = language.eng.contactsVar;
        document.getElementById("span-name").innerHTML = language.eng.nameVar;
        document.getElementById("span-info").innerHTML = language.eng.infoVar;
        document.getElementById("span-about").innerHTML = language.eng.aboutmeVar;
        document.getElementById("span-about-p1").innerHTML = language.eng.aboutp1Var;
        document.getElementById("span-about-p2").innerHTML = language.eng.aboutp2Var;
        document.getElementById("span-about-p3").innerHTML = language.eng.aboutp3Var;
        document.getElementById("span-skills").innerHTML = language.eng.skillsVar;
        document.getElementById("span-skills-p").innerHTML = language.eng.skillsPVar;
        document.getElementById("span-portfolio").innerHTML = language.eng.portfolioVar;
        document.getElementById("span-contacts").innerHTML = language.eng.contactsVar;
        document.getElementById("span-contacts-p").innerHTML = language.eng.contactsPVar;
        document.getElementById("span-button").innerHTML = language.eng.buttonVar;
        document.getElementById("span-footer").innerHTML = language.eng.footerVar;*/
        document.getElementById("ruL").style.color = "#828282";
        document.getElementById("engL").style.color = "#070707";
        document.documentElement.setAttribute("lang", "en");
    }
}

function setTextToRu()  {
    document.getElementById("span-menu-home").textContent = text["ru"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["ru"]["aboutmeVar"];
    document.getElementById("span-menu-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["ru"]["portfolioVar"];
    document.getElementById("span-menu-contacts").textContent = text["ru"]["contactsVar"];
    document.getElementById("span-first-name").textContent = text["ru"]["firstnameVar"];
    document.getElementById("span-last-name").textContent = text["ru"]["lastnameVar"];
    document.getElementById("span-info-first").textContent = text["ru"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["ru"]["infoVarSecond"];
    document.getElementById("span-about").textContent = text["ru"]["aboutmeVar"];
    document.getElementById("span-about-p1-first").textContent = text["ru"]["aboutp1VarFirst"];
    document.getElementById("span-about-p1-second").textContent = text["ru"]["aboutp1VarSecond"];
    document.getElementById("span-about-p2-first").textContent = text["ru"]["aboutp2VarFirst"];
    document.getElementById("span-about-p2-second").textContent = text["ru"]["aboutp2VarSecond"];
    document.getElementById("span-about-p3-first").textContent = text["ru"]["aboutp3VarFirst"];
    document.getElementById("span-about-p3-second").textContent = text["ru"]["aboutp3VarSecond"];
    document.getElementById("span-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["ru"]["skillsPVar"];
    document.getElementById("span-portfolio").textContent = text["ru"]["portfolioVar"];
    document.getElementById("span-contacts").textContent = text["ru"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["ru"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["ru"]["contactsPVarSecond"];
    document.getElementById("span-button").textContent = text["ru"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["ru"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["ru"]["footerVarSecond"];
}

function setTextToEng() {
    document.getElementById("span-menu-home").textContent = text["eng"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["eng"]["aboutmeVar"];
    document.getElementById("span-menu-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["eng"]["portfolioVar"];
    document.getElementById("span-menu-contacts").textContent = text["eng"]["contactsVar"];
    document.getElementById("span-first-name").textContent = text["eng"]["firstnameVar"];
    document.getElementById("span-last-name").textContent = text["eng"]["lastnameVar"];
    document.getElementById("span-info-first").textContent = text["eng"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["eng"]["infoVarSecond"];
    document.getElementById("span-about").textContent = text["eng"]["aboutmeVar"];
    document.getElementById("span-about-p1-first").textContent = text["eng"]["aboutp1VarFirst"];
    document.getElementById("span-about-p1-second").textContent = text["eng"]["aboutp1VarSecond"];
    document.getElementById("span-about-p2-first").textContent = text["eng"]["aboutp2VarFirst"];
    document.getElementById("span-about-p2-second").textContent = text["eng"]["aboutp2VarSecond"];
    document.getElementById("span-about-p3-first").textContent = text["eng"]["aboutp3VarFirst"];
    document.getElementById("span-about-p3-second").textContent = text["eng"]["aboutp3VarSecond"];
    document.getElementById("span-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["eng"]["skillsPVar"];
    document.getElementById("span-portfolio").textContent = text["eng"]["portfolioVar"];
    document.getElementById("span-contacts").textContent = text["eng"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["eng"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["eng"]["contactsPVarSecond"];
    document.getElementById("span-button").textContent = text["eng"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["eng"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["eng"]["footerVarSecond"];
}

/*const language = {
    eng: {
        homeVar: "Home",
        nameVar: "Denis<br>Volkhin",
        infoVar: "Intern Frontend Developer<br>23 years old, Saint-Petersburg",
        aboutmeVar: "About me",
        aboutp1Var: "Hi, I'm Denis – Intern Frontend Developer from Saint-Petersburg.<br>I'm interested in frontend development and everything connected with it.",
        aboutp2Var: "I'm studying at courses \"Program engineering\"<br>in IT-Academy.",
        aboutp3Var: "Ready to implement excellent projects<br>with wonderful people.",
        skillsVar: "Skills",
        skillsPVar: "I work in such programs as",
        portfolioVar: "Portfolio",
        contactsVar: "Contacts",
        contactsPVar: "Want to know more or just chat?<br>You are welcome!",
        buttonVar: "Send message",
        footerVar: "Add me on<br>VK, Discord, GitHub"
    },
    ru: {
        homeVar: "Домашняя",
        nameVar: "Денис<br>Вольхин",
        infoVar: "Фронтенд разработчик стажёр<br>23 года, Санкт-Петербург",
        aboutmeVar: "Обо мне",
        aboutp1Var: "Привет, меня зовут Денис и я Фронтенд Разработчик Стажёр из Санкт-Петербурга.<br>Мне нравится фронтенд разработка и всё что с ней связано.",
        aboutp2Var: "Я учусь в вузе на специальности \"Программная инженерия\"",
        aboutp3Var: "Готов реализовывать отличные проекты<br>с замечательными людьми",
        skillsVar: "Навыки",
        skillsPVar: "Я умею работать с различными программами, например:",
        portfolioVar: "Портфолио",
        contactsVar: "Контакты",
        contactsPVar: "Хотите узнать больше или просто попереписываться?<br>Я вам всегда рад!",
        buttonVar: "Написать мне",
        footerVar: "Добавляйте меня в<br>VK, Discord, GitHub"
    }
};*/

function scrollTo(point) {
    if (point) {
        if (point === "home") {
            //document.querySelector(".header").scrollIntoView({behavior: "smooth"});
            //document.getElementsByClassName("header")[0].scrollIntoView({behavior: "smooth"});
            //document.getElementById("span-menu-home").scrollIntoView({behavior: "smooth"});
            //window.scrollTo({top: 0, behavior: "smooth"});
            /*document.getElementsByClassName("header")[0].style.position = "static";
            document.querySelector(".header").scrollIntoView({behavior: "smooth"});
            document.getElementsByClassName("header")[0].style.position = "sticky";*/
            scrollToTop();
        }
        else if (point === "about") {
            document.querySelector(".about").scrollIntoView({behavior: "smooth"});
        }
        else if (point === "skills") {
            document.querySelector(".skills").scrollIntoView({behavior: "smooth"});
        }
        else if (point === "portfolio") {
            document.querySelector(".portfolio").scrollIntoView({behavior: "smooth"});
        }
        else if (point === "contacts") {
            document.querySelector(".contacts").scrollIntoView({behavior: "smooth"});
        }
    }
}

window.onscroll = function ()   {scrVisibility()};

function scrVisibility()  {
    if (document.body.scrollTop > 20)    {
        scrBtn.style.display = "block";
        //document.getElementsByClassName("header")[0].style.position = "sticky";
    }
    else    {
        scrBtn.style.display = "none";
        //document.getElementsByClassName("header")[0].style.position = "static";
    }
}

function scrollToTop()  {
    //document.querySelector(".header").scrollIntoView({behavior: "smooth"});
    document.getElementsByClassName("header")[0].style.position = "static";
    document.querySelector(".header").scrollIntoView({behavior: "smooth"});
    document.getElementsByClassName("header")[0].style.position = "sticky";
    //document.querySelector(".header").scrollTo({top: 0, behavior: "smooth"});
}