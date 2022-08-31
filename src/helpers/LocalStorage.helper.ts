/**
 * save user 'public' data on Local Storage
 * @param key 
 * @param value 
 * @returns {undefined}
 */
export const setAndPersistLocalStorage = <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify({ ...value }))

/**
 * get user 'public' data from Local Storage
 * @param key 
 * @returns {store}: UserInfo
 */
export const getLocalStorage = (key: string) => localStorage.getItem(key)

/**
 * remove user 'public' data from Local Storage
 * @param key 
 * @returns {undefined}
 */
export const clearLocalStorage = (key: string) => localStorage.removeItem(key)