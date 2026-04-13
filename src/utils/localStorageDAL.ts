import type { User } from "../constants/authTypes";

const STORAGE_KEY = "users";
const CURRENT_USER_STORAGE_KEY = "currentUser";

function getUsers(): User[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  return JSON.parse(data);
}

function saveUsers(users: User[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function addUser(newUser: User): void {
  const users = getUsers();
  users.push(newUser);
  saveUsers(users);
}

export function getUser(email: string): User | undefined {
  const users = getUsers();
  const user = users.find((user) => user.email === email);
  return user;
}

export function updateUser(email: string, updatedFields: Partial<User>): void {
  const users = getUsers();
  const updatedUsers = users.map((user) =>
    user.email === email ? { ...user, ...updatedFields } : user
  );
  saveUsers(updatedUsers);
}

export function deleteUser(email: string): void {
  const users = getUsers();
  const filteredUsers = users.filter((user) => user.email !== email);
  saveUsers(filteredUsers);
}

export function changeCurrentUser(user: User): void {
  sessionStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user))
}

export function getCurrentUser(): null | User {
  const user = sessionStorage.getItem(CURRENT_USER_STORAGE_KEY);
  if (!user) return null;
  return JSON.parse(user);
}