import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Products(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        let url = "https://api.github.com/users";
        axios.get(url).then(resp).catch(error);
    }, [])

    const resp = (item) => {
        console.log(item.data);
        setData(item.data)
    }

    const error = (err) => {
        console.log("404 Error");
    }

    let Login = prompt("Enter Login");
    let ID = prompt("Enter ID");

    let UserFound = data.find(obj => obj.login == Login && obj.id == ID)


    return (
        <div className='row container'>



            {
                UserFound ?
                    <div className="card col-4 mx-2 my-3" style={{ width: "14rem" }}>
                        <img src={UserFound.avatar_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{UserFound.login}</h5>
                            <p className="card-text">{UserFound.node_id}</p>
                            <a href="#" className="btn btn-primary">{UserFound.id}</a>
                        </div>
                    </div>
                    :
                    <h1>Invalid </h1>
            }





        </div>
    )
}

export default Products