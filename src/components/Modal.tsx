import axios from "axios";
import React, { useEffect } from "react";
import "../styles/Modal.scss";
import DetailPhoto from "./DetailPhoto";

interface ModalProps {
  closeModalState: (e: React.MouseEvent<HTMLElement>) => void;
  place: any;
}
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;

function Modal({ closeModalState, place }: ModalProps) {
  console.log("모달안에서 place가 넘어오는지 확인", place);
  const {
    photoUrl,
    detail: {
      result: {
        name,
        formatted_address,
        photos,
        rating,
        formatted_phone_number,
        opening_hours,
      },
    },
  } = place; //photo_reference

  // axios
  //   .post("https://localhost:5001/google/photos", {
  //     data: photos,
  //     withCredentials: true,
  //   })
  //   .then((el) => {
  //     console.log("ㅁㄴㅇㅁㅇㄴㅁㅇㄴㅁㄴㅇㅁㅇㄴ", el);
  //   });

  return (
    <div id="modalContainer">
      <div id="contentsModal">
        <div id="contentsHeader">
          <div>
            <div>
              <h1>Please Travel</h1>
            </div>

            <div id="modal_Info">
              <div>
                {/* {photos.map( photo:any => {
                   <DetailPhoto imgUrl={}/>
                })} */}
              </div>
              <img id="modal_Photo" src={photoUrl} alt="" />
              <div>
                <div id="modal_Name">{name}</div>
                <div id="modal_rating">{rating}</div>
                <div id="modal_number">{formatted_phone_number}</div>
                <div id="modal_address">{formatted_address}</div>
                {/* <div>{opening_hours}</div> */}
              </div>
            </div>
          </div>
          <button id="modalClose" onClick={closeModalState}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
