import React, { Component } from "react";


export default class HigherOrderComponents   extends Component{

    constructor(props){
        super(props);
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    renderusers = () => {
        const userData = this.state.userData;
        const render = userData.map((user) => (
            <React.Fragment key={user.id}>
                <li className="list">
                    <span>Id: {user.id}</span>
                    <span>Name : {user.name}</span>
                    <span>User Type: {user.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return render;
    };

    types=() => {
        const userData = this.state.userData;
        const Render= userData.filter((user) => {
            return user.user_type == 'Designer';
        }).map((user)=>(
            <div key={user.id}>
            <li className="list">
                <span>Id: {user.id}</span>
                <span>Name : {user.name}</span>
                <span>User Type: {user.user_type}</span>
            </li>
            </div>)
        ) 
        return Render 
    }


    word= () => {
        const userData = this.state.userData;
        const Render= userData.filter((user)=>{
          return user.name[0] == "J";
        }).map((user)=>(
          <React.Fragment key={user.id}>
              <li className="list">
                  <span>Id: {user.id} </span>
                  <span>Name : {user.name}  </span>
                  <span>User Type: {user.user_type} </span>
              </li>
          </React.Fragment>)
      
        );
      
        return Render;
      }

        age = () => {
        const userData = this.state.userData;
        const Render= userData.filter((user) =>{
            return user.age > 28 && user.age <=50
        }).map((user)=>(
        <div key={user.id}>
        <li className="list">
            <span>Id: {user.id}</span>
            <span>Name : {user.name}</span>
            <span>User Type: {user.user_type}</span>
        </li>
        </div>)
        )
        return Render;
     } 

        finalAGE = () => {

        const userData = this.state.userData;
        const reducing = userData.reduce((PreviousValue, currentValue)=>{
          if(currentValue.user_type=="Designer"){
            PreviousValue+=currentValue.years;
          }
      
          return PreviousValue;
      
        },0)
      
        return reducing;
      }

    render(){
        return(
            <div>
            <div>
            <h1>Display all users</h1>
            <div className="BODY">
            <ul>{this.renderusers()} </ul>
            </div>                
            </div>

            <div>
                <h1>Display based on user type</h1>
                <div className="BODY">
                    <ul>{this.types()}</ul>
                </div>
            </div>


            <div>
                <h1>Filter all userData starting with J </h1>
                <div className="BODY">
                <ul>{this.word()} </ul>
                </div>
            </div>

            <div>
                <h1>Filter all userData based on age greater than 28 and less than or equal to 50 </h1>
                <div className="BODY">
                <ul>{this.age()} </ul>
                </div>
            </div>
            
            <React.Fragment>
                <h1>Find the total years of the designers </h1>
                <div className="BODY">
                <ul>{this.finalAGE()} </ul>
                </div>
            </React.Fragment>


            </div>

            
        );
    };


            
       
    }