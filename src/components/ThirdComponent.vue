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
}
.third__subtitle {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 700;
  line-height: 133%;
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