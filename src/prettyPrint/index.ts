export const prettyPrint = (info: any, title?: string) => {
  console.log("-".repeat(80));
  if (title) {
    console.log(`${title}\n`);
  }
  console.log(info);
  console.log("-".repeat(80));
};
