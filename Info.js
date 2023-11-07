AFRAME.registerComponent("info-banner", {

    schema : {
        itemId : {type : "string", default : ""}
    },

    update : function(){

        this.createBanner();

    },

    createBanner : function(){

        postersInfo = {
            superman : {
                url : "./assets/Superman.jpg",
                title : "SUPERMAN",
                release_year : "1980",
                description : "Superman is the archetype of the superhero: he wears an outlandish costume, uses a codename, and fights evil with the aid of extraordinary abilities. Although there are earlier characters who arguably fit this definition, it was Superman who popularized the superhero genre and established its conventions."
            },

            spiderman : {
                url : "./assets/Spiderman.jpg",
                title : "SPIDERMAN",
                release_year : "1950",
                description : " Spider-Man gets his superhuman spider-powers and abilities after being bitten by a radioactive spider."
            },

            "outer-space" : {
                url : "./assets/OuterSpace.jpg",
                title : "OUTER SPACE",
                release_year : "1963",
                description : "Space Adventures, a science-fiction anthology comic book from the Derby, Connecticut-based Charlton Comics, was initially published for 21 issues (cover-dated July 1952 - Aug. 1956). Issues #9-12 (Winter 1954 - Aug. 1954) were cover-titled Science Fiction Space Adventures."
            },

            "captain-america" : {
                url : "./assets/CaptainAmerica.jpg",
                title : "CAPTAIN AMERICA",
                release_year : "1990",
                description : "Captain America's civilian identity is Steve Rogers, a frail man enhanced to the peak of human physical perfection by an experimental super-soldier serum after joining the United States Army to aid the country's efforts in World War II."
            }
        }

        const {itemId} = this.data;
        const fadeBackgroundEl = document.querySelector("#fade-background");

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}`);
        entityEl.setAttribute("geometry", {primitive : "sphere", width : "1", height : "1"});
        entityEl.setAttribute("material", {color : "black"});
        entityEl.setAttribute("position", {x : 0, y : 0, z : -1});

        const item = postersInfo[itemId];

        const imageEl = this.createImage(item);
        const titleEl = this.createTitle(item);
        const descriptionEl = this.createDescription(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);

    },

    createImage : function(item){

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {primitive : "plane", width : "0.80", height : "0.5"});
        entityEl.setAttribute("material", {src : item.url});
        entityEl.setAttribute("position", {x : 0, y : 0.3, z : 0.05});
        return entityEl;

    },

    createTitle : function(item){

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            color : "white",
            shader : "msdf",
            anchor : "left",
            width : "1.2", 
            height : "2",
            value : `${item.title} (${item.release_year})`
        });
        entityEl.setAttribute("position", {x : -0.4, y : 0.02, z : 0.05})
        return entityEl;

    },

    createDescription : function(item){

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            color : "white",
            width : "0.75",
            height : "2",
            value : item.description,
            wrapCount : "40",
            shader : "msdf"
        });
        entityEl.setAttribute("position", {x : -0.03, y : -0.13, z : 0.05});
        return entityEl;

    }

})