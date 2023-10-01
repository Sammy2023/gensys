import React from "react";
import styles from "../styles/DragSection.module.css";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { useDroppable } from "@dnd-kit/core";
import DragBlock from "./DragBlock.jsx"
export default function DragSection(props) {
  const dragItems = [{ id: "block1" }, { id: "block3" }, { id: "block5" }];

  const dropItems = [{ id: "block2" }, { id: "block4" }];

  const { setNodeRef } = useDroppable({
    id: "dropItem-id",
  });

  const droppableId = "droppable-id";

  function onDragEnd(result) {}

  return (
    // DragDropContext requires us to pass in onDragEnd as a prop
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div className={styles.blockContainer} 
            {...provided.droppableProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
          >
            {dragItems.map((block, index) => (
             <DragBlock block={block} index={index}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    // <div ref={setNodeRef}>
    //   Draggable Blocks
    //   <div className={styles.block}></div>
    //   <div className={styles.block}></div>
    //   <div className={styles.block}></div>
    // </div>
  );
}
