import React from 'react';

const Graph = (props) => {
	return (
        <div class="container-sm">
<table class="table table-hover table-sm table-responsive">
  <thead class="thead-dark">
  <tr>
      <th>Nutrition Information</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Calories</td>
      <td>1</td>
    </tr>
    <tr>
      <td scope="row">Protein</td>
      <td>2</td>
    </tr>
    <tr>
      <td scope="row">Carbohydrates</td>
      <td>3</td>
    </tr>
    <tr>
      <td scope="row">Fiber</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>
	);
};
export default Graph;