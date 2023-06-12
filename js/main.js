class App {
    switcher;
    data = [
        // {
        //     id: 0,
        //     video: "video1.mp4",
        //     link: 1

        // },
        // {
        //     id: 1,
        //     video: "video2.mp4",
        //     link: 2
        // }
    ]

    constructor() {
        this.switcher = new Switcher(this, this.data);
    }
}

class Api {

}

class Switcher {
    yubtub;
    cleaner;
    app;
    default = 0;

    constructor(app, data) {
        this.app = app;
        this.data = data;
        this.yubtub = new Yubtub(this.app, data[this.default]);
        this.cleaner = new Cleaner();
    }

    switch(link) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]);

    }
}

class Cleaner {
    clean(whereToClean) {
        document.querySelector(whereToClean).innerHTML = "";
    }
}

class Yubtub {
    aside;
    renderer;
    app;
    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.aside = new Aside(this, data);
    }
}

class Renderer {
    render(whereToRender, whatToRender) {
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

class Aside {
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("aside");
        this.yubtub.renderer.render("body", this.htmlElement);
        this.nextVideo = new NextVideo(this, data);

    }
}

class NextVideo {
    aside;
    htmlElement;
    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlElement = document.createElement("video");
        this.htmlElement.src = "./videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlElement);
        this.htmlElement.onclick = this.videoClicked;
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }
}

class Main {

}

class Video {

}

class Comments {

}

class Comment {

}

const app = new App();
console.log(app);