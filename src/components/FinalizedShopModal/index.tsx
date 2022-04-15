import Modal from 'react-modal';
import checkImg from '../../assets/images/check.svg';
import { Container } from './styles';
interface FinalizedShopModalProps{
  isOpen: boolean,
  onAfterOpen: () => void
}

export function FinalizedShopModal({isOpen, onAfterOpen}: FinalizedShopModalProps){
  return(
    <Modal 
      isOpen={isOpen} 
      onAfterOpen={onAfterOpen}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <img src={checkImg} alt="Compra finalizada" />
        <h2>Pedido finalizado com sucesso!</h2>
      </Container>
    </Modal>
  );
}