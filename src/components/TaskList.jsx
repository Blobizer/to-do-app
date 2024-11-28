import TaskItem from "./TaskItem.jsx"

const TaskList =({posts,  title, remove}) => {

  if (!posts.length){
    return (
      <h1 style={{
        textAlign:"center", 
        
      }}>
        Постов не найдено, скорее создай его!
      </h1>
    );
  }
  
  return (
      <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
          {posts.map((post,index) =>             
            <TaskItem remove={remove} number={index + 1} post={post} key={post.id}/>
          )}
      </div>
  );
};

export default TaskList;
