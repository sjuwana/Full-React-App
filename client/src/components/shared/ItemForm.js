import { Link } from "react-router-dom";
// it s gonna take object
const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit}>
      <lable>Title</lable>
      <input
        placeholder="A vetted Item"
        defaultValue={item.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="http://coolstuff.com"
        defaultValue={item.link}
        name="link"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
//defaultValue => you won't be able to type.

export default ItemForm;
