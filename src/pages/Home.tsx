import { useEffect, useContext, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { AnimalContext } from "../context/animalContext";
import { Table } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { timeColumns, animalsColumns } from "../util/columns";

const HomePage = () => {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));
  const [day, setDay] = useState(dayjs().format("dddd"));

  const { animal } = useContext(AnimalContext);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval ran");
      setDate(dayjs().format("YYYY-MM-DD"));
      setTime(dayjs().format("HH:mm:ss"));
      setDay(dayjs().format("dddd"));
    }, 5000);

    return () => {
      console.log("Interval cleared");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Link to={"/list"}> Go To ListPage</Link>

     <div>
        <p>Current date: {date}</p>
        <p>Current time: {time}</p>
        <p>Current day of the week: {day}</p>
      </div> 

      {animal ? (
        <Table
          columns={animalsColumns}
          dataSource={[animal]}
          pagination={false}
        />
      ) : (
        <p>No Animal Saved</p>
      )}
    </>
  );
};

export default HomePage;
