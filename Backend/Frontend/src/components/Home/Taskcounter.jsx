import React from "react";

const TaskCounters = ({ data }) => {
  // Calculate task counts
  const totalTasks = data?.length || 0;
  const completedTasks = data?.filter((task) => task.complete)?.length || 0;
  const incompleteTasks = totalTasks - completedTasks;
  const importantTasks = data?.filter((task) => task.important)?.length || 0;

  return (
    <div className="bg-gray-800 text-gray-300 rounded-md p-4 mb-4 fixed bottom-4 right-4 shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Task Overview</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Incomplete Tasks: {incompleteTasks}</p>
      <p>Important Tasks: {importantTasks}</p>
    </div>
  );
};

export default TaskCounters;
