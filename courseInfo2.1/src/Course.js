import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.map((p) => p.exercises).reduce((a, b) => a + b, 0)}
      />
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.name} part={p} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <p>{part.name}</p>
      <p>{part.exercises}</p>
    </div>
  );
};
const Total = ({ total }) => {
  return <h3>{total}</h3>;
};

export default Course;
