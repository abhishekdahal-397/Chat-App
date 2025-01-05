"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(undefined);
export function AppWrapprer({ children }: { children: React.ReactNode }) {
	let [name, setName] = useState("Abhishek");
	let [data, setData] = useState(null); // Store fetched data here
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/user/67766d7f86eff18ef61ecffe"
				); // Replace with your backend API endpoint
				const result = await response.json();
				setData(result); // Store the fetched data in state
			} catch (error) {
				console.error("Failed to fetch data:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);
	return (
		<AppContext.Provider value={{ name, setName, data, loading }}>
			{children}
		</AppContext.Provider>
	);
}
export function useAppContext() {
	return useContext(AppContext);
}
