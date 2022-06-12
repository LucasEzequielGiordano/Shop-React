import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState({});
  const { detailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "products", detailId);
    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && navigate("/404", { replace: true });
        setProducts({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [navigate]);

  return (
    <div>
      {loader ? (
        <Loading greeting={"Cargando..."} />
      ) : (
        <div className="containerDetail">
          <ItemDetail product={products} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
