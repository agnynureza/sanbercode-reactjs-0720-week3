import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">React JS Bootcamp</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#"><Link to="/">Tugas 11</Link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#"><Link to="/tugas12">Tugas 12</Link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#"><Link to="/tugas13">Tugas 13</Link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#"><Link to="/tugas14">Tugas 14</Link></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">	<Link to="/tugas15">Tugas 15</Link></a>
					</li>
				</ul>
			</div>
		</nav>
    </>
  )
}

export default Nav