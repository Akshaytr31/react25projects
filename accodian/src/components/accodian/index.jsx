//singel selection 

import { useInsertionEffect, useState } from "react"
import faqData from "./data"
import "./styles.css"

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
  
    function handleSingleSelection(getCurrentId) {
      setSelected(getCurrentId === selected ? null : getCurrentId);
    }
  
    function handleMultiSelection(getCurrentId) {
      const cpyMultiple = [...multiple];
      const index = cpyMultiple.indexOf(getCurrentId);
      if (index === -1) cpyMultiple.push(getCurrentId);
      else cpyMultiple.splice(index, 1);
      setMultiple(cpyMultiple);
    }
  
    return (
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable multiselection
        </button>
        <div className="accordion">
          {faqData && faqData.length > 0 ? (
            faqData.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
  
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No item found</div>
          )}
        </div>
      </div>
    );
  }




/////