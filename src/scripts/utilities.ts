// Put commonly used functions here


export default function GetUserTheme(): string {
	let themeSetting: string;
	let themeSetting_LocalStorage = localStorage.getItem('theme');
	if (themeSetting_LocalStorage) {
		themeSetting = themeSetting_LocalStorage;
	}
	else {
		const ifUserPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		themeSetting = ifUserPreferDark ? "dark" : "light";
	}

    return themeSetting;
}