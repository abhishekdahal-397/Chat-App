"use client";
import React, { useEffect } from "react";
import axios from "axios";

const page = () => {
	useEffect(() => {
		axios.get("");
		try {
		} catch (error) {}
	}, []);

	return (
		<div>
			<h1>Page 1</h1>
		</div>
	);
};

export default page;
