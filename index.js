import fs from "fs/promises";

/*fs.readFile Callback:

The first argument of the callback is err, which contains any error that occurred while reading the file.
The second argument is data, which contains the file content if no error occurred. 

fs.readFile("./content.txt", "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File read successfully:", data);

    fs.writeFile("./copy.txt", data, "utf-8", function (err) {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File written successfully");
    });
});
*/

fs.readFile("./content.txt", "utf-8").
then((data)=>fs.writeFile("./copy.txt", data, "utf-8")).
then(()=>console.log("File written successfully")).
catch((err)=>console.error("Error reading/writing file:", err));