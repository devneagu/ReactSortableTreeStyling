import React, { Component } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";
import "./index.scss";
import { motion } from "framer-motion";

const ReactSortableTreeStyle = {
  rowHeight: 32, //24
  scaffoldBlockPxWidth: 24 //16
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: "Chicken",
          expanded: true,
          children: [{ title: "Egg" }, { title: "Egg" }, { title: "Egg" }]
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          {...ReactSortableTreeStyle}
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
