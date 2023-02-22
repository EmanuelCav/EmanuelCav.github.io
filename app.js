const leftProject = document.getElementById("left-project")
const rightProject = document.getElementById("right-project")
const leftProjectPy = document.getElementById("left-project-py")
const rightProjectPy = document.getElementById("right-project-py")

const containerProjects = document.getElementById("container-projects")
const containerProjectsPy = document.getElementById("container-projects-py")

const containerGetProject = document.getElementById("container-getproject")
const containGetproject = document.getElementById("contain-getproject")
const containerInfoGetProject = document.getElementById("container-info-getproject")
const close = document.getElementById("close")

const formContact = document.getElementById("form-contact")
const closeMessage = document.getElementById("close-message")

const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")

var projectsJS = [{
    title: "eCommerce Web",
    description: "Stack MERN, Redux y Bootstrap.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/eCommerce_mog4sq.png",
    content: "Pagina web de comercio electrónico en linea.",
    link: "https://github.com/EmanuelCav/eCommerce-Web"
}, {
    title: "Vlogs",
    description: "Stack MERN, Redux y Typescript.",
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
}, {
    title: "Posts",
    description: "Angular, Mysql y Bootstrap.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/Posts_trglhh.png",
    content: "Pagina web para la subida de publicaciones.",
    link: "https://github.com/EmanuelCav/Posts"
}, {
    title: "Contacts",
    description: "Stack PEAN.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/contacts_glvfsk.png",
    content: "Plataforma web para la subida de contactos.",
    link: "https://github.com/EmanuelCav/Contacts"
}, {
    title: "Notes",
    description: "Angular, Go, Gorm y Postgres.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1677073122/notes_exofgs.png",
    content: "Aplicacion web para la creación de notas.",
    link: "https://github.com/EmanuelCav/Notes"
}, {
    title: "World Cup 2022 prediction",
    description: "Javascript, HTML y CSS.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/World_rkgimr.png",
    content: "Plataforma web para simular una predicción del Mundial de Futbol 2022.",
    link: "https://github.com/EmanuelCav/World-Cup-2022"
}, {
    title: "Ta te ti",
    description: "Javascript, HTML y CSS.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/Tateti_ug6xwr.png",
    content: "Pagina web para jugar al ta te ti.",
    link: "https://github.com/EmanuelCav/Tic-Tac-Toe"
}, {
    title: "Papelarios",
    description: "Javascript, HTML y CSS.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/papelarios_ryeizm.png",
    content: "Pagina web de comercio electronico.",
    link: "https://github.com/EmanuelCav/Tienda-Papelarios"
}]

var projectsPy = [{
    title: "Countries",
    description: "Python, Pandas y Matplotlib.",
    content: "Analisis de datos de países.",
    link: "https://github.com/EmanuelCav/Countries"
}, {
    title: "Premier League",
    description: "Python, NumPy y Pandas.",
    content: "Analisis de datos de la Premier League temporada 2021/22.",
    link: "https://github.com/EmanuelCav/Premier-League"
}, {
    title: "Dataframe generator",
    description: "Python, Pandas.",
    content: "Software para la creación de marcos de datos.",
    link: "https://github.com/EmanuelCav/Dataframe-generator"
}, {
    title: "Fixture generator on Excel",
    description: "Python, NumPy y Pandas.",
    content: "Aplicación para la creación de un fixture y su respectiva tabla de posiciones en Excel.",
    link: "https://github.com/EmanuelCav/Excel-Fixture-Generator"
}, {
    title: "Read Files",
    description: "Python, Pandas.",
    content: "Software para la lectura de archivos con marco de datos.",
    link: "https://github.com/EmanuelCav/Read-files"
}, {
    title: "Calculator",
    description: "Python, Tkinter.",
    content: "Aplicación de escritorio de una calculadora.",
    link: "https://github.com/EmanuelCav/Calculator"
}, {
    title: "Hash Generator",
    description: "Python, TKinter.",
    content: "Aplicación de escritorio para la generación de un hash.",
    link: "https://github.com/EmanuelCav/Hash-generator"
}]

var firstImageProject = 0
var lastImageProject = 4

var firstImageProjectPy = 0
var lastImageProjectPy = 4

const addEvent = (id, i, event = 'click') => {
    document.getElementById(id).addEventListener(event, function () {
        getProject(i, id)
    });
}

