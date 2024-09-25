import { Component } from "react";
import UserCardClass from "./UserCardClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Hello there are on Episode 8");
        }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){

        return (
            <div>
                <h1 className="text-2xl font-bold ml-5">About Us</h1>
                <div className="text-xl font-semibold ml-5">
                    loggedInUser : <UserContext.Consumer>
                        {(data) => <h1>{data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserCardClass />
            </div>
        );
    }
}
export default About;
