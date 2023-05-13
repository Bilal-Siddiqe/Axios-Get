import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Products() {

    const [data, setData] = useState([]);
    
    useEffect(() => {

        let url = "https://dummyjson.com/products";
        axios.get(url)
            .then((item) => {
                console.log(item.data.products);
                setData(item.data.products)
            })
            .catch((err) => {
                console.log("404 Error");
            })

    }, [])


    return (
        <div className='row container'>

            {
                data.map((abc) => {

                    return (
                        <div className="card col-4 mx-2 my-3" style={{ width: "14rem" }}>
                            <img src={abc.thumbnail} className="card-img-top" alt="..." /> 
                            <div className="card-body">
                                <h5 className="card-title">{abc.title}</h5>
                                <p className="card-text">{abc.description}</p>
                                <a href="#" className="btn btn-primary">{abc.price}</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Products