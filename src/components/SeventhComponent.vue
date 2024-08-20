<template>
  <div class="seventh__component center">
    <h1 class="seventh__title green-border">
      {{ $t("seventh.title") }}
    </h1>
    <ul class="seventh__list">
      <li
        class="seventh__list_item item-style"
        v-for="(item, index) in items"
        :key="index"
        :class="{'top-zero': index === 0 || index === 2, 'top-eighty': index === 1}"
      >
        <img class="seventh__list_img" :src="getImageSrc(index)" />
        <p class="seventh__list_text">{{ item }}</p>
      </li>
    </ul>
    <div class="seventh__map">
      <h3 class="seventh__map_title">
        {{ $t("seventh.map_title") }}
      </h3>
      <div class="seventh__map_container">
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1vIEuueObT5uXAtMjIS2mebThk6Tn7Mw&ehbc=2E312F&noprof=1"
          width="100%"
          height="100%"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SeventhComponent",
  setup() {
    const { t, locale } = useI18n();
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        t("seventh.items.0"),
        t("seventh.items.1"),
        t("seventh.items.2"),
      ];
    };

    const getImageSrc = (index) => {
      switch (index) {
        case 0:
          return require("../assets/img/gas.png");
        case 1:
          return require("../assets/img/cafe.png");
        case 2:
          return require("../assets/img/shop.png");
        default:
          return "";
      }
    };

    onMounted(() => {
      updateItems();
    });

    watch(locale, () => {
      updateItems();
    });

    return { t, items, getImageSrc };
  },
});
</script>


<style scoped>
@import url("../assets/common-styles.css");
.seventh__component {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  padding: 0 10px;
}
.seventh__title {
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}
.seventh__list {
  display: flex;
  gap: 10px;
}
.seventh__list_item {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}
.seventh__list_img {
  width: 226px;
  height: 200px;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  border-radius: 8px;
}
.seventh__map_title {
  color: #bc0051;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 133%;
}
.seventh__map {
  margin-top: 20px;
  width: 700px;
  height: 380px;
}
.seventh__map_container {
  height: 100%;
}
.seventh__list_text {
  position: absolute;
  top:80px;

  left: 50%;
  transform: translateX(-50%);
  color: #bc0051; 
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  line-height: 133%;
  /* text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);  */
  width: 100%; 
  text-align: center; 
 
}
.top-zero .seventh__list_text {
  top: 0;
}

.top-eighty .seventh__list_text {
  top: 87px;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .seventh__component {
    margin-top: 200px;
  }

  .seventh__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .seventh__list_item {
    flex-direction: row;

    align-items: start;
  }
  .seventh__list_img {
    width: 230px;
    height: 204px;
  }

  .seventh__map {
    width: 470px;
    height: 424px;
  }
}
@media only screen and (max-width: 767px) {
  .seventh__component {
    margin-top: 120px;
    padding: 0 10px;
    align-items: center;
  }
  .seventh__title {
    font-size: 20px;
  }
  .seventh__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .seventh__list_item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .seventh__list_img {
    width: 300px;
    height: auto;
  }
  .seventh__map_title {
    margin-top: 10px;
  }
  .seventh__map {
    width: 300px;
    height: 300px;
  }
  .top-eighty .seventh__list_text {
  top: 120px;
}
}
</style>
