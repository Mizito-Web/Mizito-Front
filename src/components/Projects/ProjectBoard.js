import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { updateTaskStatus } from '../../services/apiClient';

const ItemType = {
  TASK: 'task',
};

const Task = ({ task, index, moveTask, listId }) => {
  const [, ref] = useDrag({
    type: ItemType.TASK,
    item: { task, index, listId },
  });

  const [, drop] = useDrop({
    accept: ItemType.TASK,
    hover: (draggedItem) => {
      if (draggedItem.listId !== listId || draggedItem.index !== index) {
        moveTask(draggedItem, listId, index);
        draggedItem.index = index;
        draggedItem.listId = listId;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="bg-white p-4 rounded shadow cursor-move"
    >
      <h3 className="font-medium text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 truncate">{task.description}</p>
    </div>
  );
};

const List = ({ list, moveTask }) => {
  const [, drop] = useDrop({
    accept: ItemType.TASK,
    drop: () => ({ listId: list.id }),
    hover: (draggedItem) => {
      if (list.tasks.length === 0 && draggedItem.listId !== list.id) {
        moveTask(draggedItem, list.id, 0);
        draggedItem.listId = list.id;
      }
    },
  });

  return (
    <div
      ref={drop}
      className="w-80 bg-gray-100 p-4 rounded shadow"
    >
      <h2 className="text-lg font-bold mb-4">{list.name}</h2>
      <div className="space-y-2">
        {list.tasks && list.tasks.length > 0 ? (
          list.tasks.map((task, index) => (
            task && (
              <Task
                key={task.id}
                task={task}
                index={index}
                moveTask={moveTask}
                listId={list.id}
              />
            )
          ))
        ) : (
          <div className="text-gray-400 text-sm p-4 border-2 border-dashed border-gray-300 rounded">
            Drag tasks here
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectBoard = () => {
  const [lists, setLists] = useState([
    {
      id: 'undone',
      name: 'برای انجام',
      tasks: [
        { id: 'task-1', title: 'دعوت از دوستان و همکاران', description: 'تنظیم دعوت‌نامه‌ها برای همکاران' },
        { id: 'task-2', title: 'مشاهده بخش نامه‌ها', description: 'بررسی نامه‌های رسمی برای ارسال گزارش‌ها' },
      ],
    },
    {
      id: 'in-progress',
      name: 'پیش‌رفت',
      tasks: [
        { id: 'task-3', title: 'یک تسک در حال انجام', description: 'این تسک در حال انجام است' },
      ],
    },
    {
      id: 'completed',
      name: 'انجام شده',
      tasks: [],
    },
  ]);

  const moveTask = async (draggedItem, targetListId, targetIndex) => {
    const sourceList = lists.find((list) => list.id === draggedItem.listId);
    const targetList = lists.find((list) => list.id === targetListId);

    const [movedTask] = sourceList.tasks.splice(draggedItem.index, 1);
    targetList.tasks.splice(targetIndex, 0, movedTask);

    setLists([...lists]);

    // Notify the backend if the task is moved to "Completed"
    if (targetListId === 'completed') {
      try {
        await updateTaskStatus(movedTask.id, 'done'); // Update status to 'done'
        console.log(`Task ${movedTask.id} marked as done.`);
      } catch (error) {
        console.error('Error updating task status:', error);
        alert('Failed to update task status.');
      }
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Project Board</h1>
        <div className="flex gap-4 overflow-auto">
          {lists.map((list) => (
            <List
              key={list.id}
              list={list}
              moveTask={moveTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ProjectBoard;
