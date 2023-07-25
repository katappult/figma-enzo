import React from "react";
import '../css/Upload.css'
import uploadIcon from '../img/upload.svg';

export default function Header(props){

    const {title, desc, source, alt} = props;

    return(
        <div className="content-upload">
            <div className="section-label">
                <p className="label-title">{title}</p>
                <p className="label-description">{desc}</p>
            </div>
            <div className="avatar-and-fileupload">
                <img src={source} alt={alt} className="img-upload"/>
                <a href="#">
                    <button className="upload-field">
                        <div className="border-upload-icon">
                            <img src={uploadIcon} alt="upload-icon" />
                        </div>
                        <div className="flex-div"><p className="color-green">Click to upload</p><p className="color-grey">or drag and drop</p></div>
                        <p className="color-grey">SVG, PNG, JPG or GIF max. 800x400px - 200kb</p>
                    </button>
                </a>
            </div>
        </div>
    );
}