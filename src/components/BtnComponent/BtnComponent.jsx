
const BtnComponent = ({children , onclick , classname}) => {
  return (
    <button className={classname} onClick={onclick}>  {children}</button>
  )
}

export default BtnComponent
