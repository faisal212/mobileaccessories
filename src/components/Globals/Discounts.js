import React,{useState,useRef} from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

export default function Discounts({modalOpen}) {
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
      your total discount
    </PureModal>
  )
}


