//const template = document.createElement("template"); //If more webcomponents use this, remove it and add it to the main js file ONCE.
template.innerHTML = ` 
    <style>
            ul {
                list-style-type: none;
                gap: 5px;
                margin: 0;
                padding: 10px;
                overflow: hidden;
                background-color: #333;
                position: fixed;
                top: 0;
                width: 100%;
            }
  
            li {
                font-size: 1.1em;
            }
  
            li > img {
                height: 50px;
                margin-right: 20px;
            }
            li > a{
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
  
            li > a:hover:not(.active) {
                background-color: #111;
                border-radius: 50px;
            }

            .active {
                color: black;
                background-color: white;
                border-radius: 50px;
            }

            @media only screen and (min-width:800px) {
                li{
                    float: left;
                }
            }
    </style>

        <ul class="headerList">
            <li class="header-item"><img src="img/logo.png" alt="logo" srcset="https://streamhatchet.com/wp-content/uploads/2020/05/SH_Icon_-primary-2.png"></li>
            <li class="header-item "><a href="#channels">Channels</a></li>
            <li class="header-item"><a class="active" href="#games">Games</a></li>
            <li class="header-item"><a href="#campaigns">Campaigns</a></li>
            <li class="header-item"><a href="#esports">Esports</a></li>
            <li class="header-item"><a href="#comparison">Comparison</a></li>
            <li class="header-item"><a href="#insight">Insights</a></li>
            <li class="header-item"><a href="#youtube">YouTube VODs</a></li>
        </ul>
`;

class HeaderStreamHatchet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  //function to change between header titles/pages
  headerSelect() {
    const headerItem = this.shadowRoot.querySelector('.header-item');
    return true;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.header-item').addEventListener('click', () => {
        this.headerSelect()
    })
  }
}

window.customElements.define("header-streamhatchet", HeaderStreamHatchet);
