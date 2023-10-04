import React from 'react';
import { View, FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task task={item} onDelete={onDelete} onToggle={onToggle} />
        )}
      />
    </View>
  );
};

export default TaskList;
