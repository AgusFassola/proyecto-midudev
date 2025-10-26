class DevJobsAvatar extends HTMLElement{
    constructor(){
        super();

        //para que los estilos de afuera no le afecten al elemento
        this.attachShadow({mode:"open"});
    }

    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`;
    }

    render(){

        const service = this.getAttribute("service") ?? 'github';
        const username = this.getAttribute("username") ?? 'midudev';
        const size = this.getAttribute("size") ?? '40';
        // el ?? quiere decir "si no hay valor, usa este otro valor por defecto"

        const url = this.createUrl(service, username);

        this.shadowRoot.innerHTML=`
            <style>
                img{
                    width:${size}px;
                    height:${size}px;
                    border-radius:9999px;
                }
            </style>

            <img src="${url}" 
                alt="Avatar de ${username}" 
                class="avatar"
            />
        `;
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("devjobs-avatar",DevJobsAvatar);