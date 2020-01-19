import React, { Component,Fragment } from 'react';
import { Route } from 'react-router-dom';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import HomeMenu from "../layout/HomeMenu"
import Login from "../layout/Login"
class Home extends Component{
    constructor() {
        super();
        this.state = { 
            checked: false,
            root: {
                flexGrow: 1,
                backgroundColor: "#000000",
                height: "100%"
              },
              paper: {
                padding: "10px",
                margin: "20px",
                textAlign: 'center',
               
              },
              title: {
                padding: "10px",
                marginTop: "20px",
                fontSize : '100px',
                textAlign: 'center',
                color: "#11ff11"
              }
        
      }
    }
 
    render(){
   
        

       return(
        <div style ={this.state.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <div style={this.state.title}>Meteoroid</div>
            
          </Grid>
          <Grid item xs={6}>
            <Login></Login>
          </Grid>
          <Grid item xs={4}>
            <Paper style={this.state.paper}><HomeMenu/></Paper>
            
          </Grid>
          <Grid item xs={2}>
            <Paper style={this.state.paper}></Paper>
            
          </Grid>
          
        </Grid>
      </div>

       );
   }


}

export default Home;
