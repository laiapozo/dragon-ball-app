import React from "react";
import "../scss/components/Filters.scss";

const Filters = ({
  handleNameChange,
  handleKiMinChange,
  handleKiMaxChange,
}) => {
  return (
    <form>
      <fieldset className="container">
        <h3>What Dragon Ball character are you looking for?</h3>
        <div>
          <label htmlFor="name">Search by name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(ev) => {
              handleNameChange(ev.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="ki">Search by Ki</label>
          <select
            name="min-ki"
            id="min-ki"
            onChange={(ev) => {
              handleKiMinChange(ev.target.value);
            }}
          >
            <option value="from">From</option>
            <option value="0">0</option>
            <option value="10001">10.001</option>
            <option value="100001">100.001</option>
            <option value="1000001">1.000.001</option>
            <option value="10000001">10.000.001</option>
            <option value="100000001">100.000.001</option>
          </select>
          <select
            name="max-ki"
            id="max-ki"
            onChange={(ev) => {
              handleKiMaxChange(ev.target.value);
            }}
          >
            <option value="to">To</option>
            <option value="10000">10.000</option>
            <option value="100000">100.000</option>
            <option value="1000000">1.000.000</option>
            <option value="10000000">10.000.000</option>
            <option value="100000000">100.000.000</option>
            <option value="1000000000">1.000.000.000</option>
          </select>
        </div>
        <input type="submit" value="Search" />
      </fieldset>
    </form>
  );
};

export default Filters;