function showProjects() {

    var id = 0

    for (var i = firstImageProject; i < lastImageProject; i++) {
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

        containProject.appendChild(imageContainProject)
        containProject.appendChild(titleContainProject)
        containProject.appendChild(descriptionContainProject)

        containerProjects.appendChild(containProject)

        addEvent(id, i)
        id++
    }

}
function isLeftOrRightProjects() {
    if (firstImageProject == 0) {
        leftProject.style.display = "none"
    } else {
        leftProject.style.display = "block"
    }
    if (lastImageProject == projectsJS.length) {
        rightProject.style.display = "none"
    } else {
        rightProject.style.display = "block"
    }
}
function showProjectsPy() {

    var id = 4

    for (var i = firstImageProjectPy; i < lastImageProjectPy; i++) {
        var containProject = document.createElement("div")
        containProject.className = "contain-project"
        containProject.id = id

        // var imageContainProject = document.createElement("img")
        // imageContainProject.src = projectsPy[i].image
        // imageContainProject.alt = projectsPy[i].title
        // imageContainProject.className = "image-project"

        var titleContainProject = document.createElement("h1")
        titleContainProject.innerHTML += projectsPy[i].title
        titleContainProject.className = "title-project"

        var descriptionContainProject = document.createElement("p")
        descriptionContainProject.innerHTML += projectsPy[i].description
        descriptionContainProject.className = "description-project"

        var contentContainProject = document.createElement("p")
        contentContainProject.innerHTML += projectsPy[i].content
        contentContainProject.className = "description-project"

        // containProject.appendChild(imageContainProject)
        containProject.appendChild(titleContainProject)
        containProject.appendChild(descriptionContainProject)
        containProject.appendChild(contentContainProject)

        containerProjectsPy.appendChild(containProject)

        addEvent(id, i)
        id++
    }
}
function isLeftOrRightProjectsPy() {
    if (firstImageProjectPy == 0) {
        leftProjectPy.style.display = "none"
    } else {
        leftProjectPy.style.display = "block"
    }
    if (lastImageProjectPy == projectsPy.length) {
        rightProjectPy.style.display = "none"
    } else {
        rightProjectPy.style.display = "block"
    }
}
function getProject(i, id) {
    containerGetProject.style.display = "block"
    containGetproject.style.display = "block"

    const titleProject = document.createElement("h1")
    if (id >= 4) {
        titleProject.innerHTML += projectsPy[i].title
    } else {
        titleProject.innerHTML += projectsJS[i].title
    }
    titleProject.className = "title-getproject"

    const imageProject = document.createElement("img")
    if (id < 4) {
        imageProject.src = projectsJS[i].image
        imageProject.alt = projectsJS[i].title
        imageProject.className = "image-getproject"
    }

    const descriptionProject = document.createElement("p")
    if (id >= 4) {
        descriptionProject.innerHTML += projectsPy[i].description
    } else {
        descriptionProject.innerHTML += projectsJS[i].description
    }
    descriptionProject.className = "text-getproject"

    const contentProject = document.createElement("p")
    if (id >= 4) {
        contentProject.innerHTML += projectsPy[i].content
    } else {
        contentProject.innerHTML += projectsJS[i].content
    }
    contentProject.className = "text-getproject"

    const linkProject = document.createElement("a")
    linkProject.innerHTML += "Haz click aqui para visualizar el código"
    if (id >= 4) {
        linkProject.href = projectsPy[i].link
    } else {
        linkProject.href = projectsJS[i].link
    }
    linkProject.className = "link-project"

    containerInfoGetProject.appendChild(titleProject)
    containerInfoGetProject.appendChild(imageProject)
    containerInfoGetProject.appendChild(descriptionProject)
    containerInfoGetProject.appendChild(contentProject)
    containerInfoGetProject.appendChild(linkProject)
}

isLeftOrRightProjects()
showProjects()

isLeftOrRightProjectsPy()
showProjectsPy()

function validForm(name, email, description) {

    var msg

    if (!name || !email || !description) {
        msg = "Asegurate de completar todos los campos."
        return msg
    }

    var validEmail = validateEmail(email)

    if (!validEmail) {
        msg = "Asegurate de haber escrito bien la direccion de correo electronico."
        return msg
    }

    if (description.length > 200) {
        msg = "Asegurate que la descripción tenga menos de 200 caracteres."
        return msg
    }

    for (var i = 0; i < description.length; i++) {
        if (description[i] == "<" || description[i] == ">") {
            msg = 'En la descripcion los caracteres especiales como "<,>" no estan permitidos'
            return msg
        }
    }

    msg = "Mensaje enviado correctamente"

    return msg
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

leftProject.addEventListener("click", () => {
    while (containerProjects.firstChild) {
        containerProjects.removeChild(containerProjects.firstChild)
    }
    firstImageProject--
    lastImageProject--
    isLeftOrRightProjects()
    showProjects()
})
rightProject.addEventListener("click", () => {
    while (containerProjects.firstChild) {
        containerProjects.removeChild(containerProjects.firstChild)
    }
    firstImageProject++
    lastImageProject++
    isLeftOrRightProjects()
    showProjects()
})
leftProjectPy.addEventListener("click", () => {
    while (containerProjectsPy.firstChild) {
        containerProjectsPy.removeChild(containerProjectsPy.firstChild)
    }
    firstImageProjectPy--
    lastImageProjectPy--
    isLeftOrRightProjectsPy()
    showProjectsPy()
})
rightProjectPy.addEventListener("click", () => {
    while (containerProjectsPy.firstChild) {
        containerProjectsPy.removeChild(containerProjectsPy.firstChild)
    }
    firstImageProjectPy++
    lastImageProjectPy++
    isLeftOrRightProjectsPy()
    showProjectsPy()
})

close.addEventListener("click", () => {
    while (containerInfoGetProject.lastChild) {
        if (containerInfoGetProject.lastChild.nodeName == "svg") {
            break
        }
        containerInfoGetProject.removeChild(containerInfoGetProject.lastChild)
    }
    containerGetProject.style.display = "none"
    containGetproject.style.display = "none"
})

var containerMessage = document.getElementById("container-message")

formContact.addEventListener("submit", (e) => {
    e.preventDefault()

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var description = document.getElementById("description").value

    var valid = validForm(name, email, description)

    var textMessage = document.getElementById("text-message")

    if (valid == "Mensaje enviado correctamente") {
        containerMessage.style.display = "flex"
        containerMessage.style.backgroundColor = "#6f6"
        Email.send({
            SecureToken: "f07b59b4-1d8c-49d6-93ad-0ad62103837c",
            To: 'cavallinema@gmail.com',
            From: 'cavallinema@gmail.com',
            Subject: `New message from ${name}. The email is ${email}`,
            Body: description
        })
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("description").value = ""
    } else {
        containerMessage.style.display = "flex"
        containerMessage.style.backgroundColor = "#f66"
    }

    textMessage.innerHTML = ""
    textMessage.innerHTML += `${valid}`

})

closeMessage.addEventListener("click", () => {
    containerMessage.style.display = "none"
})

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
