import styled from "styled-components";
import CheckedCircle from "../assets/CheckedCircle";
import TrashCan from "../assets/TrashCan";
import { useState } from "react";

interface ConcludedTaskProps {
  description: string;
  id: number;
  toggleConcluded: (id: number) => void;
  deleteTask: (id: number) => void;
}

function ConcludedTask({
  description,
  id,
  toggleConcluded,
  deleteTask,
}: ConcludedTaskProps) {
  const defaultColor = "#808080";
  const dangerColor = "#E25858";
  const [hoverTrash, setHoverTrash] = useState(false);
  return (
    <Task>
      <div className="circle" onClick={() => toggleConcluded(id)}>
        <CheckedCircle />
      </div>
      <div className="task-description">
        <p>{description}</p>
      </div>
      <div
        onMouseEnter={() => setHoverTrash(true)}
        onMouseLeave={() => setHoverTrash(false)}
        className="trash"
        onClick={() => deleteTask(id)}
      >
        <TrashCan fill={hoverTrash ? dangerColor : defaultColor} />
      </div>
    </Task>
  );
}

export default ConcludedTask;

const Task = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--gray-400);
  margin: 30px 0;
  padding: 25px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  .task-description {
    width: 80%;
    color: var(--gray-300);
    p {
      font-family: Inter;
      font-size: 14px;
      line-height: 140%;
      text-decoration-line: line-through;
    }
  }

  .trash:hover {
    cursor: pointer;
    color: var(--danger);
  }

  .circle:hover {
    cursor: pointer;
  }
`;
