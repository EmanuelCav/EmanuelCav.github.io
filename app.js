const containerNavHeader = document.getElementById("container-nav-header")
const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")
const containerNavActions = document.getElementById("container-nav-actions")
const containerLanguageDropdown = document.getElementById("container-language-dropdown")

const sustitleMain = document.getElementById("subtitle-main")
const about = document.getElementById("about")
const aboutTitle = document.querySelectorAll("#about-title")
const textAbout = document.getElementById("text-about")

const containerSkills = document.getElementById("container-skills")
const skillsTitle = document.querySelectorAll("#skills-title")

const containerProjects = document.getElementById("container-projects")
const projectsTitle = document.querySelectorAll("#projects-title")

const contactTitle = document.querySelectorAll("#contact-title")

const portfolioText = document.getElementById("portfolio-text")

localStorage.setItem("lg", JSON.stringify("es"))

// TRANSLATE

function main() {

    if (JSON.parse(localStorage.getItem("lg")) === "es") {

        sustitleMain.innerText = "Programador Full Stack"
        about.innerText = `¡Hola! Bienvenido a mi portafolio. En esta página te enseñare acerca de mi, sobre mis habilidades en la programación y de mi experiencia en proyectos realizados.`

        aboutTitle.forEach((title) => {
            title.innerText = "Acerca de mí"
        })
        textAbout.innerText = `Desarrollador de software Full Stack con React, React Native, Node.js, TypeScript y Golang. Disfruto llevar a cabo proyectos de principio a fin donde fui adquiriendo experiencia y conocimientos. Estoy con voluntad de emprender y trabajar en proyectos, demostrar mis habilidades y conocimientos, aprender nuevas herramientas y llevar mi experiencia a otro nivel.`

        skillsTitle.forEach((title) => {
            title.innerText = "Habilidades"
        })
        projectsTitle.forEach((title) => {
            title.innerText = "Proyectos"
        })
        contactTitle.forEach((title) => {
            title.innerText = "Contacto"
        })

        portfolioText.innerText = "Portafio de Emanuel Cavallin"


        return
    }

    sustitleMain.innerText = "Full Stack Programmer"
    about.innerText = `Welcome to my portfolio. On this page I will teach you about me, about my programming skills and my experience in completed projects.`

    aboutTitle.forEach((title) => {
        title.innerText = "About me"
    })
    textAbout.innerText = `Full Stack software developer with React, React Native, Node.js, TypeScript and Golang. I enjoy carrying out projects from start to finish where I gained experience and knowledge. I am willing to undertake and work on projects, demonstrate my skills and knowledge, learn new tools and take my experience to another level.`

    skillsTitle.forEach((title) => {
        title.innerText = "Skills"
    })
    projectsTitle.forEach((title) => {
        title.innerText = "Projects"
    })
    contactTitle.forEach((title) => {
        title.innerText = "Contact"
    })

    portfolioText.innerText = "Portfolio of Emanuel Cavallin"
}

main()

// HEADER

const header = [{
    es: "Acerca de mí",
    en: "About",
    href: "#about"
}, {
    es: "Habilidades",
    en: "Skills",
    href: "#skills"
}, {
    es: "Proyectos",
    en: "Projects",
    href: "#projects"
}, {
    es: "Contacto",
    en: "Contact",
    href: "#contact"
}]

var isDrowDown = false

headerIcon.addEventListener("click", () => {
    if (isDrowDown) {
        isDrowDown = !isDrowDown
        containerDropDown.style.display = "none"
    } else {
        isDrowDown = !isDrowDown
        containerDropDown.style.display = "block"
    }
})


function showHeader() {

    for (let i = 0; i < header.length; i++) {

        const redirectHeader = document.createElement("a")
        redirectHeader.href = header[i].href
        redirectHeader.className = "redirect-header"

        const redirectDropdown = document.createElement("a")
        redirectDropdown.href = header[i].href
        redirectDropdown.className = "redirect-header"

        const textHeader = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            textHeader.innerHTML = header[i].es
        } else {
            textHeader.innerHTML = header[i].en
        }
        textHeader.className = "text-header no-select"

        const textDropdown = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            textDropdown.innerHTML = header[i].es
        } else {
            textDropdown.innerHTML = header[i].en
        }
        textDropdown.className = "text-drowdown no-select"

        redirectHeader.appendChild(textHeader)
        redirectDropdown.appendChild(textDropdown)

        containerNavHeader.appendChild(redirectHeader)
        containerDropDown.appendChild(redirectDropdown)

    }

}

