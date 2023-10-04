import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text>{task.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
