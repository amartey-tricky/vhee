"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date("29 July 2024 16:00:00 GMT+0000").getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance > 0) {
				setTimeLeft({
					days: Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
					),
					minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((distance % (1000 * 60)) / 1000),
				});
			} else {
				clearInterval(interval);
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				});
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="flex flex-col items-center justify-evenly space-y-12">
			<h3 className="font-bold text-5xl">Street Interview Launch</h3>
			<div className="font-mono text-3xl font-semibold">
				<span className="px-6 py-2 bg-slate-500 rounded-md bg-opacity-30">{timeLeft.days}</span> Days : &nbsp;
        <span className="px-6 py-2 bg-slate-500 rounded-md bg-opacity-30">{timeLeft.hours}</span> Hours : &nbsp;
				<span className="px-6 py-2 bg-slate-500 rounded-md bg-opacity-30">{timeLeft.minutes}</span> Minutes : &nbsp;
				<span className="px-6 py-2 bg-slate-500 rounded-md bg-opacity-30">{timeLeft.seconds}</span> Seconds
			</div>
		</section>
	);
}