const setLanguage = () => {
    const language = document.createElement("p")
    language.id = "language_item"
    language.className = "icon-language"
    if (JSON.parse(localStorage.getItem("lg")) === "es") {
        language.innerHTML = "es🠻"
    } else {
        language.innerHTML = "en🠻"
    }
    containerNavActions.prepend(language)
}

showHeader()
setLanguage()

const languageItem = document.getElementById("language_item")

languageItem.addEventListener("click", () => {

    if (containerLanguageDropdown.style.display === "block") {
        containerLanguageDropdown.style.display = "none"
        containerLanguageDropdown.children[0].remove()
        return
    }

    containerLanguageDropdown.style.display = "block"
    const anotherLanguage = document.createElement("p")
    anotherLanguage.className = "text-language-header"
    anotherLanguage.innerText = JSON.parse(localStorage.getItem("lg")) === "es" ? "en" : "es"
    containerLanguageDropdown.appendChild(anotherLanguage)


})

containerLanguageDropdown.addEventListener("click", () => {
    containerLanguageDropdown.style.display = "none"
    containerLanguageDropdown.children[0].remove()
    translate()
})

// SKILLS

const skills = [{
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957758/portfolio/html_bo4uw4.png",
    text: "HTML"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957753/portfolio/css_hszlmb.png",
    text: "CSS"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957753/portfolio/Bootstrap_fd6p3e.png",
    text: "Bootstrap"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957793/portfolio/tailwind_ju831c.png",
    text: "Tailwind"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1709479982/blog/material_ui_ki6cwg.png",
    text: "Material UI"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1708370129/blog/go_fbovrh.png",
    text: "Go"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1708368255/blog/python_xkb3jq.png",
    text: "Python"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957794/portfolio/Typescript_akfrax.png",
    text: "TypeScript"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957791/portfolio/react_ob477k.png",
    text: "React"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957762/portfolio/nextjs_nsyla2.png",
    text: "Next.js"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957791/portfolio/redux_fpowwg.png",
    text: "Redux"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957762/portfolio/node_vtvwo8.png",
    text: "Node.js"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957759/portfolio/mongodb_diarfg.png",
    text: "MongoDB"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957791/portfolio/sql_ztqbw0.png",
    text: "SQL"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957752/portfolio/docker_slsngj.png",
    text: "Docker"
}]


function showSkills() {

    for (let i = 0; i < skills.length; i++) {

        var containSkill = document.createElement("div")
        containSkill.className = "contain-skill no-select"

        var imageSkill = document.createElement("img")
        imageSkill.src = skills[i].image
        imageSkill.alt = skills[i].text
        imageSkill.loading = "lazy"
        imageSkill.className = "image-skill"

        var textSkill = document.createElement("p")
        textSkill.innerHTML = skills[i].text
        textSkill.className = "text-skill"

        containSkill.appendChild(imageSkill)
        containSkill.appendChild(textSkill)

        containerSkills.appendChild(containSkill)

    }

}

showSkills()

// PROJECTS

const projectsJS = [{
    title: "Mapa de Argentina - Quiz",
    description: "React Native, TypeScript & Context",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1714063248/portfolio/logo_2_luwfnx.png",
    link: "https://github.com/EmanuelCav/argentina_geography",
    es: {
        content: "Aplicación móvil educativa de la división política y geográfica de Argentina",
        contentMore: "Contiene todo tipo de información de geografia argentina con el fin de estudiar y aprender"
    },
    en: {
        content: "Educational mobile application of the political and geographic division of Argentina",
        contentMore: "Contains all kind of information about argentine geography in order to study and learn."
    }
}, {
    title: "CupCraft",
    description: "React, Redux, TypeScript, Node.js & MongoDB",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1716217015/portfolio/logo_tjwhut.png",
    link: "https://github.com/EmanuelCav/tournament_generator",
    es: {
        content: "Plataforma web y móvil para la gestión y participación de eventos deportivos",
        contentMore: "Permite la creación de torneos de diferentes formatos como todos contra todos, fase de grupos, formato suizo y eliminación directa"
    },
    en: {
        content: "Mobile and web platform for the management and participation in sporting events.",
        contentMore: "Allows the creation of tournaments of different formats such as all against all, group stage, Swiss format and direct elimination"
    }
}, {
    title: "Surfrage",
    description: "Stack PERN, Material UI Redux, TypeScript & Prisma",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png",
    link: "https://github.com/EmanuelCav/Surveys",
    es: {
        content: "Aplicación web destinada a la creación y participación de encuestas",
        contentMore: "Comparte, publica e invita a personas a participar en encuestras de cualquier tipo",
    },
    en: {
        content: "Web application for the creation and participation in surveys",
        contentMore: "Share, publish and invite people to participate in meetings of any type",
    }
},
// {
//     title: "Graspper",
//     description: "Next.js, Tailwind CSS, Zustand, TypeScript, Go, Fiber & MongoDB",
//     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1709490527/portfolio/alojunior_lexyoe.png",
//     link: "https://github.com/EmanuelCav/alojuniordev",
//     es: {
//         content: "Plataforma web orientada a la creación y gestión de cursos y blogs educativos",
//         contentMore: "Permite crear y formar parte de las tendencias educativas para fomentar una comunidad de aprendizaje activa",
//     },
//     en: {
//         content: "Web platform oriented to the creation and management of educational courses and blogs",
//         contentMore: "Create and be part of educational trends to foster an active learning community",
//     }
// }, 
{
    title: "Argentina Quiz",
    description: "React Native, Redux, TypeScript, Node.js, MongoDB",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1706790450/favicon_tvx4ge.png",
    link: "https://github.com/EmanuelCav/Argentina-Geo",
    es: {
        content: "Aplicación móvil de un juego de preguntas y respuestas de Argentina",
        contentMore: "Juego educativo y de entretenimiento de un Trivia donde vas a encontrar todo tipo de preguntas acerca del país"
    },
    en: {
        content: "Mobile application of a question and answer game from Argentina",
        contentMore: "Argentina Quiz is an educational and entertaining Trivia game where you will find all kinds of questions about the country"
    }
}]

