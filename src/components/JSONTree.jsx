import React, { useEffect, useState } from "react";
import { data } from "./family";

export default function JSONTree(props) {
    
    const [markup, setMarkup] = useState(['<ul>']);

    const getDetails = (details) => {
        // iterate over the detail items of object
        for (const detail in details) {
          // fetch the value of each item
          if (detail == "img") {
            markup.push(
                `<span> ${details[detail]} </span>`
            );
          } else if (detail == "children") {
            markup.push("</div><ul>");
            details[detail].forEach((element) => {
              getItems(element);
            });
      
            markup.push("</ul>");
          } else {
            markup.push(`<span> ${details[detail]} </span>`);
          }
        }
    };

    const getItems = (items) => {
        for (const item in items) {
            setMarkup([...markup, "<li><div>${item}</div></li>"]);
            let details = items[item];
            getDetails(details);
            markup.push("</li>");
        }
    }

    const createList = (data) => {
        const type = typeof data;
        switch(type) {
            case 'object':
                getItems(data);
                break;
        }
    }

    useEffect(() => {
        createList(data);
        markup.push("</ul>");
        // $("#list").html(markup.join(""));
    }, []);

    return(
        <div className="tree-container">
            <p>Family Tree</p>
            {markup}
        </div>
    );

}