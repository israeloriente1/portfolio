// page content
const headSubtitle = document.getElementById("headerSubtitle");
const navProjects = document.querySelectorAll("a.projects-nav");
const navContact = document.querySelectorAll("a.contact-nav");
const aboutTitle = document.querySelectorAll("a.about-title, h3.about-title");
const skillsTitle = document.querySelectorAll("h3.skills-title, a.skills-title");
const designTitle = document.getElementById("designTitle");
const seoTitle = document.getElementById("seoTitle");
const teamTitle = document.getElementById("teamTitle");
const resultsTitle = document.getElementById("resultsTitle");
const technologiesTitle = document.getElementById("tecnologiesTitleContent");
const projectsTitle = document.getElementById("projects-title-content");
const prototypeSubtitle = document.querySelectorAll("span.prototype-subtitle");
const accessButton = document.querySelectorAll("span.access-button");
const tagTitle = document.getElementById("tag-title");
const contactTitle = document.getElementById("contact-title-content");
const digitalResume = document.getElementById("digital-resume");

const aboutDescription = document.getElementById("aboutDescription");
const skillsDescription = document.getElementById("skills-description");
const designDescription = document.getElementById("designDescription");
const seoDescription = document.getElementById("seoDescription");
const teamDescription = document.getElementById("teamDescription");
const resultsDescription = document.getElementById("resultsDescription");
const projectsDescription = document.getElementById("projects-title-description");
const aspanDescription = document.getElementById("aspan-description");
const tagDescription = document.getElementById("tag-description");
const shortlyDescription = document.getElementById("shortly-description");
const devtechDescription = document.getElementById("devtech-description");

const pageContent = {
    "portuguese": {
        "headSubtitle": "PORTFÓLIO",
        "navProjects": "Projetos",
        "navContact": "Contato",
        "aboutTitle": "Sobre",
        "aboutDescription":
            "Desenvolvedor Web com experiência e habilidades nas principais linguagens front e back end como, PHP, MySQL, JS, Wordpress entre outros, desenvolvo soluções web desde a criação dos mapas das regras de negócio, design do site com diferentes níveis de fidelidade e de modo responsivo, até o desenvolvimento web gerenciados por metodologias ágeis.",
        "skillsTitle": "Habilidades",
        "skillsDescription": "Conheça algumas das minhas habilidades usadas diariamente.",
        "designTitle": "Prototipação",
        "designDescription": 
            "Criação de protótipos de sites e apps pelo Figma, desde a criação do seu fluxo de navegação, regras de negócio através do FigJam, experiência de usuário, até o design geral responsivo do projeto com diferentes níveis de fidelidade.",
        "seoTitle": "Boas práticas de SEO",
        "seoDescription":
            "Implementação de boas práticas de SEO como conteúdos descritivos, assets com texto alternativo e utilização do HTML de forma semântica ao conteúdo do projeto.",
        "teamTitle": "Trabalho em equipe",
        "teamDescription":
            "Um bom nível de comunicação e interação com a equipe, desde participações em reuniões e planejamentos, até a colaboração no desenvolvimento do projeto através de metodologias ágeis.",
        "resultsTitle": "Resultados",
        "resultsDescription":
            "Utilização de tecnologias vinculado ao tipo de projeto, organização inteligente do conteúdo trazendo uma melhor visibilidade e destaque ao projeto, facilitando a captação e conversão de novos usuários.",
        "technologiesTitle": "Tecnologias <br> <span class='dashed-letter'>Que mais utilizo</span>",
        "projectsTitle": 'Projetos <span class="dashed-letter-light text-dark">Desenvolvidos</span>',
        "projectsDescription": "Conheça alguns dos projetos desenvolvidos durante a minha jornada.",
        "prototypeSubtitle": "Protótipo",
        "aspanDescription": "A Aspan tem como principal objetivo atender a população idosa de baixa renda da cidade de João Pessoa, e tem caráter filantrópico, organizacional, assistencial e promocional, sem qualquer caráter político ou partidário.",
        "accessButton": "Acessar",
        "tagTitle": "Tag Solução Digital",
        "tagDescription":
            "A Startup Tag tem como proposta desenvolver e solucionar projetos de forma digital, desde sites profissionais, gestão de redes sociais, assessorias em estratégias de vendas e atendimentos, estratégias de tráfego pago, fotografia, até filmes coorporativos e eventos.",
        "shortlyDescription": 
            "A Shortly foi um projeto/desafio do Front end mentor, onde o projeto tem como objetivo ser um site que encurte links muito grande através de uma API, no qual implementei no projeto através do JavaScript através de funções assíncronas e manipulação DOM.",
        "devtechDescription":
            "O projeto Devtech tem como proposta ser uma landing page de uma plataforma de impulsionamento digital, com gestão de marketing e gerenciamento de tráfego pago, nesse projeto foi utilizado as principais linguagens front end como HTML e CSS.",
        "contactTitle": 'Entre em <span class="dashed-letter">contato</span>',
        "digitalResume": "Download CV"
    },

    "english": {
        "headSubtitle" : "PORTFOLIO",
        "navProjects": "Projects",
        "navContact": "Contact",
        "aboutTitle": "About",
        "aboutDescription":
            "Web developer with experience and skills in the main front and back end languages such as PHP, MySQL, JS, Wordpress, among others, I develop web solutions from the creation of business rules maps, website design with different levels of fidelity and in a responsive way , to web development managed by agile methodologies.",
        "skillsTitle": "Skills",
        "skillsDescription": "Meet some of my daily used skills.",
        "designTitle": "Prototyping",
        "designDescription":
            "Creation of website and app prototypes by Figma, from the creation of your navigation flow, business rules through FigJam, user experience, to the overall responsive design of the project with different levels of fidelity.",
        "seoTitle": "Good SEO Practices",
        "seoDescription":
            "Implementation of good SEO practices such as descriptive content, assets with alternative text and use of HTML in a semantic way to the project's content.",
        "teamTitle": "Team work",
        "teamDescription":
            "A good level of communication and interaction with the team, from participation in meetings and planning, to collaboration in the development of the project through agile methodologies.",
        "resultsTitle": "Results",
        "resultsDescription":
            "Use of technologies linked to the type of project, intelligent organization of content bringing better visibility and emphasis to the project, facilitating the capture and conversion of new users.",
        "technologiesTitle": "Technologies <br> <span class='dashed-letter'>I use most</span>",
        "projectsTitle": 'Projects <span class="dashed-letter-light text-dark">Developed</span>',
        "projectsDescription": "Meet some of the projects developed during my journey.",
        "prototypeSubtitle": "Prototype",
        "aspanDescription": "Aspan's main objective is to serve the low-income elderly population in the city of João Pessoa, and has a philanthropic, organizational, assistance and promotional character, without any political or partisan nature.",
        "accessButton": "Visit",
        "tagTitle": "Tag Digital Solution",
        "tagDescription":
            "Startup Tag's proposal is to develop and solve projects digitally, from professional websites, social media management, advice on sales strategies and customer service, paid traffic strategies, photography, to corporate films and events.",
        "shortlyDescription": 
            "Shortly was a Front end mentor project/challenge, where the project aims to be a website that shortens very large links through an API, which I implemented in the project through JavaScript through asynchronous functions and DOM manipulation.",
        "devtechDescription":
            "The Devtech project proposes to be a landing page of a digital boosting platform, with marketing management and paid traffic management, in this project the main front end languages such as HTML and CSS were used.",
        "contactTitle": "Let's talk <span class='dashed-letter'>business</span>",
        "digitalResume": "Digital Resume"
    }
}

