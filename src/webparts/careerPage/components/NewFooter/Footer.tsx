import * as React from 'react';
import styles from './Footer.module.scss'; // Ensure this file is named correctly

const Footer: React.FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footer_container}>
                <div className={styles.Links}>
                    <div className={styles.links_container}>

                        <a href="https://www.cnexia.com/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.9167 29C34.0833 27.625 34.2083 26.25 34.2083 24.8333C34.2083 23.4167 34.0833 22.0417 33.9167 20.6667H40.9583C41.2917 22 41.5 23.3958 41.5 24.8333C41.5 26.2708 41.2917 27.6667 40.9583 29M30.2292 40.5833C31.4792 38.2708 32.4375 35.7708 33.1042 33.1667H39.25C37.2316 36.6422 34.0294 39.275 30.2292 40.5833ZM29.7083 29H19.9583C19.75 27.625 19.625 26.25 19.625 24.8333C19.625 23.4167 19.75 22.0208 19.9583 20.6667H29.7083C29.8958 22.0208 30.0417 23.4167 30.0417 24.8333C30.0417 26.25 29.8958 27.625 29.7083 29ZM24.8333 41.4167C23.1042 38.9167 21.7083 36.1458 20.8542 33.1667H28.8125C27.9583 36.1458 26.5625 38.9167 24.8333 41.4167ZM16.5 16.5H10.4167C12.4138 13.0147 15.6139 10.3776 19.4167 9.08333C18.1667 11.3958 17.2292 13.8958 16.5 16.5ZM10.4167 33.1667H16.5C17.2292 35.7708 18.1667 38.2708 19.4167 40.5833C15.6214 39.2756 12.4256 36.6421 10.4167 33.1667ZM8.70833 29C8.375 27.6667 8.16667 26.2708 8.16667 24.8333C8.16667 23.3958 8.375 22 8.70833 20.6667H15.75C15.5833 22.0417 15.4583 23.4167 15.4583 24.8333C15.4583 26.25 15.5833 27.625 15.75 29M24.8333 8.22917C26.5625 10.7292 27.9583 13.5208 28.8125 16.5H20.8542C21.7083 13.5208 23.1042 10.7292 24.8333 8.22917ZM39.25 16.5H33.1042C32.4511 13.92 31.4857 11.4294 30.2292 9.08333C34.0625 10.3958 37.25 13.0417 39.25 16.5ZM24.8333 4C13.3125 4 4 13.375 4 24.8333C4 30.3587 6.19493 35.6577 10.1019 39.5647C12.0365 41.4993 14.3331 43.0339 16.8608 44.0808C19.3884 45.1278 22.0975 45.6667 24.8333 45.6667C30.3587 45.6667 35.6577 43.4717 39.5647 39.5647C43.4717 35.6577 45.6667 30.3587 45.6667 24.8333C45.6667 22.0975 45.1278 19.3884 44.0808 16.8608C43.0339 14.3331 41.4993 12.0365 39.5647 10.1019C37.6302 8.16739 35.3335 6.63282 32.8059 5.58584C30.2783 4.53887 27.5692 4 24.8333 4Z" fill="white" />
                                </svg>
                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexia.com</p>
                            </div>
                        </div></a>

                        <a href="https://eprogram.store/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <img src="/sites/CnexiaForEveryone/Assets/Eprogramme.webp" alt="" />
                            </div>
                            <div className={styles.link_txt}>
                                <p>eProgram</p>
                            </div>
                        </div></a>


                        <a target="_blank"  href="https://cnexia.sharepoint.com/sites/Cnet/Assets/CnexiaWelcomeBook.pdf"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>

                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.6875 15.625H40.625V18.75H29.6875V15.625ZM29.6875 23.4375H40.625V26.5625H29.6875V23.4375ZM29.6875 31.25H40.625V34.375H29.6875V31.25ZM9.375 15.625H20.3125V18.75H9.375V15.625ZM9.375 23.4375H20.3125V26.5625H9.375V23.4375ZM9.375 31.25H20.3125V34.375H9.375V31.25Z" fill="white" />
                                    <path d="M43.75 7.8125H6.25C5.4212 7.8125 4.62634 8.14174 4.04029 8.72779C3.45424 9.31384 3.125 10.1087 3.125 10.9375V39.0625C3.125 39.8913 3.45424 40.6862 4.04029 41.2722C4.62634 41.8583 5.4212 42.1875 6.25 42.1875H43.75C44.5788 42.1875 45.3737 41.8583 45.9597 41.2722C46.5458 40.6862 46.875 39.8913 46.875 39.0625V10.9375C46.875 10.1087 46.5458 9.31384 45.9597 8.72779C45.3737 8.14174 44.5788 7.8125 43.75 7.8125ZM6.25 10.9375H23.4375V39.0625H6.25V10.9375ZM26.5625 39.0625V10.9375H43.75V39.0625H26.5625Z" fill="white" />
                                </svg>


                            </div>
                            <div className={styles.link_txt}>
                                <p>Welcome Book</p>
                            </div>
                        </div></a>



                        <a href="https://cnexia.selfservice.vivantio.com/Account/LogIn"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2393_529)">
                                        <path d="M43.1963 8.51212L27.0791 44.6577H23.1349L12.164 19.9892H17.3286L25.1446 38.4205L39.0292 5.1826C35.0609 2.66061 30.2519 1.18115 25.003 1.18115C10.9136 1.17513 0 11.8356 0 24.6535C0 33.5874 5.30312 41.5361 13.2879 45.5315L9.86802 53.7724L20.869 47.942C22.2098 48.1499 23.5868 48.2584 25 48.2584C39.0864 48.2584 50 37.4714 50 24.6535C50 18.4434 47.4388 12.7395 43.1963 8.5091V8.51212Z" fill="white" />
                                        <path d="M46.993 0H41.1927L39.0293 5.17958C40.5509 6.1468 41.949 7.26467 43.1995 8.51211L46.993 0Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2393_529">
                                            <rect width="50" height="53.7755" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Vivantio</p>
                            </div>
                        </div></a>

                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/Assets/Forms/AllItems.aspx?id=%2Fsites%2FCnexiaForEveryone%2FAssets%2FGuide%20%2D%20CLEARVIEW%20%2Epdf&parent=%2Fsites%2FCnexiaForEveryone%2FAssets&p=true&ga=1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="143" height="29" viewBox="0 0 143 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2393_519)">
                                        <path d="M14.1096 9.08486C13.8221 9.01313 13.5346 8.96532 13.1394 8.8936C12.5645 8.79796 11.9895 8.7621 11.4146 8.7621C7.42608 8.7621 4.9108 11.0214 4.9108 14.4282C4.9108 17.8351 7.19851 20.2019 10.8996 20.2019C11.6062 20.2019 12.3129 20.178 13.0196 20.0824C13.3789 20.0107 13.7263 19.9628 14.1335 19.8433C14.1335 20.6203 14.2653 22.9513 14.2892 23.7761C13.9419 23.8717 13.2352 24.0152 12.7561 24.0869C11.9895 24.1945 11.223 24.2543 10.4444 24.2423C4.45565 24.2423 0 20.429 0 14.4282C0 9.06095 3.94062 4.75757 11.2469 4.75757C11.8817 4.75757 12.289 4.75757 12.828 4.82929C13.3071 4.87711 13.7862 4.94883 14.2653 5.04446C14.2653 6.23984 14.1934 7.27983 14.1096 9.08486Z" fill="white" />
                                        <path d="M18.0977 13.0176V4.99658H22.6012V20.0345C22.6012 20.1301 22.6012 20.154 22.697 20.154H28.2187V23.9434H18.0977V13.0176Z" fill="white" />
                                        <path d="M31.2969 13.0176V4.99658H41.4059V8.76204H35.8004V12.4797H40.7472V16.2451H35.8004V20.154H42.0527L40.5915 23.9434H31.2969V13.0176Z" fill="white" />
                                        <path d="M64.0684 13.0177V5.0684C64.4876 5.0684 65.1703 4.97277 65.7931 4.94886C66.416 4.92495 67.5059 4.94886 68.1886 4.94886C69.4942 4.92495 70.7878 5.0684 72.0574 5.39115C74.4768 5.98884 76.1058 8.23616 75.9261 10.7106C75.974 12.3005 75.3273 13.8306 74.1654 14.9064C73.8181 15.2531 73.4108 15.5519 72.9677 15.779V15.8627C73.1354 16.1018 73.4468 16.6158 77.052 21.9113C77.5671 22.6644 78.3216 23.7522 78.4414 23.9435H73.351L68.8234 16.6636H68.3923V23.9435H64.0684V13.0177ZM71.5423 10.9975C71.6741 9.81407 70.8237 8.73822 69.6259 8.60673C69.4702 8.59478 69.3025 8.59478 69.1468 8.60673C68.8594 8.58282 68.5839 8.58282 68.2964 8.60673V13.448C68.512 13.46 68.7156 13.46 68.9312 13.448C69.5062 13.448 70.0571 13.2807 70.5362 12.9579C71.171 12.4798 71.5304 11.7147 71.5064 10.9138L71.5423 10.9975Z" fill="white" />
                                        <path d="M102.504 15.4442V23.9434H97.9766V4.99658H102.504V15.4442Z" fill="white" />
                                        <path d="M106.887 13.0176V4.99658H116.984V8.76204H111.402V12.4797H116.337V16.2451H111.402V20.154H117.14V23.9434H106.887V13.0176Z" fill="white" />
                                        <path d="M52.666 0C51.1688 3.7296 43.084 23.7403 43.084 23.9077H50.9293V20.0585H48.9769L52.6301 10.3281H52.702L56.3551 20.0585H54.4387V23.9435H62.272C62.2002 23.7403 54.1872 3.69373 52.666 0Z" fill="white" />
                                        <path d="M86.3111 28.9999L95.8931 5.09225H88.0718V8.97725H89.9882L86.3949 18.7196H86.3111L82.7178 8.97725H84.6342V5.04443H76.7051C76.765 5.24765 84.8019 25.2106 86.3111 28.9999Z" fill="white" />
                                        <path d="M138.628 4.99674C138.628 4.99674 138.257 6.19212 136.939 10.9737C136.628 12.169 136.46 12.8026 136.209 13.8665H136.137C135.706 12.8265 135.071 11.4757 134.628 10.6629C133.43 8.48725 132.029 6.06063 131.166 4.55444C130.364 5.94109 128.986 8.36772 127.872 10.5314C127.262 11.667 126.675 12.9221 126.231 13.9502H126.16C125.92 12.9819 125.657 11.9539 125.285 10.7226C123.968 6.2758 123.656 4.98478 123.656 4.98478H118.865C118.937 5.25972 119.237 6.2997 121.189 12.5874L125.022 25.0075C129.37 16.7474 130.591 14.249 131.01 13.0536C131.442 14.249 132.52 16.5441 136.939 25.0075L140.712 12.5157C142.617 6.25189 143 4.93697 143 4.93697L138.628 4.99674Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2393_519">
                                            <rect width="143" height="29" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Clearview</p>
                            </div>
                        </div></a>
                    </div>
                </div>
                <div className={styles.buttom_part}>
                    <div className={styles.urls}>
                        <div className={styles.url}><a href="/sites/Cnet/SitePages/Home.aspx" target="_blank">Home</a></div>
                        <div className={styles.url}><a href="/sites/Cnet/SitePages/Communication.aspx" target="_blank">Communication</a></div>
                        <div className={styles.url}><a href="/sites/Cnet/SitePages/Career5.aspx" target="_blank">Career</a></div>
                        <div className={styles.url}><a href="/sites/Cnet/SitePages/P&C.aspx" target="_blank">People&Culture</a></div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.cooperate}>
                        <p>© cnexia 2024</p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com/cnexia" target="_blank" className={styles.social}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_164)">
                                        <path d="M18.9679 9.16012C18.9679 4.10119 14.8669 0.00012207 9.80795 0.00012207C4.74902 0.00012207 0.647949 4.10119 0.647949 9.16012C0.647949 13.7321 3.99761 17.5217 8.3767 18.2088V11.8079H6.05092V9.16012H8.3767V7.14206C8.3767 4.84633 9.74426 3.57825 11.8366 3.57825C12.8384 3.57825 13.887 3.75715 13.887 3.75715V6.01137H12.732C11.5941 6.01137 11.2392 6.71751 11.2392 7.44262V9.16012H13.7797L13.3736 11.8079H11.2392V18.2088C15.6183 17.5217 18.9679 13.7321 18.9679 9.16012Z" fill="#00AB84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_164">
                                            <rect width="18.32" height="18.32" fill="white" transform="translate(0.647949 0.00012207)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/cnexiagroupe/?hl=en" target="_blank" className={styles.social}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_168)">
                                        <path d="M9.164 1.65024C11.6125 1.65024 11.9025 1.66097 12.8654 1.70393C13.7603 1.74331 14.2436 1.89365 14.5657 2.01894C14.9917 2.18361 15.2996 2.38407 15.6182 2.70266C15.9403 3.02484 16.1372 3.32911 16.3019 3.75509C16.4272 4.07726 16.5775 4.5641 16.6169 5.45544C16.6599 6.42196 16.6706 6.71191 16.6706 9.15684C16.6706 11.6053 16.6599 11.8953 16.6169 12.8582C16.5775 13.7532 16.4272 14.2364 16.3019 14.5586C16.1372 14.9846 15.9368 15.2924 15.6182 15.611C15.296 15.9332 14.9917 16.1301 14.5657 16.2947C14.2436 16.42 13.7567 16.5704 12.8654 16.6097C11.8989 16.6527 11.6089 16.6634 9.164 16.6634C6.71549 16.6634 6.42554 16.6527 5.4626 16.6097C4.56768 16.5704 4.08442 16.42 3.76225 16.2947C3.33627 16.1301 3.02842 15.9296 2.70982 15.611C2.38765 15.2888 2.19077 14.9846 2.0261 14.5586C1.90081 14.2364 1.75047 13.7496 1.71109 12.8582C1.66813 11.8917 1.6574 11.6018 1.6574 9.15684C1.6574 6.70833 1.66813 6.41838 1.71109 5.45544C1.75047 4.56052 1.90081 4.07726 2.0261 3.75509C2.19077 3.32911 2.39123 3.02126 2.70982 2.70266C3.032 2.38049 3.33627 2.18361 3.76225 2.01894C4.08442 1.89365 4.57126 1.74331 5.4626 1.70393C6.42554 1.66097 6.71549 1.65024 9.164 1.65024ZM9.164 0C6.67612 0 6.36468 0.0107391 5.38743 0.0536953C4.41375 0.0966516 3.74435 0.254158 3.16444 0.479678C2.55948 0.715937 2.04758 1.02737 1.53927 1.53927C1.02737 2.04758 0.715937 2.55948 0.479678 3.16086C0.254158 3.74435 0.0966516 4.41017 0.0536953 5.38385C0.0107391 6.36468 0 6.67612 0 9.164C0 11.6519 0.0107391 11.9633 0.0536953 12.9406C0.0966516 13.9142 0.254158 14.5836 0.479678 15.1636C0.715937 15.7685 1.02737 16.2804 1.53927 16.7887C2.04758 17.297 2.55948 17.6121 3.16086 17.8447C3.74435 18.0703 4.41017 18.2278 5.38385 18.2707C6.3611 18.3137 6.67254 18.3244 9.16042 18.3244C11.6483 18.3244 11.9597 18.3137 12.937 18.2707C13.9107 18.2278 14.5801 18.0703 15.16 17.8447C15.7614 17.6121 16.2733 17.297 16.7816 16.7887C17.2899 16.2804 17.6049 15.7685 17.8376 15.1671C18.0631 14.5836 18.2206 13.9178 18.2636 12.9441C18.3065 11.9669 18.3173 11.6555 18.3173 9.16758C18.3173 6.6797 18.3065 6.36826 18.2636 5.39101C18.2206 4.41733 18.0631 3.74793 17.8376 3.16802C17.6121 2.55948 17.3006 2.04758 16.7887 1.53927C16.2804 1.03095 15.7685 0.715937 15.1671 0.483258C14.5836 0.257737 13.9178 0.100231 12.9441 0.057275C11.9633 0.0107391 11.6519 0 9.164 0Z" fill="#00AB84" />
                                        <path d="M9.16397 4.45679C6.56512 4.45679 4.45668 6.56522 4.45668 9.16408C4.45668 11.7629 6.56512 13.8714 9.16397 13.8714C11.7628 13.8714 13.8713 11.7629 13.8713 9.16408C13.8713 6.56522 11.7628 4.45679 9.16397 4.45679ZM9.16397 12.2175C7.47794 12.2175 6.1105 10.8501 6.1105 9.16408C6.1105 7.47804 7.47794 6.1106 9.16397 6.1106C10.85 6.1106 12.2174 7.47804 12.2174 9.16408C12.2174 10.8501 10.85 12.2175 9.16397 12.2175Z" fill="#00AB84" />
                                        <path d="M15.1563 4.27066C15.1563 4.8792 14.6623 5.36962 14.0574 5.36962C13.4488 5.36962 12.9584 4.87563 12.9584 4.27066C12.9584 3.66211 13.4524 3.17169 14.0574 3.17169C14.6623 3.17169 15.1563 3.66569 15.1563 4.27066Z" fill="#00AB84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_168">
                                            <rect width="18.328" height="18.328" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </a>
                            <a href="https://www.linkedin.com/company/cnexia/mycompany/" target="_blank" className={styles.social}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_166)">
                                        <path d="M16.9639 0H1.35253C0.604703 0 0 0.590391 0 1.32033V16.9961C0 17.726 0.604703 18.32 1.35253 18.32H16.9639C17.7117 18.32 18.32 17.726 18.32 16.9997V1.32033C18.32 0.590391 17.7117 0 16.9639 0ZM5.43517 15.6114H2.7158V6.86642H5.43517V15.6114ZM4.07548 5.67491C3.20242 5.67491 2.49753 4.97002 2.49753 4.10053C2.49753 3.23105 3.20242 2.52616 4.07548 2.52616C4.94497 2.52616 5.64986 3.23105 5.64986 4.10053C5.64986 4.96644 4.94497 5.67491 4.07548 5.67491ZM15.6114 15.6114H12.8956V11.3605C12.8956 10.3479 12.8777 9.04192 11.4822 9.04192C10.0688 9.04192 9.85416 10.1476 9.85416 11.289V15.6114H7.14194V6.86642H9.74681V8.06152H9.78259C10.144 7.37452 11.0314 6.64816 12.3517 6.64816C15.1033 6.64816 15.6114 8.45869 15.6114 10.8131V15.6114Z" fill="#00AB84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_166">
                                            <rect width="18.32" height="18.32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;
