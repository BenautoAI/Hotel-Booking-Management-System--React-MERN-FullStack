import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate user initials from first and last name
 * @param firstName - User's first name
 * @param lastName - User's last name
 * @returns Two-letter initials (uppercase)
 */
export function getUserInitials(firstName?: string, lastName?: string): string {
  if (!firstName && !lastName) return "U";
  
  const first = firstName?.trim().charAt(0).toUpperCase() || "";
  const last = lastName?.trim().charAt(0).toUpperCase() || "";
  
  if (first && last) return `${first}${last}`;
  if (first) return first;
  if (last) return last;
  
  return "U";
}
