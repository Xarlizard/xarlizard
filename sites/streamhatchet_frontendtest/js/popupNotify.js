//const template = document.createElement("template"); //If more webcomponents use this, remove it and add it to the main js file ONCE.
template.innerHTML = `
    <style>
        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }
        .cancel {
            display: none;
        }
        svg {
            width: 1em;
            cursor: pointer;
        }
        .notify-container {
            position: absolute;
            bottom: 125%;
            z-index: 9;
            width: 300px;
            background: white;
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            font-size: .8em;
            border-radius: .5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
    </style>

    <div class="tooltip-container">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="alert">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98899 5.30778C10.169 2.90545 12.6404 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 9.57209 22.5168 10.5918 22.0977 11.5093C21.9883 11.7488 21.967 11.975 22.0156 12.1568L22.143 12.6328C22.5507 14.1566 21.1566 15.5507 19.6328 15.143L19.1568 15.0156C19.0215 14.9794 18.8616 14.982 18.6899 15.0307C18.1798 19.3775 14.4838 22.75 10 22.75C8.65003 22.75 7.36949 22.4438 6.2259 21.8963C5.99951 21.7879 5.7766 21.7659 5.59324 21.815L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.18504 18.4068C2.2341 18.2234 2.21211 18.0005 2.10373 17.7741C1.55623 16.6305 1.25 15.35 1.25 14C1.25 9.50945 4.63273 5.80897 8.98899 5.30778ZM10.735 5.28043C15.0598 5.64011 18.4914 9.14511 18.736 13.5016C18.9986 13.4766 19.2714 13.4935 19.5445 13.5666L20.0205 13.694C20.4293 13.8034 20.8034 13.4293 20.694 13.0205L20.5666 12.5445C20.4095 11.9571 20.5119 11.3708 20.7333 10.8861C21.0649 10.1602 21.25 9.35275 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75C13.5181 2.75 11.7692 3.75284 10.735 5.28043ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 15.121 3.00392 16.1807 3.45667 17.1264C3.69207 17.6181 3.79079 18.2087 3.63407 18.7945L3.30602 20.0205C3.19664 20.4293 3.57066 20.8034 3.97949 20.694L5.20553 20.3659C5.79126 20.2092 6.38191 20.3079 6.87362 20.5433C7.81932 20.9961 8.87896 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z" fill="#1C274C"/>
            <path d="M7.5 14C7.5 14.5523 7.05228 15 6.5 15C5.94772 15 5.5 14.5523 5.5 14C5.5 13.4477 5.94772 13 6.5 13C7.05228 13 7.5 13.4477 7.5 14Z" fill="#1C274C"/>
            <path d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z" fill="#1C274C"/>
            <path d="M14.5 14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13C14.0523 13 14.5 13.4477 14.5 14Z" fill="#1C274C"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="cancel">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98899 5.30778C10.169 2.90545 12.6404 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 9.57209 22.5168 10.5918 22.0977 11.5093C21.9883 11.7488 21.967 11.975 22.0156 12.1568L22.143 12.6328C22.5507 14.1566 21.1566 15.5507 19.6328 15.143L19.1568 15.0156C19.0215 14.9794 18.8616 14.982 18.6899 15.0307C18.1798 19.3775 14.4838 22.75 10 22.75C8.65003 22.75 7.36949 22.4438 6.2259 21.8963C5.99951 21.7879 5.7766 21.7659 5.59324 21.815L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.18504 18.4068C2.2341 18.2234 2.21211 18.0005 2.10373 17.7741C1.55623 16.6305 1.25 15.35 1.25 14C1.25 9.50945 4.63273 5.80897 8.98899 5.30778ZM10.735 5.28043C15.0598 5.64011 18.4914 9.14511 18.736 13.5016C18.9986 13.4766 19.2714 13.4935 19.5445 13.5666L20.0205 13.694C20.4293 13.8034 20.8034 13.4293 20.694 13.0205L20.5666 12.5445C20.4095 11.9571 20.5119 11.3708 20.7333 10.8861C21.0649 10.1602 21.25 9.35275 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75C13.5181 2.75 11.7692 3.75284 10.735 5.28043ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 15.121 3.00392 16.1807 3.45667 17.1264C3.69207 17.6181 3.79079 18.2087 3.63407 18.7945L3.30602 20.0205C3.19664 20.4293 3.57066 20.8034 3.97949 20.694L5.20553 20.3659C5.79126 20.2092 6.38191 20.3079 6.87362 20.5433C7.81932 20.9961 8.87896 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z" fill="#1C274C"/>
        </svg>
        <div class="notify-container">
            <slot name="popupText" />
        </div>
    </div>
`;

class PopupNotify extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    tooltip(expandState) {
        const tooltip = this.shadowRoot.querySelector('.notify-container')
        const alert = this.shadowRoot.querySelector('.alert')
        const cancel = this.shadowRoot.querySelector('.cancel')

        if(expandState == true) {
            tooltip.style.transform = 'scale(1)';
            alert.style.display = 'none';
            cancel.style.display = 'block';
            expandState = false;
        } else{
            tooltip.style.transform = 'scale(0)';
            alert.style.display = 'block';
            cancel.style.display = 'none';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
            this.tooltip(true)
        })
        this.shadowRoot.querySelector('.cancel').addEventListener('click', () => {
            this.tooltip(false)
        })
    }
}

window.customElements.define('popup-notify', PopupNotify)