import "./page.css";
import Image from "next/image";
import { SideBar } from "@components/SideBar";

const page = () => {
  return (
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
                  <div className="over-card height-145">
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
                  <div className="over-card height-145">
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
                  <div className="over-card height-145">
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
                    <div className="mid-card">
                      <p>
                        <span className="circle-1"></span> Acquisition
                      </p>
                      <p>
                        <span className="circle-2"></span> Purchase
                      </p>
                      <p>
                        <span className="circle-3"></span> Retention
                      </p>
                    </div>
                    <div className="circle-card">
                      <svg
                        width="205"
                        height="205"
                        viewBox="0 0 205 205"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5ZM56.7908 102.5C56.7908 127.744 77.2555 148.209 102.5 148.209C127.744 148.209 148.209 127.744 148.209 102.5C148.209 77.2555 127.744 56.7908 102.5 56.7908C77.2555 56.7908 56.7908 77.2555 56.7908 102.5Z"
                          fill="#EEF0FA"
                        />
                        <path
                          d="M103 17C82.4661 17 62.6098 24.3471 47.0215 37.7129C31.4331 51.0787 21.1415 69.581 18.0075 89.8744C14.8736 110.168 19.1041 130.913 29.9341 148.358C40.7642 165.804 57.479 178.799 77.0563 184.993L83.2715 165.351C68.3842 160.64 55.6738 150.758 47.4382 137.492C39.2027 124.226 35.9856 108.451 38.3688 93.0188C40.752 77.587 48.5781 63.5173 60.432 53.3535C72.2859 43.1896 87.3853 37.6026 103 37.6026V17Z"
                          fill="#FFCC91"
                        />
                        <path
                          d="M38.0163 46.6696C46.1641 37.2701 56.2541 29.75 67.5901 24.6282C78.9261 19.5064 91.2382 16.9047 103.677 17.0027L103.515 37.6047C94.0559 37.5302 84.6934 39.5086 76.0731 43.4034C67.4528 47.2982 59.7801 53.0167 53.5842 60.1644L38.0163 46.6696Z"
                          fill="#97A5EB"
                        />
                        <path
                          d="M103 17C115.474 17 127.798 19.7135 139.118 24.9522C150.439 30.1909 160.484 37.8295 168.557 47.3382C176.631 56.8468 182.539 67.9979 185.872 80.018C189.206 92.038 189.884 104.639 187.861 116.948C185.838 129.257 181.162 140.978 174.157 151.298C167.151 161.619 157.985 170.293 147.292 176.717C136.6 183.141 124.639 187.163 112.237 188.502C99.8355 189.842 87.291 188.468 75.4735 184.476L82.0679 164.957C91.0543 167.993 100.594 169.038 110.024 168.019C119.455 167 128.551 163.942 136.681 159.057C144.812 154.172 151.783 147.576 157.11 139.728C162.437 131.88 165.993 122.966 167.532 113.606C169.07 104.247 168.554 94.6641 166.019 85.5237C163.484 76.3832 158.991 67.9035 152.852 60.6728C146.713 53.4421 139.074 47.6335 130.466 43.6498C121.857 39.6661 112.485 37.6026 103 37.6026V17Z"
                          fill="#5570F1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="over-card height-145 activated">
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
                                fill="white"
                                fill-opacity="0.16"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M25.8491 21.1101C25.8491 24.0917 24.0916 25.8492 21.1099 25.8492H14.6249C11.6357 25.8492 9.87492 24.0917 9.87492 21.1101V14.6101C9.87492 11.6326 10.9699 9.87508 13.9524 9.87508H15.6191C16.2174 9.87591 16.7807 10.1567 17.1391 10.6359L17.8999 11.6476C18.2599 12.1259 18.8233 12.4076 19.4216 12.4084H21.7799C24.7691 12.4084 25.8724 13.9301 25.8724 16.9726L25.8491 21.1101Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.2342 20.0525H21.5133"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
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
                    <div className="col-12">
                      <div className="over-card height-145">
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
                              <g clip-path="url(#clip0_570_149)">
                                <path
                                  d="M24.6667 26.3333C25.1269 26.3333 25.5 25.9602 25.5 25.5C25.5 25.0398 25.1269 24.6667 24.6667 24.6667C24.2064 24.6667 23.8333 25.0398 23.8333 25.5C23.8333 25.9602 24.2064 26.3333 24.6667 26.3333Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M15.5 26.3333C15.9602 26.3333 16.3333 25.9602 16.3333 25.5C16.3333 25.0398 15.9602 24.6667 15.5 24.6667C15.0398 24.6667 14.6667 25.0398 14.6667 25.5C14.6667 25.9602 15.0398 26.3333 15.5 26.3333Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M8.83333 8.83333H12.1667L14.4 19.9917C14.4762 20.3753 14.6849 20.72 14.9896 20.9652C15.2943 21.2105 15.6756 21.3408 16.0667 21.3333H24.1667C24.5577 21.3408 24.939 21.2105 25.2437 20.9652C25.5484 20.72 25.7571 20.3753 25.8333 19.9917L27.1667 13H13"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_570_149">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(8 8)"
                                  />
                                </clipPath>
                              </defs>
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
                            <p className="danger">Abandoned Cart</p>
                            <h5>
                              20% <span>+0.00%</span>
                            </h5>
                          </div>
                          <div className="">
                            <p>Customers</p>
                            <h5>30</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="over-card height-400">
                    <div className="width-663">
                      <div className="top-card">
                        <div className="top-left">
                          <h5>Summary</h5>
                          <p>
                            Sales{" "}
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="#5570F1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                        <div className="top-right">
                          <p>
                            Last 7 days{" "}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#1C1D22"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                      <div className="second-card">
                        <div className="amount">
                          <p>100k</p>
                          <p>80k</p>
                          <p>60k</p>
                          <p>40k</p>
                          <p>20k</p>
                          <p></p>
                        </div>
                        <div className="bar-ctn">
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-1"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 10</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-2"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 11</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-3"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 12</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-4"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 14</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-5"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 15</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-6"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 16</p>
                            </div>
                          </div>
                          <div className="bar-wrapper">
                            <div className="bar-content">
                              <p className="bar bar-7"></p>
                            </div>
                            <div className="bar-date">
                              <p>Sept 7</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="over-card">
                    <div>
                      <div className="order-title-ctn">
                        <h5>Recent Orders</h5>
                      </div>
                      <div className="order-ctn">
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status pending">Pending</p>
                          </div>
                        </div>
                        <div className="order-wrapper">
                          <div className="order-wrap-left">
                            <div className="order-img">
                              <Image
                                src="/assets/images/Rectangle4.png"
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status completed">Completed</p>
                          </div>
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status pending">Pending</p>
                          </div>
                        </div>
                        <div className="order-wrapper">
                          <div className="order-wrap-left">
                            <div className="order-img">
                              <Image
                                src="/assets/images/Rectangle4.png"
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status completed">Completed</p>
                          </div>
                        </div>
                        <div className="order-wrapper">
                          <div className="order-wrap-left">
                            <div className="order-img">
                              <Image
                                src="/assets/images/Rectangle4.png"
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status completed">Completed</p>
                          </div>
                        </div>
                        <div className="order-wrapper">
                          <div className="order-wrap-left">
                            <div className="order-img">
                              <Image
                                src="/assets/images/Rectangle4.png"
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status completed">Completed</p>
                          </div>
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status pending">Pending</p>
                          </div>
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status pending">Pending</p>
                          </div>
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
                            <p className="order-date">12 Sept 2022</p>
                            <p className="order-status pending">Pending</p>
                          </div>
                        </div>
                      </div>
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
