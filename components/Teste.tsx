interface TesteProps {
  title: string
}

const Teste:React.FC<TesteProps>  = ({ title }) => {
  return (
    <h1>{title ? title : 'Default Title'}</h1>
  )
}

export default Teste
