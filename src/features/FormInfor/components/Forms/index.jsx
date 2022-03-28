import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormGroup, FormText, Input, Label } from "reactstrap";

Forms.propTypes = {};
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function Forms(props) {
  const [inputValue, setInputValue] = useState({
    phone: "",
    email: "",
    password: "",
    gender: "",
    describe: "",
    file: "",
    radio: "2",
    checkbox: "",
    image: "",
  });

  const handleInput = (e) => {
    let { value, name, checked, type } = e.target;
    setInputValue({
      ...inputValue,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const uploadImage = async (e) => {
    let file = e.target.files[0];
    let base64 = await convertBase64(file);
    setInputValue({
      ...inputValue,
      image: base64,
    });
  };
  console.log(inputValue);
  return (
    <div>
      <FormGroup>
        <Label for="nameLabel">Họ tên:</Label>
        <Input type="text" name="name" id="nameLabel" placeholder="Họ tên" />
      </FormGroup>
      <FormGroup>
        <Label for="phoneLabel">Số điện thoại</Label>
        <Input
          type="text"
          name="phone"
          id="phoneLabel"
          placeholder="Số điện thoại"
        />
      </FormGroup>
      <FormGroup>
        <Label for="emailLabel">Email</Label>
        <Input type="email" name="email" id="emailLabel" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="passwordLabel">Password</Label>
        <Input
          type="password"
          name="password"
          id="passwordLabel"
          placeholder="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Giới tính</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option value="1">Nam</option>
          <option value="2">Nữ</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="describeLabel">Miêu tả</Label>
        <Input type="textarea" name="describe" id="describeLabel" />
      </FormGroup>
      <FormGroup>
        <Label for="imageLabel">Hình ảnh</Label>
        <Input
          type="file"
          name="image"
          id="imageLabel"
          onChange={uploadImage}
        />
        {inputValue.image !== "" && (
          <img
            src={inputValue.image}
            height="200px"
            width="200px"
            alt="image"
          />
        )}
      </FormGroup>
      <FormGroup>
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="radio"
              value="1"
              checked={inputValue.radio === "1"}
              onChange={handleInput}
            />
            1
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="radio"
              value="2"
              checked={inputValue.radio === "2"}
              onChange={handleInput}
            />{" "}
            2
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="checkbox"
            value="2"
            onChange={handleInput}
          />{" "}
          Check me out
        </Label>
      </FormGroup>
    </div>
  );
}

export default Forms;
