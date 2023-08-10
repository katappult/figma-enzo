import {React, useEffect } from "react";
import '../css/Upload.css'
import uploadIcon from '../img/upload.svg';

export default function Header(props){

    const {title, desc, source, alt} = props;

    useEffect(() => {
        const dropArea = document.querySelector(".drop_box");
        const button = dropArea.querySelector("button");
        const input = dropArea.querySelector("input");

        button.onclick = () => {
            input.click();
        };

        input.addEventListener("change", function (e) {
            var fileName = e.target.files[0].name;
            let filedata = `
            <form action="" method="post">
            <div class="form">
            <h4>${fileName}</h4>
            <button class="save-label save-label-activated">Upload</button>
            </div>
            </form>`;
            dropArea.innerHTML = filedata;
        });
    }, []);

    return(
        <div className="content-upload">
            <div className="section-label">
                <p className="label-title">{title}</p>
                <p className="label-description">{desc}</p>
            </div>
            <div className="avatar-and-fileupload">
                <img src={source} alt={alt} className="img-upload"/>
                <a href="#" className="drop_box">
                    <button className="upload-field">
                        <div className="border-upload-icon">
                            <img src={uploadIcon} alt="upload-icon" />
                        </div>
                        <input type="file" hidden accept=".svg,.png,.jpg,.gif" id="fileID" style={{display: 'none'}}></input>
                        <div className="flex-div"><p className="color-green">Click to upload</p><p className="color-grey">or drag and drop</p></div>
                        <p className="color-grey">SVG, PNG, JPG or GIF max. 800x400px - 200kb</p>
                    </button>
                </a>
            </div>
        </div>
    );
}