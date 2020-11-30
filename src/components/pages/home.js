import React from 'react'
import projectsImg from "../../assets/sudoku.png"
import coolPics from "../../assets/me_and_whale_2.JPG"

export default function Home() {




    return (
        <div className="container">


            <div className="row">
                <div className="col-4 offset-4">
                    <h1>Casino's React Site</h1>
                </div>
            </div>


            <div className="row">
                <div className="col-3">
                    <img src={projectsImg} alt="sudoku" />
                </div>
                <div className="col-3 offset-3">
                    <img src={coolPics} alt="sudoku" />
                </div>
            </div>



        </div>
    )

}

