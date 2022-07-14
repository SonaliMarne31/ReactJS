import React, { useEffect, useState } from "react";

export default function Pagination (props) {
    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const dataLen = data.length;
    const pageSize = 5;
    const [pageNo, setPageNo] = useState(1);
    const [pageData, setPageData] = useState([]);

    const updatePage = () => {
        let start = pageNo == 1 ? 0 : (pageNo-1) * 5 + 1;
        let end = start + pageSize;
        let temp = data;
        setPageData(temp.slice(start, end));
    }

    useEffect(() => {
        updatePage();
    }, []);


    useEffect(() => {
        updatePage();
    }, [pageNo]);

    return(
        <div className="page-container">
            <h3>Pagination</h3>
            <div>
                {pageData.map((p) => {
                    return(
                        <div className="page-data">{p} Data</div>
                    );
                })

                }
            </div>
            <div>Page {pageNo} / {dataLen/pageSize}</div>
            <div>
                <button onClick={() => setPageNo(pageNo-1)}>Prev</button>
                <button onClick={() => setPageNo(pageNo+1)}>Next</button>
            </div>
        </div>
    );
}