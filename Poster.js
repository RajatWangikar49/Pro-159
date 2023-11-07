AFRAME.registerComponent("comics-poster", {

    init : function(){

        this.postersContainer = this.el;
        this.createPosters();

    },

    createPosters : function(){

        const postersRef = [
            {
                id : "captain-america",
                url : "./assets/CaptainAmerica.jpg"
            },

            {
                id : "outer-space",
                url : "./assets/OuterSpace.jpg"
            },

            {
                id : "spiderman",
                url : "./assets/Spiderman.jpg"
            },

            {
                id : "superman",
                url : "./assets/Superman.jpg"
            }
        ]

        let previousXPosition = -60;

        for (var item of postersRef){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {x : posX, y : posY, z : posZ};
            previousXPosition = posX;

            const borderEl = this.createBorder(position, item.id);
            const posterEl = this.posters(item);

            borderEl.appendChild(posterEl);
            this.postersContainer.appendChild(borderEl);
        }

    },

    createBorder : function(position, id){

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {primitive : "plane", width : "22", height : "40"});
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {color : "#fff"});
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;

    },

    posters : function(item){

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {primitive : "plane", width : "20", height : "28"});
        entityEl.setAttribute("material", {src : item.url});
        entityEl.setAttribute("position", {x : 0, y : 5, z : 0.1});
        return entityEl;

    }

})