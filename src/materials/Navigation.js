import React from 'react'


function Navigation () {
    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href='/landingPage'>BOMBALABAP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id ="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="Hompage">Home </a>
      <a class="nav-item nav-link" href="Login">Login</a>
      <a class="nav-item nav-link" href="Registration">Registration</a>
      <a class="nav-item nav-link" href="About">About Us</a>
      <a class="nav-item nav-link" href="landingPage">Job</a>
    </div>
  </div>
</nav>
        </div>
    );
}
  export default Navigation;
