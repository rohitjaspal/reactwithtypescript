import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  //const person = { name: '' , age: 0};

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //console.log('submitted')
    // if (nameRef.current !== null) {
    //   person.name = nameRef.current.value;
    // }
    // if (ageRef.current !== null) {
    //   person.age = parseInt(ageRef.current.value);
    // }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={ageRef}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value})
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
