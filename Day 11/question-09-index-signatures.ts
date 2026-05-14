// Question 9: Index Signatures for Dynamic Metadata

type MetadataValue = string | number | boolean | Date;

interface UserMetadata {
  createdAt: Date;
  [key: string]: MetadataValue;
}

const metadata: UserMetadata = {
  createdAt: new Date("2026-05-13"),
  username: "ajay",
  loginCount: 25,
  isActive: true,
};

console.log(metadata);

// TypeScript will reject dynamic keys with unsupported values:
// const invalidMetadata: UserMetadata = {
//   createdAt: new Date(),
//   preferences: ["dark-mode"],
// };
