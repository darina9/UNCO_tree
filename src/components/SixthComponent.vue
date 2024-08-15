<template>
  <div class="sixth__component center">
    <h1 class="sixth__title green-border">
      {{ $t("sixth.title") }}
    </h1>
    <ul class="sixth__text list-style">
      <li
        class="sixth__text_item item-style"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          class="sixth__text_img"
          src="../assets/img/apple.svg"
          v-if="index !== 6"
        />
        <img
          class="sixth__text_img"
          src="../assets/img/exclamation.svg"
          v-if="index === 6"
        />
        <p class="sixth__text_text">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SixthComponent",
  setup() {
    const { t, locale } = useI18n();
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        t("sixth.items.0"),
        t("sixth.items.1"),
        t("sixth.items.2"),
        t("sixth.items.3"),
        t("sixth.items.4"),
        t("sixth.items.5"),
        t("sixth.items.6"),
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
.sixth__component {
  margin-top: 200px;
  padding: 0 10px;
}
.sixth__title {
  margin-bottom: 20px;
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;

  font-weight: 700;
  line-height: 133%;
}
.sixth__text_item {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 400;
  line-height: 133%;
}

.sixth__text_img {
  width: 16px;
  height: 20px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .sixth__component {
    margin-top: 200px;
  }
}
@media only screen and (max-width: 767px) {
  .sixth__component {
    margin: 120px 10px 0;
  }
  .sixth__title {
    display: flex;
    font-size: 20px;
    justify-content: center;
  }
  .sixth__text_item {
    font-size: 18px;
  }
}
</style>
