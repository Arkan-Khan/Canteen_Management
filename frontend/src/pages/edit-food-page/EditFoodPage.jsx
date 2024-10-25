import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../../components/loader/Loader";
import { editFoodItem, getSingleFoodItem } from "../../redux/food/food.actions";
import "./EditFoodPage.css";

const AddFoodPage = ({
  isAuthenticated,
  loading,
  getSingleFoodItem,
  history,
  match,
  food,
  editFoodItem,
}) => {
  const [foodType, setFoodType] = useState("breakfast"); // Default value
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  // Fetch food item when the component mounts
  useEffect(() => {
    getSingleFoodItem(match.params.id);
  }, [getSingleFoodItem, match]);

  // Update state only if food has been fetched
  useEffect(() => {
    if (food) {
      setFoodType(food.foodType || "breakfast");
      setName(food.name || "");
      setPrice(food.price || "");
      setQuantity(food.quantity || "");
      setImage(food.image || null);
    }
  }, [food]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("foodType", foodType);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("image", image);
    editFoodItem(formdata, match.params.id, history);
  };

  // Show loader if data is still being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="root">
      <div className="add-food-div">
        <div>
          <h1>Edit food item</h1>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="price"
              className="input"
              placeholder="Price"
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="quantity"
              className="input"
              placeholder="Quantity"
              value={quantity || ""}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br />
            <select
              name="foodType"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="breakfast">Breakfast</option>
              <option value="indian">Indian</option>
              <option value="chinese">Chinese</option>
              <option value="chat">Chat</option>
            </select>
            <br />
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {image && (
            <img
              alt="img"
              src={typeof image === "object" ? URL.createObjectURL(image) : image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.food.loading,
  food: state.food.food,
});

export default connect(mapStateToProps, { getSingleFoodItem, editFoodItem })(
  AddFoodPage
);