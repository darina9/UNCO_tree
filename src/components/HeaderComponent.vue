<template>
  <header class="header center-header">
    <nav class="header__list">
      <div class="logo">
        <a href="https://www.unco.club/"
          ><img src="../assets/img/logo.svg" alt="Логотип"
        /></a>
      </div>
      <button class="burger-menu" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M26.6673 23.3333C27.1809 23.3336 27.6748 23.5314 28.0465 23.8859C28.4182 24.2403 28.6393 24.7242 28.664 25.2372C28.6887 25.7502 28.5151 26.2531 28.1791 26.6416C27.8431 27.0301 27.3705 27.2744 26.8593 27.324L26.6673 27.3333H5.33398C4.82036 27.3331 4.32652 27.1352 3.9548 26.7808C3.58308 26.4263 3.36197 25.9425 3.33729 25.4294C3.3126 24.9164 3.48624 24.4135 3.82222 24.0251C4.1582 23.6366 4.63076 23.3922 5.14198 23.3427L5.33398 23.3333H26.6673ZM26.6673 14C27.1978 14 27.7065 14.2107 28.0815 14.5858C28.4566 14.9608 28.6673 15.4696 28.6673 16C28.6673 16.5304 28.4566 17.0391 28.0815 17.4142C27.7065 17.7893 27.1978 18 26.6673 18H5.33398C4.80355 18 4.29484 17.7893 3.91977 17.4142C3.5447 17.0391 3.33398 16.5304 3.33398 16C3.33398 15.4696 3.5447 14.9608 3.91977 14.5858C4.29484 14.2107 4.80355 14 5.33398 14H26.6673ZM26.6673 4.66666C27.1978 4.66666 27.7065 4.87737 28.0815 5.25244C28.4566 5.62752 28.6673 6.13622 28.6673 6.66666C28.6673 7.19709 28.4566 7.7058 28.0815 8.08087C27.7065 8.45594 27.1978 8.66666 26.6673 8.66666H5.33398C4.80355 8.66666 4.29484 8.45594 3.91977 8.08087C3.5447 7.7058 3.33398 7.19709 3.33398 6.66666C3.33398 6.13622 3.5447 5.62752 3.91977 5.25244C4.29484 4.87737 4.80355 4.66666 5.33398 4.66666H26.6673Z"
            fill="#BC0051"
          />
        </svg>
      </button>
      <ul class="center-links">
        <li>
          <a
            class="links title-semibold"
            href="https://foodfutures.net"
            target="_blank"
            >{{ $t("header.for_importers") }}</a
          >
        </li>
        <li>
          <a
            class="links title-semibold"
            href="http://unco.trade"
            target="_blank"
            >{{ $t("header.for_producers") }}</a
          >
        </li>
        <li>
          <a class="links title-semibold" href="#contacts">{{
            $t("header.contacts")
          }}</a>
        </li>
      </ul>
      <div class="right-links">
        <div class="links-language-wrapper" @click="toggleLanguageMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M29.833 28.9833C29.3997 27.6499 28.1497 26.6666 26.6663 26.6666H24.9997V21.6666C24.9997 21.2246 24.8241 20.8006 24.5115 20.4881C24.199 20.1755 23.775 19.9999 23.333 19.9999H13.333V16.6666H16.6663C17.1084 16.6666 17.5323 16.491 17.8449 16.1784C18.1574 15.8659 18.333 15.4419 18.333 14.9999V11.6666H21.6663C22.5504 11.6666 23.3982 11.3154 24.0234 10.6903C24.6485 10.0652 24.9997 9.21731 24.9997 8.33325V7.64992C26.9938 8.45386 28.7634 9.72904 30.1571 11.3663C31.5507 13.0036 32.5268 14.9542 33.0019 17.0511C33.477 19.148 33.4369 21.3289 32.885 23.4069C32.3331 25.485 31.2859 27.3983 29.833 28.9833ZM18.333 33.2166C11.7497 32.3999 6.66634 26.7999 6.66634 19.9999C6.66634 18.9666 6.79967 17.9666 7.01634 17.0166L14.9997 24.9999V26.6666C14.9997 27.5506 15.3509 28.3985 15.976 29.0236C16.6011 29.6487 17.449 29.9999 18.333 29.9999M19.9997 3.33325C17.811 3.33325 15.6437 3.76435 13.6216 4.60193C11.5995 5.4395 9.7622 6.66716 8.21456 8.21481C5.08896 11.3404 3.33301 15.5796 3.33301 19.9999C3.33301 24.4202 5.08896 28.6594 8.21456 31.785C9.7622 33.3327 11.5995 34.5603 13.6216 35.3979C15.6437 36.2355 17.811 36.6666 19.9997 36.6666C24.42 36.6666 28.6592 34.9106 31.7848 31.785C34.9104 28.6594 36.6663 24.4202 36.6663 19.9999C36.6663 17.8112 36.2352 15.644 35.3977 13.6219C34.5601 11.5998 33.3324 9.76245 31.7848 8.21481C30.2371 6.66716 28.3998 5.4395 26.3777 4.60193C24.3556 3.76435 22.1884 3.33325 19.9997 3.33325Z"
              fill="#a2c33d"
            />
          </svg>
          <div class="links-language-container">
            <h9 class="links-language__text">{{ $t("header.language") }}</h9>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.0004 4.99989L3.0004 4.99989C2.81816 5.00046 2.63953 5.05073 2.48373 5.14527C2.32793 5.23981 2.20086 5.37506 2.11621 5.53645C2.03155 5.69783 1.99252 5.87925 2.0033 6.06118C2.01408 6.2431 2.07428 6.41864 2.1774 6.56889L11.1774 19.5689C11.5504 20.1079 12.4484 20.1079 12.8224 19.5689L21.8224 6.56889C21.9266 6.41895 21.9877 6.24332 21.999 6.0611C22.0104 5.87887 21.9716 5.69702 21.8869 5.53529C21.8022 5.37356 21.6747 5.23814 21.5184 5.14375C21.3622 5.04936 21.183 4.99961 21.0004 4.99989Z"
                fill="#A2C33D"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div v-show="isLanguageMenuActive" class="language-menu">
      <div class="language-option" @click="changeLanguage('en')">
        <img
          src="../assets/img/US.svg"
          alt="English Flag"
          class="language-flag"
        />
        <span class="language-name">English</span>
      </div>
      <div class="language-option" @click="changeLanguage('ru')">
        <img
          src="../assets/img/RU.svg"
          alt="Russian Flag"
          class="language-flag"
        />
        <span class="language-name">Русский</span>
      </div>
      <div class="language-option" @click="changeLanguage('de')">
        <img
          src="../assets/img/DE.svg"
          alt="German Flag"
          class="language-flag"
        />
        <span class="language-name">Deutsche</span>
      </div>
      <div class="language-option" @click="changeLanguage('uk')">
        <img
          src="../assets/img/UA.svg"
          alt="Ukrainian Flag"
          class="language-flag"
        />
        <span class="language-name">Українська</span>
      </div>
      <div class="language-option" @click="changeLanguage('fr')">
        <img
          src="../assets/img/france.svg"
          alt="French Flag"
          class="language-flag"
        />
        <span class="language-name">Français</span>
      </div>
      <div class="language-option" @click="changeLanguage('es')">
        <img
          src="../assets/img/spain.svg"
          alt="Spanish Flag"
          class="language-flag"
        />
        <span class="language-name">Español</span>
      </div>
      <div class="language-option" @click="changeLanguage('it')">
        <img
          src="../assets/img/italy.svg"
          alt="Italian Flag"
          class="language-flag"
        />
        <span class="language-name">Italiano</span>
      </div>
    </div>

    <div id="menu" class="dropdown-menu" ref="menu">
      <button class="close-menu" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.56031 6.44C8.27596 6.17504 7.89986 6.03079 7.51126 6.03765C7.12266 6.0445 6.75189 6.20193 6.47706 6.47675C6.20224 6.75158 6.04481 7.12235 6.03796 7.51095C6.0311 7.89956 6.17535 8.27565 6.44031 8.56L13.8803 16L6.44031 23.44C6.29293 23.5773 6.17473 23.7429 6.09275 23.9269C6.01076 24.1109 5.96668 24.3095 5.96312 24.511C5.95957 24.7124 5.99662 24.9124 6.07206 25.0992C6.1475 25.286 6.25979 25.4556 6.40223 25.5981C6.54467 25.7405 6.71434 25.8528 6.90111 25.9282C7.08789 26.0037 7.28795 26.0407 7.48935 26.0372C7.69076 26.0336 7.88938 25.9895 8.07338 25.9076C8.25738 25.8256 8.42298 25.7074 8.56031 25.56L16.0003 18.12L23.4403 25.56C23.5776 25.7074 23.7432 25.8256 23.9272 25.9076C24.1112 25.9895 24.3099 26.0336 24.5113 26.0372C24.7127 26.0407 24.9127 26.0037 25.0995 25.9282C25.2863 25.8528 25.4559 25.7405 25.5984 25.5981C25.7408 25.4556 25.8531 25.286 25.9286 25.0992C26.004 24.9124 26.041 24.7124 26.0375 24.511C26.0339 24.3095 25.9899 24.1109 25.9079 23.9269C25.8259 23.7429 25.7077 23.5773 25.5603 23.44L18.1203 16L25.5603 8.56C25.8253 8.27565 25.9695 7.89956 25.9627 7.51095C25.9558 7.12235 25.7984 6.75158 25.5236 6.47675C25.2487 6.20193 24.878 6.0445 24.4894 6.03765C24.1007 6.03079 23.7247 6.17504 23.4403 6.44L16.0003 13.88L8.56031 6.44Z"
            fill="#A2C33D"
          />
        </svg>
      </button>
      <ul class="menu-links">
        <li>
          <a
            class="links title-semibold"
            href="https://foodfutures.net"
            target="_blank"
            >{{ $t("header.for_importers") }}</a
          >
        </li>
        <li>
          <a
            class="links title-semibold"
            href="http://unco.trade"
            target="_blank"
            >{{ $t("header.for_producers") }}</a
          >
        </li>
        <li>
          <a class="links links_max" href="#contacts">{{
            $t("header.contacts")
          }}</a>
        </li>
        <li class="links-language" @click="toggleLanguageMenu">
          <div class="links-language-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M29.833 28.9833C29.3997 27.6499 28.1497 26.6666 26.6663 26.6666H24.9997V21.6666C24.9997 21.2246 24.8241 20.8006 24.5115 20.4881C24.199 20.1755 23.775 19.9999 23.333 19.9999H13.333V16.6666H16.6663C17.1084 16.6666 17.5323 16.491 17.8449 16.1784C18.1574 15.8659 18.333 15.4419 18.333 14.9999V11.6666H21.6663C22.5504 11.6666 23.3982 11.3154 24.0234 10.6903C24.6485 10.0652 24.9997 9.21731 24.9997 8.33325V7.64992C26.9938 8.45386 28.7634 9.72904 30.1571 11.3663C31.5507 13.0036 32.5268 14.9542 33.0019 17.0511C33.477 19.148 33.4369 21.3289 32.885 23.4069C32.3331 25.485 31.2859 27.3983 29.833 28.9833ZM18.333 33.2166C11.7497 32.3999 6.66634 26.7999 6.66634 19.9999C6.66634 18.9666 6.79967 17.9666 7.01634 17.0166L14.9997 24.9999V26.6666C14.9997 27.5506 15.3509 28.3985 15.976 29.0236C16.6011 29.6487 17.449 29.9999 18.333 29.9999M19.9997 3.33325C17.811 3.33325 15.6437 3.76435 13.6216 4.60193C11.5995 5.4395 9.7622 6.66716 8.21456 8.21481C5.08896 11.3404 3.33301 15.5796 3.33301 19.9999C3.33301 24.4202 5.08896 28.6594 8.21456 31.785C9.7622 33.3327 11.5995 34.5603 13.6216 35.3979C15.6437 36.2355 17.811 36.6666 19.9997 36.6666C24.42 36.6666 28.6592 34.9106 31.7848 31.785C34.9104 28.6594 36.6663 24.4202 36.6663 19.9999C36.6663 17.8112 36.2352 15.644 35.3977 13.6219C34.5601 11.5998 33.3324 9.76245 31.7848 8.21481C30.2371 6.66716 28.3998 5.4395 26.3777 4.60193C24.3556 3.76435 22.1884 3.33325 19.9997 3.33325Z"
                fill="#A2C33D"
              />
            </svg>
            <div class="links-language-container">
              <p class="links-language__text">{{ $t("header.language") }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.0004 4.99989L3.0004 4.99989C2.81816 5.00046 2.63953 5.05073 2.48373 5.14527C2.32793 5.23981 2.20086 5.37506 2.11621 5.53645C2.03155 5.69783 1.99252 5.87925 2.0033 6.06118C2.01408 6.2431 2.07428 6.41864 2.1774 6.56889L11.1774 19.5689C11.5504 20.1079 12.4484 20.1079 12.8224 19.5689L21.8224 6.56889C21.9266 6.41895 21.9877 6.24332 21.999 6.0611C22.0104 5.87887 21.9716 5.69702 21.8869 5.53529C21.8022 5.37356 21.6747 5.23814 21.5184 5.14375C21.3622 5.04936 21.183 4.99961 21.0004 4.99989Z"
                  fill="#A2C33D"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
  
  <script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const isLanguageMenuActive = ref(false);
    const { locale } = useI18n();

    const closeLanguageMenu = () => {
      isLanguageMenuActive.value = false;
      const languageMenu = document.querySelector(".language-menu");
      languageMenu.style.display = "none";
    };

    const toggleLanguageMenu = () => {
      isLanguageMenuActive.value = !isLanguageMenuActive.value;
      const languageMenu = document.querySelector(".language-menu");

      // Определяем элемент, относительно которого будет позиционироваться меню
      let referenceElement;

      if (window.innerWidth <= 1439) {
        // Планшетная версия: позиционируем относительно .dropdown-menu > .menu-links > .links-language-wrapper
        referenceElement = document.querySelector(
          ".dropdown-menu .links-language-wrapper"
        );
        console.log("Mobile or Tablet detected, using dropdown-menu");
      } else {
        // Десктопная версия: позиционируем относительно .right-links > .links-language-wrapper
        referenceElement = document.querySelector(
          ".right-links .links-language-wrapper"
        );
      }

      if (isLanguageMenuActive.value) {
        languageMenu.style.display = "block";
        const rect = referenceElement.getBoundingClientRect();

        // Рассчитываем положение меню
        languageMenu.style.top = `${rect.bottom + window.scrollY}px`;
        languageMenu.style.left = `${rect.left + window.scrollX}px`;

        setTimeout(closeLanguageMenu, 5000); // Автоматическое закрытие через 5 секунд
      } else {
        languageMenu.style.display = "none";
      }
    };

    document.addEventListener("click", (event) => {
      const languageMenu = document.querySelector(".language-menu");
      if (
        isLanguageMenuActive.value &&
        !languageMenu.contains(event.target) &&
        !event.target.closest(".links-language-wrapper")
      ) {
        closeLanguageMenu();
      }
    });

    const changeLanguage = (lang) => {
      locale.value = lang;
      isLanguageMenuActive.value = false;
      const languageMenu = document.querySelector(".language-menu");
      languageMenu.style.display = "none";
    };

    const closeMenu = () => {
      const menu = document.getElementById("menu");
      menu.classList.remove("active");
    };

    const toggleMenu = () => {
      const menu = document.getElementById("menu");
      menu.classList.toggle("active");
    };

    document.addEventListener("click", (event) => {
      const menu = document.getElementById("menu");
      if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !event.target.closest(".burger-menu")
      ) {
        closeMenu();
      }
    });

    return {
      isLanguageMenuActive,
      toggleLanguageMenu,
      changeLanguage,
      toggleMenu,
    };
  },
};
</script>

 
  
