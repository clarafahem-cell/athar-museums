const STORAGE_KEY = "athar_users";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function userExists(email) {
  const clean = email.trim().toLowerCase();
  return getUsers().some((user) => user.email === clean);
}

export function saveUser({ fullName, email }) {
  const users = getUsers();
  users.push({ fullName, email: email.trim().toLowerCase() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}