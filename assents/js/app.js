// navBar script for all pages
const nav = document.getElementById("container-insert");
function navBar() {
  const navBar = `
  <header class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
         <a class="navbar-brand" href="#">James</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                  <a class="nav-link" href="index.html">Home</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="projects.html">Projects</a>
               </li>
            </ul>
         </div>
      </div>
   </header>
      `;
  nav.innerHTML = navBar;
}

navBar();

const footer = document.getElementById("footer-insert");

function footerBar() {
   const footerBar = `
   <footer id="footer" class="footer mt-auto py-3">
   <div class="container text-center">
     <div class="footer-links">
       <a href="https://www.linkedin.com/in/james-douglas-689053247/" target="_blank"
         ><i class="fab fa-linkedin fa-lg"></i
       ></a>
       <a href="https://github.com/Douglas-James" target="_blank"
         ><i class="fab fa-github fa-lg"></i
       ></a>
     </div>
   </div>
 </footer>
 `;
   footer.innerHTML = footerBar;
};

footerBar();
