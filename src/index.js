import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SortableTree from "react-sortable-tree";
import "./index.scss";
import { motion, AnimatePresence } from "framer-motion";

const index = 3;
const ReactSortableTreeStyle = {
  rowHeight: (1 + index) * 8,
  scaffoldBlockPxWidth: 8 * index
};

function App() {
  let ref = React.createRef();
  const [treeData, setTreeData] = useState([
    {
      title: "Chicken",
      expanded: true,
      children: [{ title: "Egg" }, { title: "Egg" }, { title: "Egg" }]
    }
  ]);
  useEffect(() => {
    if (ref.current === null || ref.current === 5) {
      ref.current = 0;
    }
    console.log(ref);
  }, [ref]);
  return (
    <AnimatePresence initial={false}>
      <div style={{ height: 500 }}>
        <SortableTree
          {...ReactSortableTreeStyle}
          treeData={treeData}
          onChange={(treeData) => setTreeData(treeData)}
          generateNodeProps={({ node, path }) => {
            console.log(node, path);
            ref.current = ref.current + 1;
            console.log(ref);
            return {
              title: (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: ref.current / 4 }}
                >
                  <p className="tripleDots">{node.title}</p>
                </motion.div>
              )
            };
          }}
        />
      </div>
    </AnimatePresence>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
