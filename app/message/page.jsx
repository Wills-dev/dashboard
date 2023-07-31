"use client";

import "./message.css";
import Image from "next/image";
import SideBarr from "@components/SideBarr";

const page = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="header-title-ctn">
            <div className="header-title">
              <h2>Conversations</h2>
            </div>
            <div className="header-profile-ctn">
              <div className="profile-name">
                <p>
                  Nancy's Shop{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#1C1D22"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <div className="profile-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4746 8.70444C13.8659 7.99357 13.5892 7.37753 13.5892 6.33095V5.9751C13.5892 4.61127 13.2754 3.73254 12.5929 2.85382C11.5411 1.48915 9.77034 0.666656 8.03688 0.666656H7.96317C6.26615 0.666656 4.55091 1.45138 3.48085 2.76066C2.76113 3.65701 2.41079 4.5735 2.41079 5.9751V6.33095C2.41079 7.37753 2.15239 7.99357 1.52543 8.70444C1.06411 9.22815 0.916687 9.90125 0.916687 10.6297C0.916687 11.3591 1.15604 12.0498 1.63641 12.6113C2.26337 13.2844 3.14873 13.7141 4.05315 13.7888C5.36256 13.9382 6.67197 13.9944 8.00043 13.9944C9.32807 13.9944 10.6375 13.9004 11.9477 13.7888C12.8513 13.7141 13.7367 13.2844 14.3636 12.6113C14.8432 12.0498 15.0834 11.3591 15.0834 10.6297C15.0834 9.90125 14.9359 9.22815 14.4746 8.70444Z"
                    fill="#5570F1"
                  />
                  <path
                    opacity="0.4"
                    d="M9.6739 15.0236C9.25731 14.9347 6.71882 14.9347 6.30223 15.0236C5.9461 15.1059 5.56097 15.2972 5.56097 15.7169C5.58168 16.1172 5.81607 16.4706 6.14073 16.6946L6.1399 16.6955C6.5598 17.0228 7.05259 17.2309 7.56857 17.3056C7.84354 17.3434 8.12348 17.3417 8.40839 17.3056C8.92354 17.2309 9.41633 17.0228 9.83623 16.6955L9.83541 16.6946C10.1601 16.4706 10.3945 16.1172 10.4152 15.7169C10.4152 15.2972 10.03 15.1059 9.6739 15.0236Z"
                    fill="#5570F1"
                  />
                </svg>
              </div>
              <div className="profile-pic">
                <Image
                  src="/assets/images/profile.png"
                  height={32}
                  width={32}
                />
              </div>
            </div>
          </div>
          <div className="header-icon-ctn">
            <div className="header-icon">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.09581 13.8548V11.8102C6.0958 11.2921 6.5171 10.8711 7.03895 10.8679H8.95506C9.47924 10.8679 9.90417 11.2898 9.90417 11.8102V13.8488C9.90416 14.2982 10.2693 14.6634 10.7219 14.6667H12.0292C12.6397 14.6682 13.2258 14.4285 13.6581 14.0005C14.0904 13.5724 14.3333 12.9912 14.3333 12.385V6.57724C14.3333 6.0876 14.1147 5.62315 13.7364 5.30901L9.29531 1.78286C8.519 1.16609 7.41024 1.18602 6.65692 1.83027L2.31133 5.30901C1.91515 5.61389 1.67836 6.07972 1.66666 6.57724V12.3791C1.66666 13.6425 2.69824 14.6667 3.97077 14.6667H5.24818C5.4661 14.6682 5.67565 14.5834 5.8303 14.431C5.98496 14.2785 6.07194 14.0711 6.07193 13.8548H6.09581Z"
                    fill="#5570F1"
                  />
                </svg>{" "}
                / Conversations
              </p>
            </div>
          </div>
        </header>
        <SideBarr />

        <main className="main">
          <div className="title-ctn">
            <h5>Conversations with Customers</h5>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="over-card height-813 width">
                <div className="contact-title-ctn">
                  <h5>Contacts</h5>
                  <p>34</p>
                </div>
                <div className="search-ctn">
                  <div className="search-wrapper">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.80547"
                        cy="8.3055"
                        r="7.49047"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.0153 13.9043L16.9519 16.8333"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    <input placeholder="Search" />
                  </div>
                </div>
                <div className="msg-ctn">
                  <div className="msg-wrapper activee">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group1.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="new">New</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group2.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Janet Adebayo</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="new">New</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group3.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Kunle Adekunle</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="new">New</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>

                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group1.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="num">2</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group4.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Janet Adebayo</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="new">New</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group10.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group2.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group1.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <h5 className="num">2</h5>
                      <p>12:55 am</p>
                    </div>
                  </div>
                  <div className="msg-wrapper ">
                    <div className="msg-left">
                      <div className="msg-img">
                        <Image
                          src="/assets/images/Group10.png"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="msg-profile">
                        <h5>Jane Doe</h5>
                        <p>Hi, I have enquiries about...</p>
                      </div>
                    </div>
                    <div className="msg-right">
                      <p>12:55 am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="over-card min-width">
                <div className="msg-header">
                  <div className="msg-header-left">
                    <div className="msg-head-img">
                      <Image
                        src="/assets/images/Rectanglee.png"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="msg-head-profile">
                      <h5>Jane Doe</h5>
                      <p>
                        <span className="circle"></span>
                        <span>Online</span> 12:55am
                      </p>
                    </div>
                  </div>
                  <div className="msg-header-right">
                    <div className="upper">
                      {" "}
                      <p>New customer</p>
                      <h5>View profile</h5>
                    </div>
                    <div className="lower">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.7615 18.4167H6.80495C4.24965 18.4167 2.28931 17.4937 2.84614 13.779L3.4945 8.74466C3.83775 6.89111 5.02005 6.18173 6.05743 6.18173H14.5395C15.5921 6.18173 16.7058 6.94451 17.1024 8.74466L17.7508 13.779C18.2237 17.0742 16.3168 18.4167 13.7615 18.4167Z"
                          stroke="#53545C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.8758 5.99865C13.8758 4.01026 12.2639 2.39835 10.2755 2.39835V2.39835C9.31797 2.39429 8.3983 2.77182 7.71981 3.44744C7.04131 4.12307 6.6599 5.04114 6.65991 5.99865H6.65991"
                          stroke="#53545C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7469 9.75151H12.7088"
                          stroke="#53545C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.88801 9.75151H7.84987"
                          stroke="#53545C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>0 Orders</p>
                    </div>
                  </div>
                </div>
                <div className="msg-body">
                  <div className="date-ctn">
                    <p>12 August 2022</p>
                  </div>
                  <div className="order-wrapper">
                    <div className="order-wrap-left">
                      <div className="order-img">
                        <Image
                          src="/assets/images/Rectangle3.png"
                          height={49}
                          width={49}
                        />
                      </div>
                      <div className="order-content">
                        <p>iPhone 13</p>
                        <h6>N730,000.00 x 1</h6>
                      </div>
                    </div>
                    <div className="order-wrap-right">
                      <p className="order-date">
                        <span>12</span> In Stock
                      </p>
                    </div>
                  </div>

                  <div className="msg-wrap ">
                    <div className="msg sender">
                      <p>Hello I want to enquire about you product buyeread</p>
                    </div>
                    <span>12:55 am</span>
                  </div>

                  <div className="msg-wrap send">
                    <div className="msg receiver">
                      <p>Hello Janet, thank you for reaching out</p>
                    </div>
                    <span>
                      12:55 am{" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" rx="10" fill="#FFEAD1" />
                        <path
                          d="M14 7L8.5 12.5L6 10"
                          stroke="#1C1D22"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="msg-wrap send">
                    <div className="msg receiver">
                      <p>What do you need to know</p>
                    </div>
                    <span>
                      12:55 am{" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" rx="10" fill="#FFEAD1" />
                        <path
                          d="M14 7L8.5 12.5L6 10"
                          stroke="#1C1D22"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="date-ctn">
                    <p>Today</p>
                  </div>
                  <div className="msg-wrap ">
                    <div className="msg sender">
                      <p>
                        What to know if the price is negotiable, I need about
                        two units
                      </p>
                    </div>
                    <span>12:55 am</span>
                  </div>
                </div>
                <div className="send-msg-ctn">
                  <div className="send-msg">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#FFF2E2" />
                      <path
                        d="M16 9V23"
                        stroke="#1C1D22"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 16H23"
                        stroke="#1C1D22"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input placeholder="Your message" />
                    <div className="smiley-ctn">
                      <div className="smiley">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#5570F1"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                            stroke="#5570F1"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 9H15.01"
                            stroke="#5570F1"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 9H9.01"
                            stroke="#5570F1"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <button>
                        Send{" "}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.8563 2.14857C17.4396 1.72274 16.8229 1.56524 16.2479 1.73191L2.8396 5.60607C2.23293 5.77441 1.80293 6.25524 1.6871 6.86524C1.56876 7.48691 1.9821 8.27691 2.5221 8.60691L6.7146 11.1669C7.1446 11.4302 7.6996 11.3644 8.05543 11.0077L12.8563 6.20691C13.0979 5.95607 13.4979 5.95607 13.7396 6.20691C13.9813 6.44774 13.9813 6.84024 13.7396 7.09024L8.93043 11.8911C8.57377 12.2477 8.5071 12.8011 8.7696 13.2319L11.3313 17.4402C11.6313 17.9394 12.1479 18.2236 12.7146 18.2236C12.7813 18.2236 12.8563 18.2236 12.9229 18.2144C13.5729 18.1319 14.0896 17.6894 14.2813 17.0644L18.2563 3.75691C18.4313 3.19024 18.2729 2.57357 17.8563 2.14857Z"
                            fill="#1C1D22"
                          />
                          <path
                            opacity="0.4"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.50882 14.0065C2.34882 14.0065 2.18882 13.9457 2.06716 13.8232C1.82299 13.579 1.82299 13.184 2.06716 12.9398L3.20466 11.8015C3.44883 11.5582 3.84466 11.5582 4.08883 11.8015C4.33216 12.0457 4.33216 12.4415 4.08883 12.6857L2.95049 13.8232C2.82882 13.9457 2.66882 14.0065 2.50882 14.0065ZM5.64316 15.0002C5.48316 15.0002 5.32316 14.9393 5.20149 14.8168C4.95733 14.5727 4.95733 14.1777 5.20149 13.9335L6.33899 12.7952C6.58316 12.5518 6.97899 12.5518 7.22316 12.7952C7.46649 13.0393 7.46649 13.4352 7.22316 13.6793L6.08483 14.8168C5.96316 14.9393 5.80316 15.0002 5.64316 15.0002ZM5.85458 17.9735C5.97624 18.096 6.13624 18.1568 6.29624 18.1568C6.45624 18.1568 6.61624 18.096 6.73791 17.9735L7.87624 16.836C8.11958 16.5918 8.11958 16.196 7.87624 15.9518C7.63207 15.7085 7.23624 15.7085 6.99207 15.9518L5.85458 17.0902C5.61041 17.3343 5.61041 17.7293 5.85458 17.9735Z"
                            fill="#1C1D22"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
