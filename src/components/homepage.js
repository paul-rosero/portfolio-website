import React from "react";
import { Grid, Cell } from "react-mdl";


function Homepage() {
    return(
        <div className="homepage-greeting" style={{ width: '100%', margin: 'auto'}}>
            <Grid className="homepage-grid">
                <Cell col={12}>
                    <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1 className="home-heading">Software Engineer/Full Stack Web Developer</h1>
                        <hr/>
                        <p className="home-introduction">My name is Paul Rosero and I'm a Flatiron Bootcamp Alumni. Creating websites, starting from scratch or renovating already written websites, is something I love to do. As a beginner in the business, this website was created from scratch just so I can showcase my skills and abilities.</p>
                        <div className="social-links">
                            {/*Github icon */}
                            <a href="https://github.com/paul-rosero" target="_blank" rel="noreferrer"><i class="fa fa-github-square"/></a>
                            {/*LinkedIn icon */}
                            <a href="https://www.linkedin.com/in/paul-rosero" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"/></a>
                        </div>
                    </div>
                    
                </Cell>
            </Grid>
            
            
        </div>
        
    )
}

export default Homepage