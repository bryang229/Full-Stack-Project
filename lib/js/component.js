class Component{
    constructor(rootElement,tag, isNew,parentIfNew, isShowing = true){
        this.isShowing = isShowing;
        this.tag = tag;
        this.isNew = isNew;
        this.rootElement = isNew ? this.createNewComponent(parentIfNew,rootElement) : document.getElementById(`${rootElement}`);      
        this.parentElement = isNew ? this.parentElement : this.rootElement.parentElement;
    }

    createNewComponent = (parentID,id) => {
        if(this.isNew){    
            let tempComponent = document.createElement(`${this.tag}`);
            tempComponent.id = `${id}`;

            let parent = document.getElementById(parentID);
            console.log(tempComponent,1)

            console.log(tempComponent)
            this.rootElement = document.getElementById(id);
            console.log(this.rootElement)
            this.parentElement = parent;
            console.log(this.parentElement)

            if(this.isShowing){
                parent.appendChild(tempComponent);
            }
            this.isNew = false;
            return tempComponent;
        }
    }


    hide = () => {
        if(this.isShowing){
            this.parentElement.removeChild(this.rootElement);
            this.isShowing = false;
        }
    }
    
    show = () => {
        if(!this.isShowing){
            this.parentElement.appendChild(this.rootElement);
            this.isShowing = true;
        }
    }

    //Replaces old id with new one
    addId(id){
        this.removeId();
        this.rootElement.id = id;
    }

    removeId(){
        this.rootElement.removeAttribute('id');
    }

    //Add's a classname to the element
    addClassName(className){
        this.rootElement.setAttribute("class",className)
    }




    addText = (text,clearText) =>{
        if(clearText && this.isShowing){
            this.rootElement.innerText = text;
        }
        else if(this.isShowing){
            this.rootElement.innerText += text;
        }
    }


}

introOnClick = (e) => {
    e.preventDefault();
    if(intro.isShowing)
        intro.hide();
    else
        intro.show();
    
}


function dataToJson(username,password,email){
    return {
        "username" : username,
        "email"    : email,
        "password" : password

    }
}
