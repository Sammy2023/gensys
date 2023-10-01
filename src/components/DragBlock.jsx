import React from "react";
import styles from "../styles/DragBlock.module.css";
import { Draggable } from "react-beautiful-dnd";

export default class DragBlock extends React.Component{
  render(){
    return (
      <Draggable draggableId={this.props.block.id} index={this.props.index}>
        {provided => (
          <div {...provided.draggableProps} 
               {...provided.dragHandleProps}
               ref={provided.innerRef}
               innerRef={provided.innerRef}
               className={styles.block}
          >
            {this.props.block.id}
          </div>

        )}
      </Draggable>
    );
  }
}
