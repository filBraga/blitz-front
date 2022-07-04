import Button from "./Button"

export default function Task(props) {
    return (
      <>
        <p>{props.taskId}. {props.text}</p>
        <Button buttonText='Delete' />
        <Button buttonText='Update'/>
        <Button buttonText='Done'/>
      </>
    );
  
  
}