function showProjects() {

    for (var i = 0; i < projectsJS.length; i++) {

        var linkProject = document.createElement('a')
        linkProject.className = "redirect-project"

        var containProject = document.createElement("div")
        containProject.className = "contain-project hvr-bounce-in"

        var containImageProject = document.createElement("div")
        containImageProject.className = "contain-image-project"

        var containMedia = document.createElement("div")
        containMedia.className = "contain-media"

        var imageContainProject = document.createElement("img")
        imageContainProject.src = projectsJS[i].image
        imageContainProject.alt = projectsJS[i].title
        imageContainProject.loading = "lazy"
        imageContainProject.className = "image-project"

        var titleContainProject = document.createElement("h1")
        titleContainProject.innerHTML = projectsJS[i].title
        titleContainProject.className = "title-project"

        var descriptionContainProject = document.createElement("p")
        descriptionContainProject.innerHTML = projectsJS[i].description
        descriptionContainProject.className = "description-project"


        var contentContainProject = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            contentContainProject.innerHTML = projectsJS[i].es.content
        } else {
            contentContainProject.innerHTML = projectsJS[i].en.content
        }
        contentContainProject.className = "content-project"

        var contentProjectMore = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            contentProjectMore.innerHTML = projectsJS[i].es.contentMore
        } else {
            contentProjectMore.innerHTML = projectsJS[i].en.contentMore
        }
        contentProjectMore.className = "content-project-more"

        containImageProject.appendChild(imageContainProject)

        containMedia.appendChild(titleContainProject)
        containMedia.appendChild(descriptionContainProject)
        containMedia.appendChild(contentContainProject)
        containMedia.appendChild(contentProjectMore)

        containProject.appendChild(containImageProject)
        containProject.appendChild(containMedia)

        linkProject.setAttribute('href', projectsJS[i].link)

        linkProject.appendChild(containProject)
        containerProjects.appendChild(linkProject)
    }

}

showProjects()

// TRANSLATE HEADER

function translate() {

    let currectLanguage

    if (JSON.parse(localStorage.getItem("lg")) === "es") {
        currectLanguage = JSON.stringify("en")
        localStorage.setItem("lg", currectLanguage)
    } else {
        currectLanguage = JSON.stringify("es")
        localStorage.setItem("lg", currectLanguage)
    }

    containerProjects.replaceChildren()
    containerSkills.replaceChildren()
    containerDropDown.replaceChildren()
    containerNavHeader.replaceChildren()
    containerNavActions.children[0].innerHTML = `${JSON.parse(currectLanguage)}🠻`

    sustitleMain.innerText = ""
    about.innerText = ""

    aboutTitle.forEach((title) => {
        title.innerText = ""
    })
    textAbout.innerText = ""

    skillsTitle.forEach((title) => {
        title.innerText = ""
    })
    projectsTitle.forEach((title) => {
        title.innerText = ""
    })
    contactTitle.forEach((title) => {
        title.innerText = ""
    })

    portfolioText.innerText = ""

    main()
    showHeader()
    showSkills()
    showProjects()

}