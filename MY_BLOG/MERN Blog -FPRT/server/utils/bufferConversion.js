import DataUri from "datauri/parser";
import path from "path";

let dataURIChild = new DataUri();

module.exports = (originalName, buffer) => {
    const extension = path.extname(originalName);
    return dataURIChild.format(extension, buffer).content;
};

