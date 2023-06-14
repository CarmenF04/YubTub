class App {
    api;
    switcher;
  
    constructor() {
      this.api = new Api("../data/data.json");
  
      this.api.getData().then((data) => {
        this.switcher = new Switcher(this, data);
      });
    }
  }

  class Api {
    url = "";
    data = null;
  
    constructor(newURL) {
      this.url = newURL;
    }
  
    async getData() {
      if (this.data === null) {
        await fetch(this.url)
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            this.data = data;
          });
      }
      return this.data;
    }
  }

  class Switcher {
    app;
    data;
    yubtub;
    cleaner;
    default = 0;
  
    constructor(app, data) {
      this.app = app;
      this.data = data.videos[this.default];
  
      this.yubtub = new Yubtub(this.app, this.data);
      this.cleaner = new Cleaner();
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