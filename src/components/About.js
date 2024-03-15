import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div className='container mx-5'>
    <div className="card" style = {{
        width: "18rem"
    }}>
  <img src="img.jpg" className="card-img-top" alt="This is a building." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
    </>
  )
}
