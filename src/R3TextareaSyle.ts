import {css} from 'lit-element';

export default css`
    :host {
        font-family: 'Roboto', sans-serif;

        --main-color-white: #fff;
        --main-color-red: #c70039;
        --main-color-yellow: #c70039;
        --main-color-blue: #12dee1;
        --main-color-dark: black;
    }
    #label {
        font-family: 'VT323', monospace;
        margin-left: 3px;
        font-size: 51px;
        display: block;
    }

    #container.light #label {
        color: var(--main-color-dark);
      }
    
    #container.dark #label {
        color: var(--main-color-white);
    }

    #textarea {
        width: 99%;
        height: 35px;
        outline: none;
        border-radius: 10px;
        font-size: 17px;
        background: var(--main-color-white);
        border: 0;
        padding: 5px;
        resize: none;
    }

    #container.light #textarea {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    #container.light #textarea:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);
    }
    
    #container.dark #textarea {
        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.12),
          0 1px 1px rgba(255, 255, 255, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    
    #container.dark #textarea:hover {
        box-shadow: 0 5px 10px rgba(255, 255, 255, 0.25),
          0 3px 5px rgba(255, 255, 255, 0.22);
    }
`;