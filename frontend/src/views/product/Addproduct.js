import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { errorToaster, successToaster } from '../../common/common-validation/common';
import { addProduct } from '../../redux/actions/actions';

const initialState = {
  id: "",
  productName: "",
  description: "",
  productImg: "",
  price: "",
};

const Addproduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [image, setImage] = useState("")
  const products = useSelector((state) => state.products.products)
  const [productData, setProductData] = useState(initialState);

  const { productName, description, productImg, price } = productData

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      setLoggedIn(false)
    }
    else {
      setLoggedIn(true)
      if (loggedIn === true) {
      }
    }

    if (id) {
      setEdit(true);
      console.log(id)
      const singleProduct = products.find((data) => data.id === id);
      console.log(singleProduct)
      setProductData({ ...singleProduct });
      console.log(productData)
    } else {
      setEdit(false);
    }
  }, [loggedIn, id])

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const onSubmitProduct = (e) => {
    e.preventDefault()
    const data = {
      id: uuidv4(),
      productName: productData.productName,
      productImg: image,
      description: productData.description,
      price: productData.price 
    }
    console.log("productData", data)
      if(data){
        dispatch(addProduct(data))
        successToaster("Product added successful")
      }
      else{
        errorToaster("Enter product data!!")
      }
  }

  return (
    <>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-center border-bottom py-2 mt-4'>
          <h4 className='text-dark'>Add Product</h4>
        </div>

        <form className='p-3 mb-5 mx-3' onSubmit={onSubmitProduct}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input type="text"
              name='productName'
              className="form-control"
              value={productName || ""}
              id="productName"
              onChange={onInputChange}
              required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control"
              id="description"
              name='description'
              value={description || ""}
              rows="3"
              onChange={onInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="productImg" className="form-label">Product Image</label>
            <input type="file"
              name='productImg'
              className="form-control-f(ile"
              onChange={(e) => setImage(e.target.files[0].name)}
              id="productImg" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text"
              name='price'
              className="form-control"
              value={price || ""}
              id="price"
              onChange={onInputChange}
              required />
          </div>

          {edit? 
          <button className="btn btn-primary">Update</button>
          :
          <button type="submit" className="btn btn-primary">Submit</button>
        }
          
        </form>
      </div>
    </>
  )
}

export default Addproduct