import React from "react";
import "./styles.css";
class Tbl extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };

    
  }
  me(btnVal) {
 let result=this.state.msg;
 result+=btnVal
    this.setState({
      
      msg:result
    });
 
  }
eql(){
  this.setState({
    msg:eval(this.state.msg)
  })
}
  clr() {
    this.setState({
      msg:""
    });
  }
  render() {
    return (
      <>
        <table className="tbl">
          <tr>
            {" "}
            <input type="text" value={this.state.msg} />
          </tr>
          <tr>
            <button className="on"
              onClick={() => {
                this.me("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                this.me("2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                this.me("3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                this.me("+");
              }}
            >
              +
            </button>
          </tr>
          <tr>
            <button
              onClick={() => {
                this.me("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                this.me("5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                this.me("6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                this.me("*");
              }}
            >
              *
            </button>
          </tr>
          <tr>
            <button
              onClick={() => {
                this.me(7);
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                this.me(8);
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                this.me(9);
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                this.me("-");
              }}
            >
              -
            </button>
          </tr>
          <tr>
            <button
              onClick={() => {
                this.eql(this.state.msg);
              }}
            >
              =
            </button>
            <button
              onClick={() => {
                this.me(0);
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                this.me("/");
              }}
            >
              /
            </button>
            <button
              onClick={() => {
                this.clr();
              }}
            >
              C
            </button>
          </tr>
        </table>
      </>
    );
  }
}
export default Tbl;
