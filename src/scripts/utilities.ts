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

export function GetDuration(startDate: Date, endDate: Date) : string {
    let yearDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    let dayDiff = endDate.getDate() - startDate.getDate();
    
    // If the day difference is negative, adjust month and day
    if (dayDiff < 0) {
        monthDiff--;
        // Get the number of days in a month for the month and add it to the negative day
        dayDiff += new Date(startDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
    }

    // If the month difference is negative, adjust the year difference accordingly
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    let duration = "";

    if (yearDiff > 0)
        duration += `${yearDiff} year` + (yearDiff > 1 ? "s" : ""); //  to do : add s if plural
    
    if (monthDiff > 0) {
        duration += (duration ? ", " : "") + `${monthDiff} month` + (monthDiff > 1 ? "s" : "");
    }

    if (dayDiff > 0) {
        duration += (duration ? ", " : "") + `${dayDiff} day` + (dayDiff > 1 ? "s" : "");
    }

    return duration;
}

export function FormatHeadingToLink(heading: string): string {
    return heading
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll(/[&?#\/\\%+='"`[\]{}()^~|:]/g, "");
}