import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "india",
      states:[],
    cities: [],
    city: ""
    };

   this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }

  handleSubmitCity(event) {
    alert("Your selected City: " + this.state.city);
    event.preventDefault();
  }

  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
    .map(e => e[comp])

    .map((e, i, final) => final.indexOf(e) === i && i)

    .filter(e => arr[e])

    .map(e => arr[e]);

    return unique;
  }

  componentDidMount() {
    const cities = require("./task.json");
    this.setState({ cities: cities })
  }

  render() {
    const states = require("./task.json");
    const uniqueState = this.getUnique(states.world, "state");

    const uniqueCity = this.getUnique(this.state.cities, "tag");

    const cities = this.state.cities;
    const city = this.state.city;

    const filterDropdown = cities.filter(function(result) {
      return result.tag === city;
    });

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Any State:
          <select value={this.state.value} onChange={this.handleChange} >
          <option value="state-01">Andhra Pradesh	</option>
     <option value="state-02">Arunachal Pradesh	</option>
     <option value="state-03">Assam</option>
     <option value="state-04">Bihar</option>
     <option value="state-05">Delhi</option>
     <option value="state-06">Chhattisgarh</option>
     <option value="state-07">Delhi</option>
     <option value="state-08">Goa</option>
     <option value="state-09">Gujarat</option>
     <option value="state-10">Haryana</option>
     <option value="state-11">Himachal Pradesh</option>
     <option value="state-12">Jammu and Kashmir</option>
     <option value="state-13">Jharkhand</option>
     <option value="state-14">Karnataka</option>
     <option value="state-15">Kerela</option>
     <option value="state-16">Madhya Pradesh</option>
     <option value="state-17">Maharashtra</option>
     <option value="state-18">Manipur</option>
     <option value="state-19">Meghalaya</option>
     <option value="state-20">Mizoram</option>
     <option value="state-21">Nagaland</option>
     <option value="state-22">Orissa</option>
     <option value="state-23">Tripura</option>
     <option value="state-24">Punjab</option>
     <option value="state-25">Rajasthan</option>
     <option value="state-26">Sikkim</option>
     <option value="state-27">Tamil Nadu</option>
     <option value="state-28">Uttar Pradesh</option>
     <option value="state-29">West Bengal</option>

     <option selected value="india">India</option>
     </select>
          </label>
          <input type="submit" value="Submit" />
          <br />
          <br />
          <label>
            cities
            <select>
              {this.state.states.map(item => (
                <option key={item.id} value={item.states}>
                  {item.state}
                </option>
              ))}
              {console.log(this.state.states)}
            </select>
          </label>
          <br />
          <br />

          <label>
            Related Cities
            <select>
              {uniqueState.map(item => (
                <option key={item.id} value={item.state}>
                  {item.state}
                </option>
              ))}
              {console.log(this.state.states)}
            </select>
          </label>
        </form>

          <form onSubmit={this.handleSubmitCity}>
            <br />
            <br />
          <label>
            Cities
            <select
              value={this.state.city}
              onChange={this.handleChangecity}
            >
              {uniqueCity.map(city => (
                <option key={city.id} value={city.tag}>
                  {city.tag}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>
            {filterDropdown.map(city => (
              <div key={city.id} style={{ margin: "10px" }}>
                {city.city}
                <br />
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />,
  document.getElementById("root")
);