<style>
@import url("../assets/common-styles.css");
.center-header {
  padding-left: calc(50% - 670px);
  padding-right: calc(50% - 670px);
}
.header {
  background: #fefffa;

  position: relative;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
}
.burger-menu {
  display: none;
}
.header__list {
  display: flex;
  align-items: center;

  width: 100%;
}
.center-links {
  display: flex;
  gap: 1rem;
}
.links {
  border: 1px solid #a2c33d;
  padding: 10px 20px;
  color: #a2c33d;
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.links:hover {
  background: #a2c33d;
  color: #fefffa;
}

.logo {
  text-align: center;
  margin-right: 360px;
}

.logo img {
  max-width: 100%;
  height: auto;
}

.right-links {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto; /* Прижимаем к правому краю */
}
.links-language {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
  position: relative;
}
.links-language-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.links-language__text {
  color: #a2c33d;
}

.links-language-container {
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
}
.dropdown-menu {
  display: none;
}
.right-links {
  position: relative; /* Чтобы потомки с position: absolute были позиционированы относительно этого элемента */
}

.links-language {
  position: relative;
}
.language-menu {
  position: absolute;
  top: 60px;
  left: 0;
  background: #fefffa;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  margin-top: 30px;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 6px;
}

.language-option:hover {
  background-color: #a2c33d;
  color: white;
}

.language-flag {
  width: 24px;
  height: 24px;
}

.language-name {
  font-size: 14px;
}
/* #menu {
  display: none;
} */

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .center-header {
    padding-left: calc(50% - 384px);
    padding-right: calc(50% - 384px);
  }
  .header {
    padding: 10px 10px;
  }

  .right-links {
    display: none;
  }

  .center-links {
    display: none;
  }

  .menu-links > .links {
    font-size: 14px;
  }
  .links {
    padding: 0;
  }
  .header__list {
    justify-content: space-between;
    padding: auto 17px;
  }

  .burger-menu {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }

  .dropdown-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 260px;
    height: 260px;
    background: #fefffa;
    z-index: 1000;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
    border-radius: 20px 0 20px 20px;
    border: 1px solid #a2c33d;
    background: #fefffa;
  }
  .dropdown-menu.active {
    display: block;
  }

  .close-menu {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-links {
    margin-top: 50px;
    list-style: none;
    padding-left: 20px;
  }

  .menu-links > li {
    margin-bottom: 30px;
  }

  .menu-links .links {
    color: #a2c33d;
    font-family: Montserrat;
    font-size: 16px;

    font-weight: 600;

    padding: 10px 20px;
  }
  .menu-links .links:hover {
    background: #a2c33d;
    color: #fefffa;
  }
}
@media only screen and (max-width: 767px) {
  .center-header {
    padding-left: calc(50% - 160px);
    padding-right: calc(50% - 160px);
  }

  .right-links {
    display: none;
  }

  .center-links {
    display: none;
  }
  .burger-menu {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }
  .logo {
    width: 60px;
    margin-right: 0;
  }
  .header__list {
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
  }

  .dropdown-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 260px;
    height: 260px;
    background: #fefffa;
    z-index: 1000;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
    border-radius: 20px 0 20px 20px;
    border: 1px solid #a2c33d;
    background: #fefffa;
  }
  .dropdown-menu.active {
    display: block;
  }

  .close-menu {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-links {
    margin-top: 50px;
    list-style: none;
    padding-left: 20px;
  }

  .menu-links > li {
    margin-bottom: 30px;
  }

  .menu-links .links {
    color: #a2c33d;
    font-family: Montserrat;
    font-size: 16px;

    font-weight: 600;

    padding: 10px 20px;
  }
  .menu-links .links:hover {
    background: #a2c33d;
    color: #fefffa;
  }
}
</style>

