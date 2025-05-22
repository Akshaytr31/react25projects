import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(itemId) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }

  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = displayCurrentChildren[item.id];

  return (
    <li>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <p>{item.label}</p>
        {hasChildren && (
          <span
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => handleToggleChildren(item.id)}
          >
            {isExpanded ? <FaMinus color="#fff"/> : <FaPlus color="#fff"/>}
            </span>
        )}
      </div>

      {hasChildren && isExpanded && <MenuList list={item.children}/>}
    </li>
  );
}


