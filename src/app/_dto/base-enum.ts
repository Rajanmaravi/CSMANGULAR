export enum Year {
  Year2023 = 2023,
  Year2024 = 2024,
  Year2025 = 2025,
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

