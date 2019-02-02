import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router';
import { BackTop, message, Button } from 'antd';
import './../App.css';
import EmbedForm from './../components/EmbedForm.js';
import WorkshopGrid from './../components/Grid.js';
import ImageScroll from './../components/ImageScroll.js';

class Registration extends Component {
    
    success = () => {
      message.success('Thank you for registering for Great Explorations! Please use one of the below options to pay the $5 fee.', 10);
    };
    
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                    <p className="App-header-text">
                        <ImageScroll />
                    </p>
                    <p className="App-header-text">
                        Welcome to Great Explorations!<br></br>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>Scroll down to register </center>
                    </p>
                    <p className="App-text">
                        <center>A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.<br></br></center>
                                <center style={{ fontStyle: 'oblique' , fontWeight: '600'}}>March 9th, 2019 - Whitman College</center><br></br>
                                <center> All workshops are taught in college classrooms and labs in English </center>
                    </p>
                    <p className="App-text-small">
                      Hover over boxes to see descriptions<br></br>
                    </p>
                    <p className="App-header-text">
                        <WorkshopGrid />
                    </p>
                    <p className="App-header-text">
                        <EmbedForm />
                    </p>
                    <p>
                        <center>
                            <Button type="primary" onClick={this.success}>
                                <Link to={"/payment"}>
                                   {"Please click here after hitting submit!"}
                                </Link>
                            </Button>
                        </center>
                    </p>
                    
                </div>
            </div>

        )
    }
}

export default Registration;
