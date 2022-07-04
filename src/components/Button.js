export default function Button(props) {
  const triggerDelete = () => {
    console.log(this.state);
        // let taskList = this.state.tasks
        // taskList.splice(index, 1);
        // this.setState({tasks: taskList})
  }

  return <button>{props.buttonText}</button>
}