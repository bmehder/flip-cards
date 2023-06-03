import { writable } from 'svelte/store'

export const items = writable(null)
export const error = writable(null)
export const isLoading = writable(true)