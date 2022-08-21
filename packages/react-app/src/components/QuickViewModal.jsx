import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DetailQuickView } from "./DetailQuickView";
import Modal from 'react-modal';

export default function QuickViewModal(props) {
    return (
        <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={props.customStyles}
        contentLabel="Quick View Modal"
      >
            <DetailQuickView />
        </Modal>
      );
}


const detailQuickViewData = {
    title: "Cartoon Rocket",
    price: "$10",
    name: "Shannon Case",
    ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/ellipse-7@2x.png",
    image1: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-1-4@1x.png",
    image2: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-2@2x.png",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-3@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-4@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-5@2x.png",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/6300fb2bb6730c825284580d/releases/63015950b041066102c5131e/img/image-6@2x.png",
    text1: "(3,333)",
    buyItNow: "Buy it now",
    viewFullDetails: "View full details",
};

