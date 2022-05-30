import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    getFetch(detailId)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);


  
  // useEffect(() => {
  //   const db = getFirestore()
  //   const dbQuery = doc(db, "products", "2hC3UtwnKzGELMxOF3pR");
  //   getDoc(dbQuery).then(resp => setProducts( { id: resp.id, ...resp.data() } ))
  // }, [])

  // console.log(products)


// con esto traigo un solo documento

  useEffect(() => {
   const db= getFirestore() //funcion predeterminada de firestore

   const dbQuery= doc(db,"products","2hC3UtwnKzGELMxOF3pR")

   getDoc(dbQuery)
   .then(resp=>setProducts({id: resp.id , ...resp.data()}))
  
    
  }, []) 


  return (
    <div>
      <ItemDetail product={products} />
    </div>
  );
};

export default ItemDetailContainer;
