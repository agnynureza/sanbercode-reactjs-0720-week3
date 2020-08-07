import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
		<nav style = {{backgroundColor:"#563d7c"}} class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
			<a class="navbar-brand" href="#">React JS Bootcamp</a>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<Link class="nav-link" to="/">Tugas 11</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/tugas12">Tugas 12</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/tugas13">Tugas 13</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/tugas14">Tugas 14</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link"  to="/tugas15">Tugas 15</Link>
					</li>
				</ul>
			</div>
		</nav>
    </>
  )
}

export default Nav