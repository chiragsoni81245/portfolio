const projects = [
    {
        title: "ONO Suite: Software Development Engineer",
        image: "onosuite.png",
        descriptionMarkdown: `- Design architecture and database for **Coupons/Campaigns Rule Engine**, and **Dynamic Product Pricing** feature
- Fixed major security vulnerabilities, including one which **resolved an unauthorized admin-level data access**
- Architect a scalable **Bidding System** tailored to Kapila Organisation’s needs
- Worked on **Delivery microservice** to assign, order delivery to integration like Dunzo, Pidge
- **Led a team of 7 developers** and participated in code reviews
        `,
        demoLink: "#"
    },
    {
        title: "ONO Suite: Full Stack Developer",
        image: "onosuite.png",
        descriptionMarkdown: `- Integrated Razorpay, JusPay, and Paytm’s, Payment Gateway and **Payment Machine** in companies Payment Service
- **Led** the development of **Android and IOS Mobile Application** for Slaycoffee using **React Native** technology
- Worked on development of **Self Ordering Kiosk App** used by Tacobell, and Herfy
        `,
        demoLink: "#"
    },
    {
        title: "Awakinn: Full Stack Developer",
        image: "awakinn.png",
        descriptionMarkdown: `- Design and Code a Rest API Service for the **Ministry of Finance**, DGHRD using FastAPI, PostgreSQL technologies
- Design and Develop a **Centralized Authorization System** based on OAuth2.0
- Architect and build a **Learning Management System** using Flask, MySQL, AWS, and Redis technologies
- Profiled and Optimize SQL Queries that **improved the server performance by 40%**
- Design and Code a **Real-time Notification** System based on **Web sockets and Redis**
        `,
        demoLink: "#"
    },
    {
        title: "Reverse Shell",
        image: "reverse-shell.jpg",
        descriptionMarkdown: `- Build a **custom client-server communication protocol** efficient in controlling different actions by sending minimum data over the network
- Used **multi-threading** to have multiple clients connected at the same time so that users can switch between clients
- Added a file upload and download feature using **chunks-based file transfer**
- Added functionality to control the microphone and speakers of client’s computer
        `,
        githubLink: "https://github.com/chiragsoni81245/Reverse-Shell"
    },
    {
        title: "Blog Web App",
        image: "blog_app.jpeg",
        descriptionMarkdown: `
- Design Architecture and Database for this project
- Build a session-based authentication using Flask-Login, and CRUD APIs using Flask
- Build a user interface for Login, Search, View post and Comment on posts using HTML, CSS, and JavaScript
- Added feature to follow other users and build my feed page to see posts from all the followings
- Added feature to explore the latest post from all the users on the explore page
        `,
        githubLink: "https://github.com/chiragsoni81245/Microblog"
    },
    {
        title: "Decentralized Meet",
        image: "decentralized_meet_demo.jpeg",
        descriptionMarkdown: `
- Its a web app based on WebRTC, where multiple users can connect to each other with video and audio sharing
- No Server Required, means it does not require any other 3rd party in between you can also run this HTML file into your local browser and use this app, so that comunication will always be peer to peer
        `,
        demoLink: "https://chiragsoni81245.github.io/decentralized-meet/",
        githubLink: "https://github.com/chiragsoni81245/decentralized-meet"
    },
    {
        title: "Tree Traversal Visualizer",
        image: "tree-visualizer-demo.jpeg",
        descriptionMarkdown: `
- Build a tree generator with JavaScript, HTML, CSS
- Applied an auto zoom option using CSS and JavaScript
        `,
        demoLink: "https://chiragsoni81245.github.io/Tree-Visualizer/"
    },
    {
        title: "Breadth-first search visualiser in a Maze",
        image: "graph-bfs-visualizer-demo.jpeg",
        descriptionMarkdown: `
- Build an Maze generator with custom blocking percentage
- Implemented BFS in JavaScript to heighlight different components in BFS traversal
        `,
        demoLink: "https://chiragsoni81245.github.io/path_visualizer/"
    },
    // Add more project data as needed
];

function createProjectCard(project) {
    console.log('creating card')
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `
        <div class="flex flex-col h-full bg-transparent">
            <h3 class="text-xl justify-between font-semibold mb-1">${project.title}</h3>
            ${project.subtitle ? `<h3 class="front-semibold mb-2">${project.subtitle}</h3>` : ''}
            <img class="h-full" src="img/${project.image}" alt="${project.title}">
        </div>
    `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    
    const descriptionHtml = marked.parse(project.descriptionMarkdown)
    cardBack.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <div class="px-5 pb-5">${descriptionHtml}</div>
    `;

    if (project.githubLink && project.githubLink !== '#') {
        cardBack.innerHTML = cardBack.innerHTML + `<a href="${project.githubLink}" class="text-blue-500 hover:underline">Github</a>`
    }
    if (project.demoLink && project.demoLink !== '#') {
        cardBack.innerHTML = cardBack.innerHTML + `<a href="${project.demoLink}" class="text-blue-500 hover:underline">View Demo</a>`
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

function addProjectsToContainer() {
    const projectContainer = document.getElementById("projectContainer");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate project cards
addProjectsToContainer();
