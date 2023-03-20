
export function toDate(date: string): number[] {
    const [day, month, year] = date.split('/' || '-');
    if (date === '' || date === null || date === undefined || date.length === 0) {
        throw new Error('date vide');
    }
    if (year.length !== 4 || Number(month) > 12 || Number(day) > 31){
        throw new Error('date invalide');
    }
    return [parseInt(day), parseInt(month), parseInt(year)];
}