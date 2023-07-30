import "./page.css";
import Link from "next/link";
import Image from "next/image";
import { SideBar } from "@components/SideBar";

const page = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="grid-container">
          <header className="header">
            <div className="header-title-ctn">
              <div className="header-title">
                <h2>Dashboard</h2>
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
                  </svg>
                </p>
              </div>
            </div>
          </header>
          <SideBar />

          <main className="main">
            <div className="row">
              <div className="col-lg-7  col-12">
                <div className="row">
                  <div className="col-sm-6 col-12 ">
                    <div className="over-card ">
                      <div className="upper-card">
                        <div className="icon">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36"
                              height="36"
                              rx="8"
                              fill="#5570F1"
                              fill-opacity="0.12"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22.3982 19.5743C22.9605 19.5743 23.4324 20.0384 23.3465 20.5936C22.8421 23.8603 20.0456 26.2857 16.6728 26.2857C12.9412 26.2857 9.91666 23.2612 9.91666 19.5305C9.91666 16.4568 12.2517 13.5936 14.8807 12.9462C15.4456 12.8068 16.0246 13.2041 16.0246 13.7857C16.0246 17.7261 16.157 18.7454 16.9053 19.2998C17.6535 19.8541 18.5333 19.5743 22.3982 19.5743Z"
                              stroke="#5570F1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M26.0771 16.293C26.1218 13.7614 23.0122 9.68072 19.2227 9.75089C18.928 9.75616 18.692 10.0018 18.6788 10.2956C18.5832 12.3772 18.7122 15.0746 18.7841 16.2974C18.806 16.6781 19.1052 16.9772 19.485 16.9991C20.742 17.0711 23.5376 17.1693 25.5894 16.8588C25.8683 16.8167 26.0727 16.5746 26.0771 16.293Z"
                              stroke="#5570F1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="week">
                          <p>
                            This week{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#BEC0CA"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                      <div className="lower-card">
                        <div className="">
                          <p>Sales</p>
                          <h5>N4,000.00</h5>
                        </div>
                        <div className="">
                          <p>Volume</p>
                          <h5>
                            450 <span>+20.00%</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 ">
                    <div className="over-card ">
                      <div className="upper-card">
                        <div className="icon">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36"
                              height="36"
                              rx="8"
                              fill="#FFCC91"
                              fill-opacity="0.16"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.9929 20.6723C19.0671 20.6723 21.6946 21.1382 21.6946 22.999C21.6946 24.8598 19.0846 25.339 15.9929 25.339C12.9179 25.339 10.2912 24.8773 10.2912 23.0157C10.2912 21.154 12.9004 20.6723 15.9929 20.6723Z"
                              stroke="#1C1D22"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.9929 18.0165C13.9746 18.0165 12.3379 16.3807 12.3379 14.3623C12.3379 12.344 13.9746 10.7082 15.9929 10.7082C18.0104 10.7082 19.6471 12.344 19.6471 14.3623C19.6546 16.3732 18.0296 18.009 16.0187 18.0165H15.9929Z"
                              stroke="#1C1D22"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21.7359 17.068C23.0701 16.8805 24.0976 15.7355 24.1001 14.3497C24.1001 12.9838 23.1042 11.8505 21.7984 11.6363"
                              stroke="#1C1D22"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M23.4962 20.2768C24.7887 20.4693 25.6912 20.9227 25.6912 21.856C25.6912 22.4985 25.2662 22.9152 24.5795 23.176"
                              stroke="#1C1D22"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="week">
                          <p>
                            This week{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#BEC0CA"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                      <div className="lower-card">
                        <div className="">
                          <p>Customers</p>
                          <h5>
                            1,250 <span>+15.80%</span>
                          </h5>
                        </div>
                        <div className="">
                          <p>Active</p>
                          <h5>
                            1,180 <span>85%</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-5  col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="over-card">
                      <div className="upper-card">
                        <div className="icon">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36"
                              height="36"
                              rx="8"
                              fill="#FFCC91"
                              fill-opacity="0.16"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.7614 25.9167H14.8049C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.02 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3167 25.9167 21.7614 25.9167Z"
                              stroke="#130F26"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21.8759 13.4987C21.8759 11.5103 20.264 9.89835 18.2756 9.89835V9.89835C17.3181 9.89429 16.3984 10.2718 15.7199 10.9474C15.0414 11.6231 14.66 12.5411 14.66 13.4987V13.4987"
                              stroke="#130F26"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20.747 17.2515H20.7088"
                              stroke="#130F26"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.8881 17.2515H15.8499"
                              stroke="#130F26"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="week">
                          <p>
                            This week{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#BEC0CA"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                      <div className="lower-card">
                        <div className="">
                          <p>All Orders</p>
                          <h5>450</h5>
                        </div>
                        <div className="">
                          <p>Pending</p>
                          <h5>5</h5>
                        </div>
                        <div className="">
                          <p>Completed</p>
                          <h5>445</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="over-card">
                      <div className="upper-card">
                        <div className="icon">
                          <h5>Marketing</h5>
                        </div>
                        <div className="week">
                          <p>
                            This week{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#BEC0CA"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
