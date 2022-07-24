import React from 'react';

const ContactBox = () => {
    return (
        <div className="row my-4 d-flex align-items-center">
            <div className="col-md-4">
                <div className="box border border-danger rounded">
                    <div
                        style={{ backgroundColor: '#00A0F3' }}
                        className="hading rounded-top text-white"
                    >
                        <div className="px-3 py-2">
                            <p className="m-0">Office</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="px-3 my-4">
                            <p className="">Dhaladia</p>
                            <p className="">Rajabari-1742, Sreepur</p>
                            <p className="">Gazipur-1740.</p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: '#F64746' }}
                        className="footer rounded-bottom"
                    >
                        <div className="p-3 text-white">
                            <p className="m-0">+8801310913326</p>
                            <p className="m-0">fdfn2016@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 my-5">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your name"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                        Comment:
                    </label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Enter your messages"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    class="btn btn-danger px-4"
                />
            </div>
        </div>
    );
};

export default ContactBox;
