<template>
  <footer class="footer center-footer">
    <div class="footer__images">
      <img
        src="../assets/img/grass_1.svg"
        alt="Grass 1"
        class="footer__image_grass_1"
      />
      <img src="../assets/img/cart.svg" alt="Cart" class="footer__image_cart" />

      <img
        src="../assets/img/grass_2.svg"
        alt="Grass 2"
        class="footer__image_grass_2"
      />
      <img
        src="../assets/img/grass_3.svg"
        alt="Grass 3"
        class="footer__image_grass_3"
      />
      <img
        src="../assets/img/grass_4.svg"
        alt="Grass 4"
        class="footer__image_grass_4"
      />
    </div>
    <div class="footer__main">
      <div class="footer__agreement">
        <a href="https://www.unco.club/include/licenses_detail.php"
          >Vereinbarung über die Verarbeitung von<br />
          personenbezogenen Daten</a
        >
        <a href="https://www.unco.club/include/impressum.php">Impressum</a>
        <a href="https://www.unco.club/include/licenses_detail.php"
          >Datenschutz</a
        >
        <a href="https://www.unco.club/company/rckgaberecht/">Rückgaberecht</a>
        <a href="https://www.unco.club/include/abg.php">AGB</a>
        <a href="https://www.unco.club/company/">Über uns</a>
        <a href="https://www.unco.club/help/">So funktioniert‘s</a>
        <a href="https://www.unco.club/company/reviews/">Kundenstimmen</a>
      </div>

      <div class="footer__center">
        <h2 class="footer__center_title">{{ $t("footer.other_services") }}</h2>
        <ul class="footer__center_list">
          <li class="footer__center_item">
            <a
              href="https://unco.club/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link"
            >
              {{ $t("footer.uff_retail") }}
            </a>
          </li>
          <li class="footer__center_item">
            <a
              href="https://unco.market/"
              class="btn-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t("footer.uff_market") }}
            </a>
          </li>
          <li class="footer__center_item">
            <a
              href="https://foodnft.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link"
            >
              {{ $t("footer.uff_investors") }}
            </a>
          </li>
          <li class="footer__center_item">
            <a
              href="https://unco.bio"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link"
              >{{ $t("footer.eco_points") }}
            </a>
          </li>
          <li class="footer__center_item">
            <a
              href="https://foodnft.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link"
            >
              {{ $t("footer.uff_online_shops") }}
            </a>
          </li>
          <li class="footer__center_item">
            <a
              href="https://unco.market/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link"
              >{{ $t("footer.unco_nft") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__right">
        <div class="footer__contacts" id="contacts">
          <h5 class="footer__contacts_title">{{ $t("footer.contact_us") }}</h5>
          <ul class="footer__contacts_list">
            <li class="footer__contacts_item">
              <p class="footer__contacts_text">
                <a href="tel:+49 17667484911">+49 17667484911</a>
              </p>
            </li>
            <li class="footer__contacts_item">
              <p class="footer__contacts_text">
                <a href="mailto:cvo(at)unco.club">cvo(at)unco.club</a>
              </p>
            </li>
            <li class="footer__contacts_item">
              <p class="footer__contacts_text">
                UNCO CLUB GmbH Westerbachstr. 47
              </p>
              <p class="footer__contacts_text">
                60489 Frankfurt am Main Germany
              </p>
              <p class="footer__contacts_text">
                Powered by Discovery Freshness Club Oy
              </p>
            </li>
          </ul>
        </div>
        <ul class="footer__links">
          <li class="footer__links_item">
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FUncoClub"
              target="_blank"
              class="svg-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                class="svg-icon"
              >
                <path
                  d="M30.0938 1H9.90625C4.98746 1 1 4.98746 1 9.90625V30.0938C1 35.0125 4.98746 39 9.90625 39H30.0938C35.0125 39 39 35.0125 39 30.0938V9.90625C39 4.98746 35.0125 1 30.0938 1Z"
                  fill="var(--color1, #FEFFFA)"
                />
                <path
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="var(--color2, #BC0051)"
                />
                <path
                  d="M31.1831 14.283C31.2003 14.5309 31.2003 14.7789 31.2003 15.0292C31.2003 22.6537 25.3959 31.4472 14.7823 31.4472V31.4425C11.6469 31.447 8.57641 30.549 5.9375 28.8558C6.39344 28.9106 6.85156 28.938 7.31094 28.9391C9.90968 28.9411 12.4337 28.0695 14.4773 26.4642C13.2732 26.4415 12.1064 26.043 11.1398 25.3246C10.1733 24.6061 9.4554 23.6036 9.08656 22.4572C9.95106 22.6239 10.8423 22.5899 11.6916 22.3578C8.99969 21.8139 7.06297 19.4487 7.06297 16.7019V16.6287C7.86546 17.0757 8.76356 17.3234 9.68172 17.3509C7.14641 15.6564 6.36484 12.2834 7.89578 9.64624C9.34442 11.4289 11.1519 12.8869 13.2007 13.9255C15.2495 14.9641 17.4939 15.56 19.7881 15.6747C19.5594 14.6901 19.5932 13.6626 19.8861 12.6952C20.179 11.7277 20.7208 10.8541 21.4573 10.1617C23.7814 7.97702 27.4366 8.08906 29.6213 10.4119C30.9134 10.1567 32.1526 9.68302 33.2855 9.01109C32.8547 10.3471 31.9533 11.4812 30.7489 12.2023C31.8928 12.0676 33.0098 11.7614 34.0625 11.2941C33.2881 12.4537 32.3131 13.4658 31.1831 14.283Z"
                  fill="var(--color1, #FEFFFA)"
                />
              </svg>
            </a>
          </li>
          <li class="footer__links_item">
            <a
              href="https://www.linkedin.com/company/unco-club"
              target="_blank"
              class="svg-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                class="svg-icon"
              >
                <path
                  d="M30.0938 1H9.90625C4.98746 1 1 4.98746 1 9.90625V30.0938C1 35.0125 4.98746 39 9.90625 39H30.0938C35.0125 39 39 35.0125 39 30.0938V9.90625C39 4.98746 35.0125 1 30.0938 1Z"
                  fill="var(--color1, #FEFFFA)"
                />
                <path
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="var(--color2, #BC0051)"
                />
                <path
                  d="M28.8617 34.0133H33.4352C33.6009 34.0133 33.7598 33.9475 33.877 33.8303C33.9942 33.7131 34.0601 33.5542 34.0602 33.3884L34.0625 23.7256C34.0625 18.6752 32.9742 14.7931 27.0722 14.7931C24.8286 14.7097 22.7128 15.8663 21.5711 17.7975C21.5655 17.8069 21.557 17.8142 21.5469 17.8183C21.5368 17.8224 21.5256 17.8231 21.5151 17.8202C21.5045 17.8173 21.4952 17.8111 21.4885 17.8025C21.4819 17.7938 21.4782 17.7833 21.4781 17.7723V15.8844C21.4781 15.7186 21.4123 15.5596 21.2951 15.4424C21.1779 15.3252 21.0189 15.2594 20.8531 15.2594H16.513C16.3472 15.2594 16.1882 15.3252 16.071 15.4424C15.9538 15.5596 15.888 15.7186 15.888 15.8844V33.3875C15.888 33.5533 15.9538 33.7122 16.071 33.8294C16.1882 33.9467 16.3472 34.0125 16.513 34.0125H21.0861C21.2519 34.0125 21.4108 33.9467 21.528 33.8294C21.6452 33.7122 21.7111 33.5533 21.7111 33.3875V24.7355C21.7111 22.2891 22.1752 19.9198 25.2081 19.9198C28.198 19.9198 28.2367 22.7192 28.2367 24.8939V33.3883C28.2367 33.554 28.3026 33.713 28.4198 33.8302C28.537 33.9474 28.696 34.0133 28.8617 34.0133ZM5.9375 9.31687C5.9375 11.1706 7.46359 12.6959 9.3175 12.6959C11.1709 12.6958 12.6961 11.1695 12.6961 9.31609C12.6958 7.46266 11.1705 5.9375 9.31687 5.9375C7.46281 5.9375 5.9375 7.46312 5.9375 9.31687ZM7.02484 34.0133H11.6041C11.7698 34.0133 11.9288 33.9474 12.046 33.8302C12.1632 33.713 12.2291 33.554 12.2291 33.3883V15.8844C12.2291 15.7186 12.1632 15.5596 12.046 15.4424C11.9288 15.3252 11.7698 15.2594 11.6041 15.2594H7.02484C6.85908 15.2594 6.70011 15.3252 6.5829 15.4424C6.46569 15.5596 6.39984 15.7186 6.39984 15.8844V33.3883C6.39984 33.554 6.46569 33.713 6.5829 33.8302C6.70011 33.9474 6.85908 34.0133 7.02484 34.0133Z"
                  fill="var(--color1, #FEFFFA)"
                />
              </svg>
            </a>
          </li>
          <li class="footer__links_item">
            <a
              href="https://discord.gg/RCANqEB8"
              target="_blank"
              class="svg-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                class="svg-icon"
              >
                <path
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="var(--color2, #BC0051)"
                />
                <mask
                  id="mask0_262_81"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="7"
                  width="32"
                  height="26"
                >
                  <path
                    d="M4.375 7.96875H35.625V32.1766H4.375V7.96875Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_262_81)">
                  <path
                    d="M30.8293 10.1245C28.8033 9.19445 26.6652 8.53126 24.4685 8.15151C24.4485 8.14782 24.4279 8.15051 24.4096 8.15921C24.3912 8.1679 24.3761 8.18216 24.3663 8.19995C24.0916 8.68839 23.7872 9.32589 23.5743 9.82683C21.1722 9.46714 18.7827 9.46714 16.4301 9.82683C16.2169 9.31464 15.9016 8.68839 15.6257 8.19995C15.6155 8.18253 15.6002 8.16858 15.582 8.15994C15.5637 8.1513 15.5433 8.14836 15.5233 8.15151C13.3265 8.53049 11.1883 9.19372 9.16256 10.1245C9.14522 10.1318 9.13059 10.1444 9.12069 10.1604C5.06944 16.2129 3.95975 22.1167 4.50412 27.9473C4.50564 27.9616 4.51002 27.9754 4.517 27.988C4.52398 28.0006 4.53341 28.0116 4.54475 28.0204C7.21756 29.9834 9.80678 31.1751 12.3479 31.965C12.3676 31.9708 12.3887 31.9706 12.4083 31.9641C12.4279 31.9577 12.4451 31.9455 12.4576 31.929C13.0587 31.1081 13.5944 30.2426 14.054 29.3325C14.0603 29.32 14.0639 29.3063 14.0646 29.2924C14.0652 29.2784 14.0629 29.2644 14.0578 29.2514C14.0527 29.2384 14.0449 29.2267 14.0348 29.2169C14.0248 29.2071 14.0129 29.1996 13.9997 29.1948C13.1497 28.8723 12.3405 28.4793 11.5621 28.0329C11.5479 28.0246 11.536 28.0129 11.5274 27.9988C11.5188 27.9848 11.5138 27.9688 11.5129 27.9524C11.5119 27.936 11.515 27.9196 11.5218 27.9046C11.5287 27.8897 11.5392 27.8766 11.5522 27.8667C11.7165 27.7439 11.8779 27.6174 12.0363 27.4873C12.0502 27.4758 12.067 27.4685 12.0848 27.466C12.1027 27.4636 12.1208 27.4662 12.1372 27.4735C17.2516 29.8085 22.7883 29.8085 27.8422 27.4735C27.8587 27.4657 27.8771 27.4628 27.8952 27.465C27.9133 27.4672 27.9305 27.4745 27.9446 27.486C28.1032 27.6169 28.265 27.7438 28.4299 27.8667C28.4431 27.8765 28.4536 27.8895 28.4606 27.9044C28.4675 27.9193 28.4707 27.9357 28.4699 27.9521C28.469 27.9685 28.4642 27.9845 28.4557 27.9986C28.4472 28.0127 28.4354 28.0245 28.4213 28.0329C27.6424 28.4877 26.8266 28.876 25.9824 29.1935C25.9693 29.1986 25.9574 29.2063 25.9475 29.2162C25.9376 29.2261 25.9298 29.238 25.9248 29.2511C25.9198 29.2643 25.9177 29.2783 25.9185 29.2923C25.9192 29.3063 25.923 29.32 25.9294 29.3325C26.3969 30.2354 26.93 31.1028 27.5244 31.9278C27.5365 31.9447 27.5536 31.9573 27.5733 31.964C27.593 31.9707 27.6142 31.971 27.6341 31.965C30.1876 31.1751 32.7768 29.9834 35.4497 28.0204C35.4612 28.012 35.4707 28.0012 35.4777 27.9888C35.4847 27.9764 35.4891 27.9627 35.4904 27.9485C36.1419 21.2078 34.399 15.3523 30.8699 10.1617C30.8613 10.1448 30.8468 10.1316 30.8293 10.1245ZM14.8177 24.3971C13.2779 24.3971 12.0091 22.9835 12.0091 21.2475C12.0091 19.5114 13.2533 18.0978 14.8177 18.0978C16.3943 18.0978 17.6507 19.5239 17.626 21.2475C17.626 22.9835 16.3819 24.3971 14.8177 24.3971ZM25.2015 24.3971C23.6616 24.3971 22.393 22.9835 22.393 21.2475C22.393 19.5114 23.6371 18.0978 25.2015 18.0978C26.778 18.0978 28.0344 19.5239 28.0099 21.2475C28.0099 22.9835 26.778 24.3971 25.2015 24.3971Z"
                    fill="var(--color1, #FEFFFA)"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li class="footer__links_item">
            <a
              href="https://www.facebook.com/unco.club.de"
              target="_blank"
              class="svg-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                class="svg-icon"
              >
                <g clip-path="url(#clip0_442_203)">
                  <rect
                    width="40"
                    height="40"
                    rx="10"
                    fill="var(--color1, #FEFFFA)"
                  />
                  <path
                    d="M30.736 0.000184676H9.21885C7.99961 0.000205641 6.79241 0.241247 5.66665 0.709449C4.54089 1.17765 3.51878 1.86378 2.65909 2.72838C1.80344 3.59112 1.12779 4.61534 0.671421 5.7415C0.215056 6.86766 -0.0129248 8.0733 0.000730965 9.28835V30.7118C-0.0146402 31.9271 0.212555 33.1333 0.669017 34.2597C1.12548 35.3861 1.80204 36.4101 2.65909 37.2718C3.51744 38.1376 4.53901 38.8246 5.66465 39.2929C6.79029 39.7612 7.99764 40.0015 9.2168 40H18.9867V25.7108H15.2535C15.0221 25.7103 14.8002 25.6184 14.6362 25.4551C14.4722 25.2919 14.3793 25.0705 14.3776 24.839V20.2524C14.3774 20.1345 14.4004 20.0178 14.4455 19.9089C14.4907 19.8 14.5569 19.7011 14.6404 19.6179C14.724 19.5348 14.8231 19.469 14.9322 19.4244C15.0413 19.3798 15.1582 19.3572 15.2761 19.358H18.9867V14.8863C18.8826 13.8294 19.0117 12.7626 19.3646 11.761C19.7176 10.7594 20.286 9.84744 21.0297 9.08937C21.7744 8.32821 22.676 7.73847 23.6718 7.36119C24.6675 6.98391 25.7336 6.82816 26.7956 6.90477H30.5986C30.7151 6.90502 30.8304 6.92846 30.9377 6.97373C31.0451 7.01899 31.1424 7.08517 31.2239 7.16842C31.3054 7.25166 31.3696 7.3503 31.4126 7.45858C31.4556 7.56686 31.4766 7.68263 31.4744 7.79912V11.676C31.4744 11.7908 31.4517 11.9044 31.4076 12.0103C31.3636 12.1162 31.2989 12.2124 31.2175 12.2932C31.1361 12.3741 31.0395 12.438 30.9333 12.4813C30.8271 12.5247 30.7133 12.5466 30.5986 12.5458H28.2951C25.7598 12.5458 25.2757 13.7396 25.2757 15.4811V19.3355H30.8057C30.9304 19.3348 31.0538 19.3608 31.1677 19.4115C31.2815 19.4623 31.3833 19.5367 31.4661 19.6299C31.549 19.723 31.6111 19.8328 31.6482 19.9518C31.6854 20.0708 31.6968 20.1963 31.6816 20.3201L31.1278 24.9088C31.1053 25.1245 31.003 25.3241 30.8409 25.4683C30.6789 25.6125 30.4688 25.691 30.2519 25.6883H25.2983V39.9774H30.7832C32.0021 39.9772 33.2089 39.7361 34.3343 39.2679C35.4598 38.7997 36.4815 38.1137 37.3409 37.2492C38.1967 36.3862 38.8724 35.3616 39.3288 34.2351C39.7852 33.1086 40.0131 31.9026 39.9993 30.6872V9.28835C40.0149 8.06913 39.7863 6.85911 39.3269 5.72965C38.8675 4.60018 38.1867 3.57412 37.3245 2.71197C36.4611 1.84542 35.434 1.15937 34.3028 0.693799C33.1717 0.228227 31.9592 -0.00755787 30.736 0.000184676Z"
                    fill="var(--color2, #BC0051)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_442_203">
                    <rect width="40" height="40" rx="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__info">
      <p class="footer__info_text">{{ $t("footer.disclaimer") }}</p>
      <p class="footer__info_text">{{ $t("footer.disclosure") }}</p>
    </div>
  </footer>
</template>
  
  <script>
export default {
  name: "FooterComponent",
};
</script>
  
  <style scoped>
@import url("../assets/common-styles.css");
.footer {
  margin-top: 200px;
  width: 100%;
  background: #c7db8b;
  position: relative;
}
.center-footer {
  padding-left: calc(50% - 670px);
  padding-right: calc(50% - 670px);
}
.footer__images {
  display: flex;

  position: absolute;

  width: 100%;
  align-items: flex-end;

  padding-left: calc(50% - 940px);
  padding-right: calc(50% - 940px);
  transform: translateY(-100%);
}
.footer__image_grass_1 {
  margin-left: 80px;
}

.footer__image_cart {
  margin-left: 90px;
}
.footer__image_grass_2 {
  margin-left: 130px;
}
.footer__image_grass_3 {
  margin-left: 380px;
}
.footer__image_grass_4 {
  margin-left: 240px;
}
.footer__main {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
}
.footer__agreement {
  display: flex;
  flex-direction: column;

  margin-left: 32px;
  gap: 10px;
  color: #313131;
  font-family: Raleway;
  font-size: 16px;

  font-weight: 400;
  line-height: 166%;
}
.footer__center {
  display: flex;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center;
  flex-direction: column;
}

.footer__center_title {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 600;
  line-height: 133%;
  margin-bottom: 20px;
}

.footer__center_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.btn-link {
  width: 100%;
   text-align: center;
}

.footer__links {
  display: flex;
  gap: 50px;
}
.footer__links_item a svg {
  fill: currentColor;
}
.svg-link {
  display: inline-block;
}
.svg-link:hover .svg-icon path {
  --color1: #214b33;
  --color2: #a2c33d;
}
.svg-link:hover rect {
  --color1: #214b33;
  --color2: #a2c33d;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
}
.footer__contacts_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__contacts_title {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 600;
  line-height: 133%;
}
.footer__contacts_text {
  color: #313131;
  font-family: Raleway;
  font-size: 18px;

  font-weight: 400;
  line-height: 133%;
}

.footer__info {
  padding-bottom: 100px;
}

.footer__info_text {
  font-family: Montserrat;
  color: #313131;
  font-size: 14px;
  margin: 40px 17px 0;
  font-weight: 400;
  line-height: 166%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .footer {
    margin-top: 235px;
    width: 100%;
    background: #c7db8b;
    position: relative;
  }
  .center-footer {
    padding-left: calc(50% - 384px);
    padding-right: calc(50% - 384px);
  }
  .footer__images {
    display: flex;

    position: absolute;

    width: 100%;
    align-items: flex-end;

    padding-left: calc(50% - 384px);
    padding-right: calc(50% - 384px);
    transform: translateY(-100%);
  }
  .footer__image_grass_1 {
    margin-left: -15px;
  }

  .footer__image_cart {
    width: 250px;
    margin-left: -15px;
  }
  .footer__image_grass_2 {
    margin-left: 45px;
  }
  .footer__image_grass_3 {
    margin-left: 80px;
  }
  .footer__image_grass_4 {
    margin-left: 170px;
  }
  .footer__main {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  .footer__agreement {
    width: 20%;
    margin-right: 100px;
    margin-left: 20px;
  }
  .footer__center {
    margin-right: 80px;
  }

  .footer__right {
    display: flex;
    gap: 90px;
    margin-top: 40px;
    padding-left: 20px;
  }
  .footer__links {
    display: flex;
    gap: 10px;
  }

  .footer__info {
    padding-bottom: 60px;
  }
  .footer__contacts {
    margin-bottom: 0px;
  }
  .footer__info_text {
    font-family: Montserrat;
    color: #313131;
    font-size: 14px;
    margin: 40px 17px;
    font-weight: 400;
    line-height: 166%;
  }
}

@media only screen and (max-width: 767px) {
  .footer {
    margin-top: 270px;
  }
  .center-footer {
    padding-left: calc(50% - 160px);
    padding-right: calc(50% - 160px);
  }

  .footer__images {
    width: 320px;
    transform: translateY(-100%);
  }
  .footer__image_grass_1 {
    margin-left: 0;
  }

  .footer__image_cart {
    width: 175px;
    margin-left: 50px;
  }
  .footer__image_grass_2 {
    margin-right: 0;
    margin-left: 0;
  }
  .footer__image_grass_3 {
    display: none;
  }
  .footer__image_grass_4 {
    display: none;
  }
  .footer__main {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 0;
  }
  .footer__center {
    order: 1;
    margin-bottom: 20px;
  }

  .footer__right {
    order: 2;
    margin-bottom: 20px;
  }

  .footer__links {
    order: 3;
    margin-bottom: 20px;
  }

  .footer__agreement {
    order: 4;
    margin-bottom: 20px;
    margin-left: 0;
  }
  .footer__center_title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .footer__right {
    margin-top: 20px;
    padding-left: 0;
  }
  .footer__links {
    display: flex;
    gap: 47px;
  }
  .footer__info_text {
    padding: 0 10px;
    font-size: 14px;
    margin: 0;
  }
}
</style>
