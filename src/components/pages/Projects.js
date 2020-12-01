import React from 'react'
import proj1 from "../../assets/sudoku.png"
import proj2 from "../../assets/bookshelf.png"
import proj3 from "../../assets/lhs.png"



export default function Projects(props) {
    return (
        <div className="container">

            {/* Project 1 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={proj1} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            {/* Project 2 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={proj2} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            {/* Project 3 */}

            <div className="row project-card">
                <div className="col-4">
                    <img className="project-img" src={proj3} />
                </div>
                <div className="col-5 offset-2">
                    <p className="project-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>





        </div>
    )
}
