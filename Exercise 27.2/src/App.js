import React from 'react'

export default function App() {
  return (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="https://www.codeyoung.com/" class="navbar-brand">Codeyoung</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="https://www.codeyoung.com/" class="nav-item nav-link active" target="blank">Home</a>
                <a href="https://www.codeyoung.com/maths" class="nav-item nav-link" target="blank">Services</a>
                <a href="https://www.codeyoung.com/about-us" class="nav-item nav-link" target="blank">About</a>
                <a href="https://book-a-demo.codeyoung.com/#/?redirectFrom=mainSite" class="nav-item nav-link"target="blank">Contact</a>
            </div>
            <div class="navbar-nav ms-auto">
                <a href="https://book-a-demo.codeyoung.com/#/?redirectFrom=mainSite" class="nav-item nav-link">Register</a>
                <a href="https://studentportal.codeyoung.com/#/" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav>


  )
}

