import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import image from "./images/IMG_2130.JPG"
import { SocialIcon } from 'react-social-icons';
import {useTransition, animated} from 'react-spring';

function App() {

    const [items, set] = useState([{text: "David Vittori", key: 1}])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
    })
    return (

        <div className="App" style={{backgroundImage: `url(${image})`, width: "100%", height: "100%"}}>
            <header className="App-header">
                <div style={{ padding: 20, marginTop: 30, borderRadius: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>

                    {
                        transitions.map(({ item, props, key }) =>
                            <animated.p  className="App-Title" key={key} style={props}>{" " + item.text + " "}</animated.p>
                        )
                    }
                    </div>

                    <div style={{justifyContent: "center", alignItems: "flex-end", display: "flex"}}>

                        <SocialIcon url="https://github.com/VittoriDavide" network={"github"} bgColor={"transparent"} fgColor={"black"}/>
                        <SocialIcon url="https://www.linkedin.com/in/vittori/" bgColor={"transparent"} fgColor={"black"}/>
                        <SocialIcon url="mailto:dvd.vittori@gmail.com" network={"email"} bgColor={"transparent"} fgColor={"black"}/>

                    </div>

                </div>

            </header>


        </div>
    );
}

export default App;
