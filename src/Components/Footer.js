import "../styles/footer.css"

const Footer =()=>{
    return(
        <div className="footer-wrapper"><div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
   my app
            </a>
            <span class="text-muted">© 2021 Company, Inc</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">privacy Policy</li>
            <li class="ms-3">Terms</li>
            <li class="ms-3">About us.</li>
          </ul>
        </footer>
      </div></div>
    )
};

export default Footer;