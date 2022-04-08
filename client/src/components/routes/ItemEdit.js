import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import ItemForm from "../shared/ItemForm";
import apiUrl from "../../apiConfig";

function ItemEdit() {
  const navigate = useNavigate();
  const { id } = useParams(); //get the id from the current object to update
  const [item, setItem] = useState({
    title: "",
    link: "",
  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${apiUrl}/items/${id}`);
        console.log("itemEdit", response);
        setItem(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name]: event.target.value };
    //assigned the empty state with the updatedField into one object
    const editedItem = Object.assign(item, updatedField);
    //assigned the new object to be updated to the state
    setItem(editedItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/items/${id}`,
      method: "PUT",
      data: item,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/items/${id}`);
    }
  }, []);

  return (
    <Layout>
      <ItemForm
        item={item}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/items/${id}`}
      />
      <h4>{item.title}</h4>
      <p>Link: {item.link}</p>
    </Layout>
  );
}

export default ItemEdit;
