// lib/auth.js
export function requireAdmin(user) {
  if (!user || user.role !== "admin") {
    throw new Error("Not authorized");
  }
  return true;
}
