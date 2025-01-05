"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);
export function AppWrapprer({ children }: { children: React.ReactNode }) {
	let [name, setName] = useState("Abhishek");
	return (
		<AppContext.Provider value={{ name, setName }}>
			{children}
		</AppContext.Provider>
	);
}
export function useAppContext() {
	return useContext(AppContext);
}
