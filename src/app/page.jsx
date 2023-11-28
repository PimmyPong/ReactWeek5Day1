"use client";

import { useState } from "react";
import Divider from "./components/Divider.jsx";
import defaultAliensPlanets from "../lib/index.js";

export default function Home() {
	const [aliensPlanets, setAliensPlanets] = useState(defaultAliensPlanets);
	return (
		<main>
			<Divider number="1" />

			<div className="blueSquare"></div>

			<Divider number="2" />

			<img src="/images/meme.webp" width="100%" height="100%" />

			<Divider number="3" />

			<h3>Alien Planets</h3>

			<div className="container">
				{aliensPlanets.map((alien) => {
					return (
						<div className="card" key={alien.id}>
							<p>
								{alien.emoji}
								<br />
								{alien.name}
								<br />
								{alien.name} is {alien.distanceFromEarth}
								miles from earth. {alien.name} is
								{alien.hasLife
									? "believed to have life"
									: "believed to not have life"}{" "}
								The atmosphere of
								{alien.name} is {alien.atmosphere}
							</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
