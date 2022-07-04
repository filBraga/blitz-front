import Button from "./Button"


export default function Task(props) {
    return (
      <>
        <h1>{props.taskId}</h1>
        <h4>{props.text}</h4>
        <Button buttonText='Remover' />
        <Button buttonText='Editar'/>
        <Button buttonText='Salvar'/>
      </>
    );
  
  
}