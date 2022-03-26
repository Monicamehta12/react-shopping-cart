import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { errorToaster, successToaster } from '../../common/common-validation/common'
import { deleteProduct } from '../../redux/actions/actions';


const Viewproduct = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const dispatch = useDispatch();
    const [product, setProduct] = useState([])
    const [viewDescription, setViewDescription] = useState(true)
    const products = useSelector((state) => state.products.products)
    const navigate = useNavigate()

    console.log("products", products)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            setLoggedIn(false)
            if (loggedIn === false) {
                navigate("/auth/login")
                errorToaster("You are not logged in!")
            }
        }
        else {
            setLoggedIn(true)
        }
    }, [loggedIn, navigate])

    const handleEdit = (id) => {

    }

    const handleDelete = (id) => {
        console.log("id", id)
        dispatch(deleteProduct(id))
        successToaster("Product deleted successfully")
    }

    return (
        <>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-center border-bottom py-2 mt-4'>
                    <h4 className='text-dark'>Products List</h4>
                </div>
                {products ?
                    <div className='row my-5 mx-2'>
                        {products.map((data, index) =>
                        (
                            <div className='col-12 col-md-4'>
                                <div className="card border-0 shadow mb-4">
                                    <Link to="">
                                        <div className="img-p d-flex flex-column position relative w-100 overflow-hidden">
                                            <img src={`../Images/${data.productImg}`} className="product-img position-relative card-img-top img-fluid" alt="" />
                                            <div className='position-absolute edit-delete-icons'>
                                                <Link to={`/products/addproduct/${data.id}`}><button className="icon-style me-2"><i className="uil uil-pen fs-5"></i></button></Link>
                                                <button onClick={() => handleDelete(data.id)} className="icon-style"><i className="uil uil-trash-alt fs-5"></i></button>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="card-body">
                                        <h5>{data.productName}</h5>
                                        <div className="price">
                                            <span className="price">{data.price}</span>
                                        </div>
                                        <Link to=""><button className='btn btn-primary my-2 d-flex mx-auto'>Add to Cart</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    : (
                        ""
                    )
                }
            </div>
        </>

    )
}

export default Viewproduct