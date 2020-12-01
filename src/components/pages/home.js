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
                    <a href="/projects"><img src={projectsImg} alt="sudoku"/></a>
                </div>
                <div className="col-3 offset-3">
                <a href="/pictures"><img src={coolPics} alt="picture"/></a>
                </div>
            </div>



        </div>
    )

}

