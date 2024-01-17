const containerProjects = document.getElementById("container-projects")
const containerSkills = document.getElementById("container-skills")

const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")

const projectsJS = [{
    title: "Surveys",
    description: "Stack MERN, Redux con TypeScript.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094965/surveys_hkztfb.png",
    content: "Plataforma web para publicar y responder encuestas.",
    contentMore: "Comparte, publica e invita a personas a participar en encuentras de cualquier tipo",
    link: "https://surveys-ef4r.onrender.com"
}, {
    title: "Social Media",
    description: "Stack MERN, Redux con TypeScript.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094966/social_media_a7cugi.png",
    content: "Aplicación web de una red social.",
    contentMore: "Permite publicar archivos multimedia, seguir publicaciones de usuario e interactuar con ellos",
    link: "https://socialmedia-33gt.onrender.com"
}, {
    title: "Emails",
    description: "Stack MERN, Sockeo.io con TypeScript.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/Emails_x0hbr7.png",
    content: "Plataforma web para el recibo y envio de correos electronicos.",
    contentMore: "Envía mensajes en tiempo real a cualquier dirreción de correo que este registrado en la plataforma",
    link: "https://emails-kn32.onrender.com"
}]

const skills = [{
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473165/html_be6orf.png",
    text: "HTML"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473165/css_ds4thn.png",
    text: "CSS"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473165/Bootstrap_iqquha.png",
    text: "Bootstrap"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1704825258/tailwind_dw1gyq.png",
    text: "Tailwind"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473165/JavaScript_hslqmb.png",
    text: "JavaScript"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473166/Typescript_vnyxg4.png",
    text: "TypeScript"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473166/react_gcub8c.png",
    text: "React"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1678728288/nextjs_pmxmgc.png",
    text: "Next.js"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473166/redux_uzfihr.png",
    text: "Redux"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671473166/node_jzcjnl.png",
    text: "Node.js"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671474636/mongodb_jqr0y1.png",
    text: "MongoDB"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671474381/sql_yq1wrd.png",
    text: "SQL"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1704821999/docker_pgvdcu.png",
    text: "Docker"
}]

for (let i = 0; i < skills.length; i++) {

    var containSkill = document.createElement("div")
    containSkill.className = "contain-skill no-select"

    var imageSkill = document.createElement("img")
    imageSkill.src = skills[i].image
    imageSkill.alt = skills[i].text
    imageSkill.loading = "lazy"
    imageSkill.className = "image-skill"

    var textSkill = document.createElement("p")
    textSkill.innerHTML += skills[i].text
    textSkill.className = "text-skill"

    containSkill.appendChild(imageSkill)
    containSkill.appendChild(textSkill)

    containerSkills.appendChild(containSkill)

}

var id = 0

for (var i = 0; i < projectsJS.length; i++) {

    var linkProject = document.createElement('a')
    linkProject.className = "redirect-project"

    var containProject = document.createElement("div")
    containProject.className = "contain-project hvr-bounce-in"
    containProject.id = id

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
    titleContainProject.innerHTML += projectsJS[i].title
    titleContainProject.className = "title-project"

    var descriptionContainProject = document.createElement("p")
    descriptionContainProject.innerHTML += projectsJS[i].description
    descriptionContainProject.className = "description-project"


    var contentContainProject = document.createElement("p")
    contentContainProject.innerHTML += projectsJS[i].content
    contentContainProject.className = "content-project"

    var contentProjectMore = document.createElement("p")
    contentProjectMore.innerHTML += projectsJS[i].contentMore
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

    id++
}

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
