import React, { Component } from "react";
import "./toggle1.css";
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   toggle: "Switch ON",
      //   isToggleOn: "Turned Off",
      isOn: true,
    };
  }
  handlebutton = () => {
    // if( this.state.isToggleOn === "Turned Off"){
    //     this.setState ({ isToggleOn: "Turned On"});
    //     this.setState ({ toggle: "Switch OFF"});
    //     }
    //     else{
    //         this.setState ({ isToggleOn: "Turned Off"});
    //         this.setState ({ toggle: "Switch ON"});
    //         }
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return (
      <>
        <button
          onClick={this.handlebutton}
          className={this.state.isOn ? "switchon" : "switchoff"}
        >
          {this.state.isOn ? <>SwitchOn</> : <>SwitchOff</>}
        </button>
        <h1 className={this.state.isOn ? "Turnedon" : "TurnedOff"}
        >{this.state.isOn?<>TurnedOn</>:<>TurnedOff</>}</h1>
      </>
    );
  }
}
export default Toggle;
