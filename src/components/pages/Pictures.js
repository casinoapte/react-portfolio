import React from 'react'
import img1 from "../../assets/me_and_whale_2.JPG"
import img2 from "../../assets/me_and_whale_1.JPG"
import img3 from "../../assets/waterfall_1.jpg"


export default function Pictures() {
    return (
        <div className="container">

            {/* Project 1 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={img1} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            {/* Project 2 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={img2} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            {/* Project 3 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={img3} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

        </div>
    )
}
