AFRAME.registerComponent("cursor-listener", {

    schema : {
        selectedItemId : {type : "string", default : ""}
    },

    init : function(){

        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();

    },

    update : function(){

        const fadeBackgroundEl = document.querySelector("#fade-background");

        c = fadeBackgroundEl.children;

        if (c.length > 0){
            var i;
            for (i = 0; i <= c.length; i++){
                fadeBackgroundEl.removeChild(c[i]);
            }
        } else {
            this.handleMouseClickEvent();
        }

    },

    handleMouseEnterEvent : function(){

        this.el.addEventListener("mouseenter", ()=>{
            const id = this.el.getAttribute("id");
            const postersId = ["captain-america", "outer-space", "spiderman", "superman"];

            if (postersId.includes(id)){
                const posterContainer = document.querySelector("#posters-container");
                posterContainer.setAttribute("cursor-listener", {selectedItemId : id});
                this.el.setAttribute("material", {color : "black"});
            }
        })

    },

    handleMouseLeaveEvent : function(){

        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data;

            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId){
                    el.setAttribute("material", {color : "#fff"});
                }
            }
        })

    },

    handleMouseClickEvent : function(){

        this.el.addEventListener("click", ()=>{
            const {selectedItemId} = this.data;

            const fadeBackgroundEl = document.querySelector("#fade-background");
            const titleEl = document.querySelector("#app-title");
            const cursorEl = document.querySelector("#camera-cursor");

            if (selectedItemId){
                fadeBackgroundEl.setAttribute("visible", true);
                fadeBackgroundEl.setAttribute("info-banner", {itemId : selectedItemId});
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", {x : 0, y : 0, z : -1});
                cursorEl.setAttribute("geometry", {radiusInner : "0.03", radiusOuter : "0.04"});
            } else {
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", true);
                cursorEl.setAttribute("position", {x : 0, y : 0, z : -3});
                cursorEl.setAttribute("geometry", {radiusInner : '0.06', radiusOuter : "0.08"});
            }
        })

    }

})