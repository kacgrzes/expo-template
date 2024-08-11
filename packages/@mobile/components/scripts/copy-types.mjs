import fs from "fs";
import path from "path";
import glob from "glob";
import clipboardy from "clipboardy";

// Function to read file contents
function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

// Function to find and concatenate all *.types.ts files
function concatenateTypeFiles(directory) {
  return new Promise((resolve, reject) => {
    glob(path.join(directory, "**/*.types.ts"), (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const contents = files.map((file) => readFile(file)).join("\n\n");
      resolve(contents);
    });
  });
}

// Main function
async function main() {
  try {
    const directory = path.join(process.cwd(), "src");
    const concatenatedContent = await concatenateTypeFiles(directory);

    // Copy to clipboard
    await clipboardy.write(concatenatedContent);

    console.log(
      "All *.types.ts file contents have been copied to the clipboard."
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the script
main();
