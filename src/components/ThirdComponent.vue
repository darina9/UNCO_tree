<template>
  <div class="third__component center">
    <h1 class="third__title green-border">
      {{ t("third.title") }}
    </h1>
    <p class="third__title_text">
      {{ t("third.title_text") }}
    </p>
    <div class="flex">
      <h3 class="third__subtitle">{{ t("third.subtitle") }}</h3>
      <ul class="third__text list-style">
        <li
          class="third__text_item item-style"
          v-for="(item, index) in items"
          :key="index"
        >
          <img class="third__text_img" src="../assets/img/apple.svg" />
          <p class="third__text_text">{{ item }}</p>
        </li>
      </ul>
    </div>

    <!-- Добавление кнопки Scroll to Top -->
    <button id="scroll-to-top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <g clip-path="url(#clip0_201_52)">
          <path
            class="path_1"
            d="M53.3333 0C55.1014 0 56.7971 0.702377 58.0474 1.95262C59.2976 3.20286 60 4.89856 60 6.66666L60 53.3333C60 55.1014 59.2976 56.7971 58.0474 58.0474C56.7971 59.2976 55.1014 60 53.3333 60L6.66667 60C4.89856 60 3.20286 59.2976 1.95262 58.0474C0.702379 56.7971 0 55.1014 0 53.3333L0 6.66666C0 4.89856 0.702379 3.20286 1.95262 1.95262C3.20286 0.702377 4.89856 0 6.66667 0L53.3333 0Z"
            fill="#BC0051"
          />
          <path
            d="M23.3327 48.3334V33.3334H11.666L29.9994 11.6667L48.3327 33.3334H36.666V48.3334H23.3327Z"
            fill="#FEFFFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_52">
            <rect
              width="60"
              height="60"
              fill="white"
              transform="matrix(0 -1 1 0 0 60)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "ThirdComponent",
  setup() {
    const { t, locale } = useI18n();
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        t("third.items.0"),
        t("third.items.1"),
        t("third.items.2"),
      ];
    };

    onMounted(() => {
      updateItems();

      const scrollToTopButton = document.getElementById("scroll-to-top");
      const thirdComponent = document.querySelector(".third__component");
      const thirdComponentHeight = thirdComponent.offsetHeight;

      window.addEventListener("scroll", function () {
        if (window.scrollY > thirdComponentHeight && window.innerWidth > 767) {
          scrollToTopButton.style.display = "block";
        } else {
          scrollToTopButton.style.display = "none";
        }
      });

      scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });

    watch(locale, () => {
      updateItems();
    });

    return { t, items };
  },
});
</script>

<style scoped>
@import url("../assets/common-styles.css");
.third__component {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
}
.third__title {
  margin-bottom: 24px;
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}
.flex {
  display: flex;
  gap: 10px;
}
.third__subtitle {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 700;
  line-height: 133%;
  display: flex;
  align-items: center;
}
.third__text_item,
.third__title_text {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 133%;
}

.third__text_img {
  width: 16px;
  height: 20px;
}

#scroll-to-top {
  display: none; /* Скрыто по умолчанию */
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
}
#scroll-to-top svg {
  width: 40px;
  height: 40px;
}
#scroll-to-top:hover .path_1 {
  fill: #a2c33d;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .flex {
    flex-direction: column;
    gap: 10px;
  }
}
@media only screen and (max-width: 767px) {
  .third__component {
    margin-top: 120px;
  }
  .third__title {
    font-size: 20px;
    margin-bottom: 0;
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .third__subtitle {
    font-size: 18px;
  }
  .third__text_item,
  .third__title_text {
    font-size: 18px;
  }
}
</style>
