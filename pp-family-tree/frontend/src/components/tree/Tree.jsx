import React from 'react'
import Pair from './Pair'

const Tree = () => {
    return (
        <div className="col-md-10 col-lg-11">
            <div className="tree col-md-10 col-lg-11">
                <div className="parent">
                    <div className="pair" id="pair">
                        <div className="dad">
                            <img src="per.jpg" alt="" /><br />
                            <p>Dad</p>
                        </div>
                        <div className="mom">
                            <img src="per.jpg" alt="" />
                            <p>Mom</p>
                        </div>
                    </div>
                </div>
                <div className="child parent" id="child">
                    <Pair/>
                    <Pair/>
                    <Pair/>
                </div>
            </div>
        </div>
    )
}

export default Tree