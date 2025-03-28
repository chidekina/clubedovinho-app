import './styles/custom.css';
import Button from './components/Button';
import Paragraph from './components/Paragraph';

export default function AppOld() {
  let nome = 'Chiquim';

  return (
    <>
      <h1>Ola mundo</h1>
      <hr/>
      <Paragraph>eu me chamo {nome}</Paragraph>

      <hr />

      <Paragraph color="green" align="center">
        é nois
      </Paragraph>

      <Paragraph color="blue">Texto</Paragraph>

      <Button>Cadastro</Button>
      <Button>Editar</Button>
      <Button>Relatorio</Button>
    </>
  )
}

