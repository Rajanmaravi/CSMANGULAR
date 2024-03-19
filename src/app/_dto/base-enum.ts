export enum Year {
  Year2023 = 2023,
  Year2024 = 2024,
  Year2025 = 2025,
}

export enum FiscalYear {
  FY_23_24 = 'FY-23-24',
  FY_24_25 = 'FY-24-25',
  FY_25_26 = 'FY-25-26'
}
  
export enum Month {
  January = '1',
  February = '2',
  March = '3',
  April = '4',
  May = '5',
  June = '6',
  July = '7',
  August = '8',
  September = '9',
  October = '10',
  November = '11',
  December = '12',
}

export interface MonthOption {
  name: string;  // Corrected type to string
  value: number;
}

export const getMonthOptions = (): MonthOption[] =>
  Object.keys(Month).map(key => ({ name: key, value: parseInt(Month[key as keyof typeof Month], 10) }));


  export const MONTHS = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' }
  ];