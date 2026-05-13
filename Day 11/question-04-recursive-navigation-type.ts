// Question 4: Recursive Navigation Type

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const sidebarTree: FolderNode = {
  name: "root",
  files: ["README.md"],
  subFolders: [
    {
      name: "src",
      files: ["index.ts", "app.ts"],
      subFolders: [
        {
          name: "components",
          files: ["Header.ts", "Footer.ts"],
        },
      ],
    },
    {
      name: "assets",
      files: ["logo.png"],
    },
  ],
};

console.log(sidebarTree);
