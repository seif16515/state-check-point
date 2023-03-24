import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
class Profile extends React.Component {
 state = {
   name: "seif bhiri",
   imgsrc: "/",
   bio: "i am a profesional footbaler and full stack developer this is my bio" ,
   proffesion: "still dont have one",
 };

 render() {
   return <div style={{maxHeight:500,width:"80%",border:"black",borderRadius:"25px",borderColor:'black',borderStyle:'solid'}}> 
    <h1>hello {this.state.name}</h1>;
    <img style={{width:150,height:150}} src={this.state.imgsrc} alt="photo" ></img>
    <p>bio:</p>
    <p> {this.state.bio} </p>
    <p>proffesion:</p>
    <p>{this.state.proffesion} </p>
    <Button variant="contained" color="success">
        Success
      </Button>
   </div>
   
 }
}
export default Profile;