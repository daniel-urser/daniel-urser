import React, { useState } from 'react';
import { View, TextInput, Button ,StyleSheet} from 'react-native';
import TaskList from './Tasklist';
import Svg, { Path } from 'react-native-svg';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
     
      <Svg height="100%" width="100%" style={styles.svg}>
        <Path
          d="M0,300 C150,100 350,100 500,300 L500,0 L0,0 Z"
          fill="#3498db"
        />
      </Svg>
      {/* Aqui você pode adicionar outros elementos, como texto, imagens, etc. */}
   
      <TextInput
        placeholder="Adicionar tarefa"
        onChangeText={(value) => setText(value)}
        value={text}
         style={styles.inpt}
      />
      <Button title="Adicionar" onPress={addTask} style={styles.btn} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} style={styles.tsk} />
    </View>
  );
};
const styles=StyleSheet.create({

btn:{borderRadius:100},

inpt:{backgroundColor:"white",width:300,height:100,
fontSize:30,
position:"relative",
},
tsk:{fontSize:30},

container: {
    flex: 1,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },




}



  
)
export default App;
