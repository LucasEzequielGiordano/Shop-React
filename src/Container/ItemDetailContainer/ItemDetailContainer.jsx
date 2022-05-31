import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
   const db= getFirestore() 

   const dbQuery= doc(db,"products",detailId)

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
