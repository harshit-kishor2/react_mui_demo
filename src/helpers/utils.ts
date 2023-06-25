export const wait = (seconds: number): Promise<any> => {
  return new Promise((resolve: (value: any) => void) =>
    setTimeout(resolve, 1000 * seconds)
  )
}

export const capitalizeString = (s: string): string => {
  return s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s
}
