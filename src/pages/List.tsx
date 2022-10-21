import { useState, useEffect, useContext } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { AnimalType } from "../util/AnimalDataType";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimalContext } from "../context/animalContext";
import { animalsColumns } from "../util/columns";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
`;

const ListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const { saveAnimal } = useContext(AnimalContext);

  const animalsColumnsWithSaveBtn = [
    ...animalsColumns,
    {
      title: "Save",
      key: "save",
      render: (text: string, record: AnimalType) => (
        <Button
          onClick={() => {
            console.log("record", record);
            saveAnimal(record);
          }}
        >
          Save
        </Button>
      ),
    },
  ];

  const fetchAnimals = () => {
    setIsLoading(true);
    fetch("http://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div>
      <Link to={"/"}>Go To HomePage</Link>

      <Table
        columns={animalsColumnsWithSaveBtn}
        dataSource={list}
        loading={isLoading}
        pagination={false}
      />
    </div>
  );
};

export default ListPage;
