import { useState } from "react";

const FormNew = () => {
  const [items, setItems] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    password: "",
    number: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, formValues]);
    setFormValues({
      firstName: "",
      password: "",
      number: null,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formValues.password  }
        />

        <input
          type="number"
          placeholder="Enter number"
          name="number"
          onChange={handleChange}
          value={formValues.number}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {items.map((item) => {
          return (
            <>
              <li>{item.firstName}</li>
              <li>{item.password}</li>
              <li>{item.number}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default FormNew;
