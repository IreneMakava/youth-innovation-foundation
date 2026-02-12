const STORAGE_KEY = "yif_user";
const ID_KEY = "yif_membership_id";

export function getStoredUser() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setStoredUser(user) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error(e);
  }
}

export function getStoredMembershipId() {
  return localStorage.getItem(ID_KEY);
}

export function setStoredMembershipId(id) {
  localStorage.setItem(ID_KEY, id);
}

export function generateMembershipId() {
  const prefix = "YIF";
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).slice(2, 10).toUpperCase();
  return `${prefix}-${year}-${random}`;
}

export function loginUser(email, password) {
  const user = getStoredUser();
  if (!user || user.email !== email || user.password !== password) return null;
  return user;
}
