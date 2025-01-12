import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [showListForm, setShowListForm] = useState(false);

  const moveTask = (draggedItem, targetListId, targetIndex) => {
    const sourceList = lists.find((list) => list.id === draggedItem.listId);
    const targetList = lists.find((list) => list.id === targetListId);

    const [movedTask] = sourceList.tasks.splice(draggedItem.index, 1);

    targetList.tasks.splice(targetIndex, 0, movedTask);

    setLists([...lists]);
  };

  const handleCreateList = () => {
    if (newListName.trim() === '') return;

    const newList = {
      id: `list-${Date.now()}`,
      name: newListName,
      tasks: [],
    };

    setLists([...lists, newList]);
    setNewListName('');
    setShowListForm(false);
  };

  const handleCreateTask = () => {
    if (newTaskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }

    const undoneList = lists.find((list) => list.id === 'undone');
    if (!undoneList) {
      alert('No "برای انجام" (Undone) list found!');
      return;
    }

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      description: newTaskDescription || 'بدون توضیحات',
    };

    undoneList.tasks.push(newTask);
    setLists([...lists]);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setShowTaskForm(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Project Board</h1>

        {/* Task Creation Form */}
        {showTaskForm ? (
          <div className="mb-4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="عنوان وظیفه"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="p-2 border rounded"
            />
            <textarea
              placeholder="توضیحات وظیفه"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className="p-2 border rounded"
            />
            <div className="flex gap-2">
              <button
                onClick={handleCreateTask}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                ذخیره
              </button>
              <button
                onClick={() => setShowTaskForm(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                انصراف
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowTaskForm(true)}
            className="px-4 py-2 mr-4 bg-teal-500 text-white rounded hover:bg-teal-600 mb-4"
          >
            وظیفه جدید
          </button>
        )}

        {/* List Creation Form */}
        {showListForm ? (
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              placeholder="نام لیست جدید"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              className="p-2 border rounded"
            />
            <button
              onClick={handleCreateList}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ذخیره
            </button>
            <button
              onClick={() => setShowListForm(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              انصراف
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowListForm(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            افزودن لیست جدید
          </button>
        )}

        {/* Drag and Drop Lists */}
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
