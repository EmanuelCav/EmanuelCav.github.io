const containerProjects = document.getElementById("container-projects")

const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")

var projectsJS = [{
    title: "Surveys",
    description: "Stack MERN y Redux.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094965/surveys_hkztfb.png",
    content: "Plataforma web para publicar y responder encuestas.",
    link: "https://surveys-ef4r.onrender.com"
}, {
    title: "Social Media",
    description: "Stack MERN, Redux.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094966/social_media_a7cugi.png",
    content: "Aplicación web de una red social.",
    link: "https://socialmedia-33gt.onrender.com"
}, {
    title: "eCommerce Web",
    description: "Stack MERN, Redux y Bootstrap.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/eCommerce_mog4sq.png",
    content: "Pagina web de comercio electrónico en linea.",
    link: "https://github.com/EmanuelCav/eCommerce-Web"
}, {
    title: "Vlogs",
    description: "Stack MERN, Redux con Typescript.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/vlogs_no6jpp.png",
    content: "Plataforma web para compatir y observar vlogs.",
    link: "https://github.com/EmanuelCav/Vlogs"
}, {
    title: "Critics",
    description: "ReactJs, Go, Fiber y MongoDB.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1677073032/critics_exvlur.png",
    content: "Aplicación web para compartir criticas acerca de un tema en específico.",
    link: "https://github.com/EmanuelCav/Critics"
}, {
    title: "Polls",
    description: "Stack MERN, Redux.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/polls_xawewm.png",
    content: "Aplicación web para la creación y particiáción de encuestas.",
    link: "https://github.com/EmanuelCav/Poll"
}, {
    title: "Emails",
    description: "Stack MERN y Typescript.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/Emails_x0hbr7.png",
    content: "Plataforma web para el recibo y envio de correos electronicos.",
    link: "https://github.com/EmanuelCav/Emails"
}, {
    title: "Quiz Game",
    description: "Stack MERN.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/quiz_spzclj.png",
    content: "Aplicación web para la creación y participación en juegos de quiz.",
    link: "https://github.com/EmanuelCav/Quiz-Game"
}, {
    title: "Anecdotes",
    description: "Stack PERN Y Redux.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/anecdotes_wqshbw.png",
    content: "Pagina web para compartir anecdotas.",
    link: "https://github.com/EmanuelCav/Anecdotes"
}
    , {
    title: "Posts",
    description: "Angular, Mysql y Bootstrap.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/Posts_trglhh.png",
    content: "Pagina web para la subida de publicaciones.",
    link: "https://github.com/EmanuelCav/Posts"
},
    // {
    //     title: "Contacts",
    //     description: "Stack PEAN.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/contacts_glvfsk.png",
    //     content: "Plataforma web para la subida de contactos.",
    //     link: "https://github.com/EmanuelCav/Contacts"
    // }, {
    //     title: "Notes",
    //     description: "Angular, Go, Gorm y Postgres.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1677073122/notes_exofgs.png",
    //     content: "Aplicacion web para la creación de notas.",
    //     link: "https://github.com/EmanuelCav/Notes"
    // }, {
    //     title: "World Cup 2022 prediction",
    //     description: "Javascript, HTML y CSS.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/World_rkgimr.png",
    //     content: "Plataforma web para simular una predicción del Mundial de Futbol 2022.",
    //     link: "https://github.com/EmanuelCav/World-Cup-2022"
    // }, {
    //     title: "Ta te ti",
    //     description: "Javascript, HTML y CSS.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/Tateti_ug6xwr.png",
    //     content: "Pagina web para jugar al ta te ti.",
    //     link: "https://github.com/EmanuelCav/Tic-Tac-Toe"
    // }, {
    //     title: "Papelarios",
    //     description: "Javascript, HTML y CSS.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/papelarios_ryeizm.png",
    //     content: "Pagina web de comercio electronico.",
    //     link: "https://github.com/EmanuelCav/Tienda-Papelarios"
    // }
]

var id = 0

for (var i = 0; i < projectsJS.length; i++) {

    var linkProject = document.createElement('a')
    linkProject.className = "redirect-project"

    var containProject = document.createElement("div")
    containProject.className = "contain-project"
    containProject.id = id

    var imageContainProject = document.createElement("img")
    imageContainProject.src = projectsJS[i].image
    imageContainProject.alt = projectsJS[i].title
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

    containProject.appendChild(imageContainProject)
    containProject.appendChild(titleContainProject)
    containProject.appendChild(descriptionContainProject)
    containProject.appendChild(contentContainProject)

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
