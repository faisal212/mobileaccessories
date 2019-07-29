import React,{useRef} from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

export default function Discounts({modalOpen,amount}) {
  const modal = useRef("modal")
  return (
    <PureModal
      header="Discounts"
      // onClose={() => {
      //   this.props.showModal();
      // }}
      isOpen={modalOpen}
      width="290px"
      ref={modal}

    >
      You have {amount}Rs in your wallet
    </PureModal>
  )
}


