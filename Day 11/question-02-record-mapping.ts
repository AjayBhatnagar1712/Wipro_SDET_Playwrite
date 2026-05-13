// Question 2: Record Mapping for Configuration

enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest",
}

type PermissionMap = Record<Role, boolean>;

const permissions: PermissionMap = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};

console.log(permissions);

// TypeScript will throw an error if any role is missing:
// const invalidPermissions: PermissionMap = {
//   [Role.Admin]: true,
//   [Role.Editor]: true,
// };
