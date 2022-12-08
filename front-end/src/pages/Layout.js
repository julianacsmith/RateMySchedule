import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
    <>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Me</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/blog">Travel Blog</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/comments">Comments</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
    )
};

export default Layout;