var currentLanguage = "portuguese";

// translate buttons
const translateButton = document.querySelectorAll("input.translate-check");

translateButton.forEach(element => {
    element.addEventListener("change", translateCheck);
})

function browserCheck() {
    // it will check the browser and translate the page if necessary
    if (navigator.language != "pt-BR") {
        // set the same button.check value to all translate button.
        translateButton.forEach(button => {
            button.checked = true;
        });

        digitalResume.href = "./assets/Israel Oriente Resume.pdf";
        currentLanguage = "english";
        translate("english");
    }
}

function translateCheck() {
    // it will check the translate button and call the 'translate()'
    currentLanguage = currentLanguage == "portuguese" ? "english" : "portuguese";
    digitalResume.href = 
        currentLanguage == "english" ? "./assets/Israel Oriente Resume.pdf" : "./assets/Currículo Israel Oriente.pdf";

    // set the same button.check value to all translate button.
    translateButton.forEach(element => {
        element.checked = currentLanguage == "english" ? true : false;
    });   

    translate(currentLanguage);
}

function translate(lang = "english") {
    headSubtitle.innerHTML = pageContent[lang].headSubtitle;

    navProjects.forEach(element => {element.innerHTML = pageContent[lang].navProjects});
    navContact.forEach(element => {element.innerHTML = pageContent[lang].navContact});
    aboutTitle.forEach(element => {element.innerHTML = pageContent[lang].aboutTitle});
    skillsTitle.forEach(element => {element.innerHTML = pageContent[lang].skillsTitle});
    prototypeSubtitle.forEach(element => {element.innerHTML = pageContent[lang].prototypeSubtitle});
    accessButton.forEach(element => {element.innerHTML = pageContent[lang].accessButton});

    designTitle.innerHTML = pageContent[lang].designTitle;
    seoTitle.innerHTML = pageContent[lang].seoTitle;
    teamTitle.innerHTML = pageContent[lang].teamTitle;
    resultsTitle.innerHTML = pageContent[lang].resultsTitle;
    technologiesTitle.innerHTML = pageContent[lang].technologiesTitle;
    projectsTitle.innerHTML = pageContent[lang].projectsTitle;
    tagTitle.innerHTML = pageContent[lang].tagTitle;
    contactTitle.innerHTML = pageContent[lang].contactTitle;
    digitalResume.innerHTML = pageContent[lang].digitalResume;

    aboutDescription.innerHTML = pageContent[lang].aboutDescription;
    skillsDescription.innerHTML = pageContent[lang].skillsDescription;
    designDescription.innerHTML = pageContent[lang].designDescription;
    seoDescription.innerHTML = pageContent[lang].seoDescription;
    teamDescription.innerHTML = pageContent[lang].teamDescription;
    resultsDescription.innerHTML = pageContent[lang].resultsDescription;
    projectsDescription.innerHTML = pageContent[lang].projectsDescription;
    aspanDescription.innerHTML = pageContent[lang].aspanDescription;
    tagDescription.innerHTML = pageContent[lang].tagDescription;
    shortlyDescription.innerHTML = pageContent[lang].shortlyDescription;
    devtechDescription.innerHTML = pageContent[lang].devtechDescription;
}